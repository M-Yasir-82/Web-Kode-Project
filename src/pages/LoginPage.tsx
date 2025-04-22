
import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import { useAuth } from '@/contexts/AuthContext';

const LoginPage: React.FC = () => {
  const { authState } = useAuth();
  const { isAuthenticated, isLoading, user } = authState;
  
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to FinConnect
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Access your financial dashboard and API tools
        </p>
      </div>
      
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
