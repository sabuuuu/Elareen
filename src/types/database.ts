// TypeScript types for Supabase database schema
// Generated based on the database migrations

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          first_name: string
          last_name: string
          avatar_url: string | null
          partner_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          first_name: string
          last_name: string
          avatar_url?: string | null
          partner_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          avatar_url?: string | null
          partner_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      partnerships: {
        Row: {
          id: string
          user1_id: string
          user2_id: string
          status: 'pending' | 'active' | 'ended'
          established_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user1_id: string
          user2_id: string
          status?: 'pending' | 'active' | 'ended'
          established_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user1_id?: string
          user2_id?: string
          status?: 'pending' | 'active' | 'ended'
          established_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      letters: {
        Row: {
          id: string
          sender_id: string
          recipient_id: string
          subject: string
          content: string
          send_as_email: boolean
          email_sent: boolean
          read_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          sender_id: string
          recipient_id: string
          subject: string
          content: string
          send_as_email?: boolean
          email_sent?: boolean
          read_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          sender_id?: string
          recipient_id?: string
          subject?: string
          content?: string
          send_as_email?: boolean
          email_sent?: boolean
          read_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      user_partnerships: {
        Row: {
          id: string
          status: 'pending' | 'active' | 'ended'
          established_at: string | null
          created_at: string
          partner_id: string
          partner_name: string
          partner_avatar_url: string | null
        }
      }
      letter_conversations: {
        Row: {
          id: string
          sender_id: string
          recipient_id: string
          subject: string
          content: string
          send_as_email: boolean
          email_sent: boolean
          read_at: string | null
          created_at: string
          updated_at: string
          sender_name: string
          recipient_name: string
          is_unread: boolean
        }
      }
    }
    Functions: {
      send_partnership_invitation: {
        Args: {
          partner_email: string
        }
        Returns: {
          success: boolean
          error?: string
          partnership_id?: string
          message?: string
        }
      }
      accept_partnership_invitation: {
        Args: {
          partnership_id: string
        }
        Returns: {
          success: boolean
          error?: string
          message?: string
        }
      }
      end_partnership: {
        Args: {
          partnership_id: string
        }
        Returns: {
          success: boolean
          error?: string
          message?: string
        }
      }
      get_partnership_status: {
        Args: Record<PropertyKey, never>
        Returns: {
          success: boolean
          error?: string
          status: 'single' | 'pending' | 'partnered'
          partnership?: any
          partner?: any
        }
      }
      are_users_partners: {
        Args: {
          user1_id: string
          user2_id: string
        }
        Returns: boolean
      }
      get_current_user_partner_id: {
        Args: Record<PropertyKey, never>
        Returns: string | null
      }
      mark_letter_as_read: {
        Args: {
          letter_id: string
        }
        Returns: void
      }
      get_unread_letter_count: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
    }
  }
}

// Helper types for common operations
export type Profile = Database['public']['Tables']['profiles']['Row']
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert']
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update']

export type Partnership = Database['public']['Tables']['partnerships']['Row']
export type PartnershipInsert = Database['public']['Tables']['partnerships']['Insert']
export type PartnershipUpdate = Database['public']['Tables']['partnerships']['Update']

export type Letter = Database['public']['Tables']['letters']['Row']
export type LetterInsert = Database['public']['Tables']['letters']['Insert']
export type LetterUpdate = Database['public']['Tables']['letters']['Update']

export type UserPartnership = Database['public']['Views']['user_partnerships']['Row']
export type LetterConversation = Database['public']['Views']['letter_conversations']['Row']

export type PartnershipStatus = 'pending' | 'active' | 'ended'

// Function return types
export type PartnershipInvitationResult = Database['public']['Functions']['send_partnership_invitation']['Returns']
export type PartnershipAcceptResult = Database['public']['Functions']['accept_partnership_invitation']['Returns']
export type PartnershipEndResult = Database['public']['Functions']['end_partnership']['Returns']
export type PartnershipStatusResult = Database['public']['Functions']['get_partnership_status']['Returns']