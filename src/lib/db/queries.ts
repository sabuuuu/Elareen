import { db } from './index';
import {
  profiles,
  partnerships,
  complaints,
  letters,
  dateIdeas,
  memories,
  countdownTimers,
  moodEntries,
  watchlistItems,
  type NewProfile,
  type NewPartnership,
  type NewComplaint,
  type NewLetter,
  type NewDateIdea,
  type NewMemory,
  type NewCountdownTimer,
  type NewMoodEntry,
  type NewWatchlistItem
} from './schema';
import { eq, and, desc } from 'drizzle-orm';

// Profile queries
export const createProfile = async (profileData: NewProfile) => {
  return await db.insert(profiles).values(profileData).returning();
};

export const getProfileById = async (id: string) => {
  return await db.select().from(profiles).where(eq(profiles.id, id));
};

export const getProfileByPartnerId = async (partnerId: string) => {
  return await db.select().from(profiles).where(eq(profiles.partnerId, partnerId));
};

export const updateProfile = async (id: string, profileData: Partial<NewProfile>) => {
  return await db.update(profiles).set(profileData).where(eq(profiles.id, id)).returning();
};

// Partnership queries
export const createPartnership = async (partnershipData: NewPartnership) => {
  return await db.insert(partnerships).values(partnershipData).returning();
};

export const getPartnershipsByUserId = async (userId: string) => {
  return await db.select().from(partnerships).where(
    and(
      eq(partnerships.user1Id, userId),
      eq(partnerships.user2Id, userId)
    )
  );
};

export const getActivePartnership = async (userId: string) => {
  return await db.select().from(partnerships).where(
    and(
      eq(partnerships.status, 'active'),
      and(
        eq(partnerships.user1Id, userId),
        eq(partnerships.user2Id, userId)
      )
    )
  );
};

// Complaint queries
export const createComplaint = async (complaintData: NewComplaint) => {
  return await db.insert(complaints).values(complaintData).returning();
};

export const getComplaintsByUserId = async (userId: string) => {
  return await db.select().from(complaints).where(eq(complaints.userId, userId)).orderBy(desc(complaints.createdAt));
};

export const updateComplaintStatus = async (id: string, status: 'pending' | 'in-progress' | 'resolved', resolution?: string) => {
  return await db.update(complaints).set({
    status,
    resolution,
    resolvedAt: status === 'resolved' ? new Date() : null
  }).where(eq(complaints.id, id)).returning();
};

// Letter queries
export const createLetter = async (letterData: NewLetter) => {
  return await db.insert(letters).values(letterData).returning();
};

export const getLettersBetweenUsers = async (user1Id: string, user2Id: string) => {
  return await db.select().from(letters).where(
    and(
      eq(letters.senderId, user1Id),
      eq(letters.recipientId, user2Id)
    )
  ).orderBy(desc(letters.createdAt));
};

export const getReceivedLetters = async (userId: string) => {
  return await db.select().from(letters).where(eq(letters.recipientId, userId)).orderBy(desc(letters.createdAt));
};

export const markLetterAsRead = async (id: string) => {
  return await db.update(letters).set({ readAt: new Date() }).where(eq(letters.id, id)).returning();
};

// Date idea queries
export const createDateIdea = async (dateIdeaData: NewDateIdea) => {
  return await db.insert(dateIdeas).values(dateIdeaData).returning();
};

export const getDateIdeasByCreator = async (creatorId: string) => {
  return await db.select().from(dateIdeas).where(eq(dateIdeas.creatorId, creatorId)).orderBy(desc(dateIdeas.createdAt));
};

export const getAllDateIdeas = async () => {
  return await db.select().from(dateIdeas).orderBy(desc(dateIdeas.createdAt));
};

// Memory queries
export const createMemory = async (memoryData: NewMemory) => {
  return await db.insert(memories).values(memoryData).returning();
};

export const getMemoriesByUserId = async (userId: string) => {
  return await db.select().from(memories).where(eq(memories.userId, userId)).orderBy(desc(memories.createdAt));
};

// Countdown timer queries
export const createCountdownTimer = async (timerData: NewCountdownTimer) => {
  return await db.insert(countdownTimers).values(timerData).returning();
};

export const getCountdownTimersByCreator = async (creatorId: string) => {
  return await db.select().from(countdownTimers).where(eq(countdownTimers.creatorId, creatorId)).orderBy(countdownTimers.targetDate);
};

// Mood entry queries
export const createMoodEntry = async (moodData: NewMoodEntry) => {
  return await db.insert(moodEntries).values(moodData).returning();
};

export const getMoodEntriesByUserId = async (userId: string) => {
  return await db.select().from(moodEntries).where(eq(moodEntries.userId, userId)).orderBy(desc(moodEntries.entryDate));
};

export const getMoodEntryByDate = async (userId: string, date: string) => {
  return await db.select().from(moodEntries).where(
    and(
      eq(moodEntries.userId, userId),
      eq(moodEntries.entryDate, date)
    )
  );
};

// Watchlist queries
export const createWatchlistItem = async (watchlistData: NewWatchlistItem) => {
  return await db.insert(watchlistItems).values(watchlistData).returning();
};

export const getWatchlistByPartnership = async (partnershipId: string) => {
  return await db.select().from(watchlistItems).where(eq(watchlistItems.partnershipId, partnershipId)).orderBy(desc(watchlistItems.createdAt));
};

export const updateWatchlistItemStatus = async (id: string, status: 'watching' | 'plan-to-watch' | 'completed', rating?: number) => {
  return await db.update(watchlistItems).set({
    status,
    rating,
    completedAt: status === 'completed' ? new Date() : null
  }).where(eq(watchlistItems.id, id)).returning();
};