import { pgTable, uuid, text, timestamp, boolean, integer, date, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const partnershipStatusEnum = pgEnum('partnership_status', ['pending', 'active', 'ended']);
export const complaintStatusEnum = pgEnum('complaint_status', ['pending', 'in-progress', 'resolved']);
export const complaintCategoryEnum = pgEnum('complaint_category', ['Chores', 'Communication', 'Quality Time', 'Habits', 'Other']);
export const dateIdeaTypeEnum = pgEnum('date_idea_type', ['indoor', 'outdoor', 'virtual']);
export const dateIdeaDifficultyEnum = pgEnum('date_idea_difficulty', ['easy', 'medium', 'hard']);
export const watchlistStatusEnum = pgEnum('watchlist_status', ['watching', 'plan-to-watch', 'completed']);
export const watchlistTypeEnum = pgEnum('watchlist_type', ['Movie', 'TV Show']);

// Profiles table
export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  avatarUrl: text('avatar_url'),
  partnerId: uuid('partner_id'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

// Partnerships table
export const partnerships = pgTable('partnerships', {
  id: uuid('id').primaryKey().defaultRandom(),
  user1Id: uuid('user1_id').references(() => profiles.id).notNull(),
  user2Id: uuid('user2_id').references(() => profiles.id).notNull(),
  status: partnershipStatusEnum('status').default('pending'),
  establishedAt: timestamp('established_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

// Complaints table
export const complaints = pgTable('complaints', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => profiles.id).notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  category: complaintCategoryEnum('category').notNull(),
  moodLevel: integer('mood_level').notNull(),
  suggestedApology: text('suggested_apology'),
  status: complaintStatusEnum('status').default('pending'),
  resolution: text('resolution'),
  resolvedAt: timestamp('resolved_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

// Letters table
export const letters = pgTable('letters', {
  id: uuid('id').primaryKey().defaultRandom(),
  senderId: uuid('sender_id').references(() => profiles.id).notNull(),
  recipientId: uuid('recipient_id').references(() => profiles.id).notNull(),
  subject: text('subject').notNull(),
  content: text('content').notNull(),
  sendAsEmail: boolean('send_as_email').default(false),
  emailSent: boolean('email_sent').default(false),
  readAt: timestamp('read_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

// Date ideas table
export const dateIdeas = pgTable('date_ideas', {
  id: uuid('id').primaryKey().defaultRandom(),
  creatorId: uuid('creator_id').references(() => profiles.id).notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  type: dateIdeaTypeEnum('type').notNull(),
  location: text('location'),
  difficulty: dateIdeaDifficultyEnum('difficulty').default('easy'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

// Date idea tags table
export const dateIdeaTags = pgTable('date_idea_tags', {
  id: uuid('id').primaryKey().defaultRandom(),
  dateIdeaId: uuid('date_idea_id').references(() => dateIdeas.id).notNull(),
  tag: text('tag').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// Date idea interactions table
export const dateIdeaInteractions = pgTable('date_idea_interactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => profiles.id).notNull(),
  dateIdeaId: uuid('date_idea_id').references(() => dateIdeas.id).notNull(),
  isFavorite: boolean('is_favorite').default(false),
  hasVoted: boolean('has_voted').default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

// Memories table
export const memories = pgTable('memories', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => profiles.id).notNull(),
  title: text('title').notNull(),
  description: text('description'),
  imageUrl: text('image_url').notNull(),
  imagePath: text('image_path').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

// Memory tags table
export const memoryTags = pgTable('memory_tags', {
  id: uuid('id').primaryKey().defaultRandom(),
  memoryId: uuid('memory_id').references(() => memories.id),
  tag: text('tag').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// Countdown timers table
export const countdownTimers = pgTable('countdown_timers', {
  id: uuid('id').primaryKey().defaultRandom(),
  creatorId: uuid('creator_id').references(() => profiles.id).notNull(),
  title: text('title').notNull(),
  targetDate: timestamp('target_date', { withTimezone: true }).notNull(),
  iconType: text('icon_type').default('calendar'),
  isMilestone: boolean('is_milestone').default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

// Mood entries table
export const moodEntries = pgTable('mood_entries', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => profiles.id).notNull(),
  moodLevel: integer('mood_level').notNull(),
  notes: text('notes'),
  entryDate: date('entry_date').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

// Watchlist items table
export const watchlistItems = pgTable('watchlist_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  partnershipId: uuid('partnership_id').references(() => partnerships.id).notNull(),
  title: text('title').notNull(),
  type: watchlistTypeEnum('type').notNull(),
  status: watchlistStatusEnum('status').default('plan-to-watch'),
  addedBy: uuid('added_by').references(() => profiles.id).notNull(),
  notes: text('notes'),
  rating: integer('rating'),
  completedAt: timestamp('completed_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

// Relations
export const profilesRelations = relations(profiles, ({ one, many }) => ({
  partner: one(profiles, {
    fields: [profiles.partnerId],
    references: [profiles.id],
    relationName: 'partner',
  }),
  partnerships1: many(partnerships, { relationName: 'user1' }),
  partnerships2: many(partnerships, { relationName: 'user2' }),
  complaints: many(complaints),
  sentLetters: many(letters, { relationName: 'sender' }),
  receivedLetters: many(letters, { relationName: 'recipient' }),
  dateIdeas: many(dateIdeas),
  dateIdeaInteractions: many(dateIdeaInteractions),
  memories: many(memories),
  countdownTimers: many(countdownTimers),
  moodEntries: many(moodEntries),
  watchlistItems: many(watchlistItems),
}));

export const partnershipsRelations = relations(partnerships, ({ one, many }) => ({
  user1: one(profiles, {
    fields: [partnerships.user1Id],
    references: [profiles.id],
    relationName: 'user1',
  }),
  user2: one(profiles, {
    fields: [partnerships.user2Id],
    references: [profiles.id],
    relationName: 'user2',
  }),
  watchlistItems: many(watchlistItems),
}));

export const complaintsRelations = relations(complaints, ({ one }) => ({
  user: one(profiles, {
    fields: [complaints.userId],
    references: [profiles.id],
  }),
}));

export const lettersRelations = relations(letters, ({ one }) => ({
  sender: one(profiles, {
    fields: [letters.senderId],
    references: [profiles.id],
    relationName: 'sender',
  }),
  recipient: one(profiles, {
    fields: [letters.recipientId],
    references: [profiles.id],
    relationName: 'recipient',
  }),
}));

export const dateIdeasRelations = relations(dateIdeas, ({ one, many }) => ({
  creator: one(profiles, {
    fields: [dateIdeas.creatorId],
    references: [profiles.id],
  }),
  tags: many(dateIdeaTags),
  interactions: many(dateIdeaInteractions),
}));

export const dateIdeaTagsRelations = relations(dateIdeaTags, ({ one }) => ({
  dateIdea: one(dateIdeas, {
    fields: [dateIdeaTags.dateIdeaId],
    references: [dateIdeas.id],
  }),
}));

export const dateIdeaInteractionsRelations = relations(dateIdeaInteractions, ({ one }) => ({
  user: one(profiles, {
    fields: [dateIdeaInteractions.userId],
    references: [profiles.id],
  }),
  dateIdea: one(dateIdeas, {
    fields: [dateIdeaInteractions.dateIdeaId],
    references: [dateIdeas.id],
  }),
}));

export const memoriesRelations = relations(memories, ({ one, many }) => ({
  user: one(profiles, {
    fields: [memories.userId],
    references: [profiles.id],
  }),
  tags: many(memoryTags),
}));

export const memoryTagsRelations = relations(memoryTags, ({ one }) => ({
  memory: one(memories, {
    fields: [memoryTags.memoryId],
    references: [memories.id],
  }),
}));

export const countdownTimersRelations = relations(countdownTimers, ({ one }) => ({
  creator: one(profiles, {
    fields: [countdownTimers.creatorId],
    references: [profiles.id],
  }),
}));

export const moodEntriesRelations = relations(moodEntries, ({ one }) => ({
  user: one(profiles, {
    fields: [moodEntries.userId],
    references: [profiles.id],
  }),
}));

export const watchlistItemsRelations = relations(watchlistItems, ({ one }) => ({
  partnership: one(partnerships, {
    fields: [watchlistItems.partnershipId],
    references: [partnerships.id],
  }),
  addedByUser: one(profiles, {
    fields: [watchlistItems.addedBy],
    references: [profiles.id],
  }),
}));

// Export types for TypeScript
export type Profile = typeof profiles.$inferSelect;
export type NewProfile = typeof profiles.$inferInsert;
export type Partnership = typeof partnerships.$inferSelect;
export type NewPartnership = typeof partnerships.$inferInsert;
export type Complaint = typeof complaints.$inferSelect;
export type NewComplaint = typeof complaints.$inferInsert;
export type Letter = typeof letters.$inferSelect;
export type NewLetter = typeof letters.$inferInsert;
export type DateIdea = typeof dateIdeas.$inferSelect;
export type NewDateIdea = typeof dateIdeas.$inferInsert;
export type DateIdeaTag = typeof dateIdeaTags.$inferSelect;
export type NewDateIdeaTag = typeof dateIdeaTags.$inferInsert;
export type DateIdeaInteraction = typeof dateIdeaInteractions.$inferSelect;
export type NewDateIdeaInteraction = typeof dateIdeaInteractions.$inferInsert;
export type Memory = typeof memories.$inferSelect;
export type NewMemory = typeof memories.$inferInsert;
export type MemoryTag = typeof memoryTags.$inferSelect;
export type NewMemoryTag = typeof memoryTags.$inferInsert;
export type CountdownTimer = typeof countdownTimers.$inferSelect;
export type NewCountdownTimer = typeof countdownTimers.$inferInsert;
export type MoodEntry = typeof moodEntries.$inferSelect;
export type NewMoodEntry = typeof moodEntries.$inferInsert;
export type WatchlistItem = typeof watchlistItems.$inferSelect;
export type NewWatchlistItem = typeof watchlistItems.$inferInsert;