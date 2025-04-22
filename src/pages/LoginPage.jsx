
import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';

const LoginPage = () => {
  const { authState } = useAuth();
  const { isAuthenticated, isLoading, user } = authState;
  
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }
  
  // Redirect authenticated users to dashboard or subscription page
  if (isAuthenticated) {
    if (user?.isSubscribed) {
      return <Navigate to="/dashboard" replace />;
    } else {
      return <Navigate to="/subscription" replace />;
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to FinConnect
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access your financial dashboard and API tools
          </p>
        </div>
        
        <div className="w-full sm:mx-auto sm:max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
