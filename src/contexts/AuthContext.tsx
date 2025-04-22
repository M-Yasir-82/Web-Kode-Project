
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { User, AuthState, LoginCredentials, RegisterCredentials } from '../types/auth';
import { api } from '../services/api';

interface AuthContextProps {
  authState: AuthState;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    accessToken: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: true,
    error: null
  });
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setAuthState(prev => ({ ...prev, isLoading: false }));
        return;
      }
      
      try {
        const user = await api.getCurrentUser(token);
        setAuthState({
          user,
          accessToken: token,
          isAuthenticated: true,
          isLoading: false,
          error: null
        });
      } catch (error) {
        console.error('Auth initialization error:', error);
        localStorage.removeItem('token');
        setAuthState({
          user: null,
          accessToken: null,
          isAuthenticated: false,
          isLoading: false,
          error: 'Session expired. Please login again.'
        });
      }
    };
    
    initAuth();
  }, []);
  
  const login = async (credentials: LoginCredentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const { user, token } = await api.login(credentials);
      
      localStorage.setItem('token', token);
      
      setAuthState({
        user,
        accessToken: token,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });
      
      toast.success(`Welcome back, ${user.name}!`);
      
      if (!user.isSubscribed) {
        navigate('/subscription');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to login'
      }));
      toast.error('Login failed. Please check your credentials.');
    }
  };
  
  const register = async (credentials: RegisterCredentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const { user, token } = await api.register(credentials);
      
      localStorage.setItem('token', token);
      
      setAuthState({
        user,
        accessToken: token,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });
      
      toast.success('Registration successful!');
      navigate('/subscription');
    } catch (error) {
      console.error('Registration error:', error);
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to register'
      }));
      toast.error('Registration failed. Please try again.');
    }
  };
  
  const logout = () => {
    localStorage.removeItem('token');
    
    setAuthState({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });
    
    toast.success('You have been logged out');
    navigate('/login');
  };
  
  const updateUser = (user: User) => {
    setAuthState(prev => ({
      ...prev,
      user
    }));
  };
  
  return (
    <AuthContext.Provider value={{ authState, login, register, logout, updateUser }}>
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
