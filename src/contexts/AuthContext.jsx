
import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '@/services/api';
import { toast } from 'sonner';

const AuthContext = createContext(null);

/**
 * AuthProvider component that wraps the application and provides authentication state
 */
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    isLoading: true,
    user: null,
    error: null,
  });

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('finconnect-token');
      if (!token) {
        setAuthState(prev => ({ ...prev, isLoading: false }));
        return;
      }
      
      try {
        const user = await api.getCurrentUser(token);
        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          user,
          error: null,
        });
      } catch (error) {
        console.error('Auth check error:', error);
        localStorage.removeItem('finconnect-token');
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          user: null,
          error: null,
        });
      }
    };
    
    checkAuth();
  }, []);

  // Login function
  const login = async (credentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const { user, token } = await api.login(credentials);
      localStorage.setItem('finconnect-token', token);
      
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        user,
        error: null,
      });
      
      toast.success(`Welcome back, ${user.name}!`);
      return user;
    } catch (error) {
      console.error('Login error:', error);
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: error.message,
      });
      throw error;
    }
  };

  // Register function
  const register = async (credentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const { user, token } = await api.register(credentials);
      localStorage.setItem('finconnect-token', token);
      
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        user,
        error: null,
      });
      
      toast.success(`Welcome to FinConnect, ${user.name}!`);
      return user;
    } catch (error) {
      console.error('Register error:', error);
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: error.message,
      });
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('finconnect-token');
    
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      error: null,
    });
    
    toast.success('You have been logged out.');
  };

  // Update user information
  const updateUser = (updates) => {
    setAuthState(prev => ({
      ...prev,
      user: { ...prev.user, ...updates },
    }));
  };

  // Subscribe user to a plan
  const subscribeUser = async (tierId) => {
    if (!authState.user) return;
    
    try {
      const updated = await api.subscribeUser(authState.user.id, tierId);
      setAuthState(prev => ({
        ...prev,
        user: updated,
      }));
      return updated;
    } catch (error) {
      console.error('Subscription error:', error);
      toast.error('Failed to update subscription. Please try again.');
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        register,
        logout,
        updateUser,
        subscribeUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
