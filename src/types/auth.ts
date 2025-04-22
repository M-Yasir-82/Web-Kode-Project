
import { User as SupabaseUser } from '@supabase/supabase-js';

export type UserRole = 'developer' | 'admin';

export interface AppUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isSubscribed: boolean;
  subscriptionTier?: string;
  subscriptionEnd?: string;
}

export interface AuthState {
  user: AppUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  role: UserRole;
}
