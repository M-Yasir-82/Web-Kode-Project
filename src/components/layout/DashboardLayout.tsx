
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout: React.FC = () => {
  const { authState } = useAuth();
  const { isAuthenticated, isLoading, user } = authState;
  
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Redirect to subscription page if not subscribed
  if (user && !user.isSubscribed) {
    return <Navigate to="/subscription" replace />;
  }
  
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      
      <div className="flex flex-1 pt-16">
        <aside className="hidden w-64 md:block">
          <Sidebar />
        </aside>
        
        <main className="flex-1 overflow-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
