
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { AppUser, UserRole } from '@/types/auth';

interface AuthState {
  user: AppUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthContextProps {
  authState: AuthState;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (credentials: { email: string; password: string; name: string }) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (userData: Partial<AppUser>) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Function to map Supabase user to our AppUser
const mapSupabaseUser = (supabaseUser: SupabaseUser | null): AppUser | null => {
  if (!supabaseUser) return null;
  
  return {
    id: supabaseUser.id,
    email: supabaseUser.email || '',
    name: supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0] || 'User',
    role: (supabaseUser.user_metadata?.role as UserRole) || 'developer',
    isSubscribed: !!supabaseUser.user_metadata?.is_subscribed,
    subscriptionTier: supabaseUser.user_metadata?.subscription_tier,
    subscriptionEnd: supabaseUser.user_metadata?.subscription_end,
  };
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  });
  
  const navigate = useNavigate();

  // Update user metadata
  const updateUser = (userData: Partial<AppUser>) => {
    if (!authState.user) return;
    
    setAuthState(prev => ({
      ...prev,
      user: { ...prev.user!, ...userData }
    }));
    
    // Update user metadata in Supabase
    supabase.auth.updateUser({
      data: {
        name: userData.name,
        role: userData.role,
        is_subscribed: userData.isSubscribed,
        subscription_tier: userData.subscriptionTier,
        subscription_end: userData.subscriptionEnd
      }
    }).catch(error => {
      console.error('Error updating user metadata:', error);
    });
  };

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const mappedUser = mapSupabaseUser(session?.user ?? null);
        setAuthState({
          user: mappedUser,
          isAuthenticated: !!session?.user,
          isLoading: false,
          error: null
        });
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      const mappedUser = mapSupabaseUser(session?.user ?? null);
      setAuthState({
        user: mappedUser,
        isAuthenticated: !!session?.user,
        isLoading: false,
        error: null
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const { error } = await supabase.auth.signInWithPassword(credentials);
      
      if (error) throw error;
      
      toast.success('Successfully logged in!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to login');
    }
  };

  const register = async (credentials: { email: string; password: string; name: string }) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
          data: {
            name: credentials.name,
            role: 'developer',
            is_subscribed: false
          }
        }
      });

      if (error) throw error;

      toast.success('Registration successful! Please check your email to confirm your account.');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to register');
    }
  };

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) throw error;
    } catch (error) {
      console.error('Google sign in error:', error);
      toast.error('Failed to sign in with Google');
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      toast.success('Successfully logged out');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout');
    }
  };

  return (
    <AuthContext.Provider value={{ 
      authState, 
      login, 
      register, 
      signInWithGoogle,
      logout,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
