
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import AdminContent from '@/components/dashboard/AdminContent';
import DeveloperContent from '@/components/dashboard/DeveloperContent';

const DashboardPage = () => {
  const { authState } = useAuth();
  const { user } = authState;
  
  return (
    <div className="space-y-8">
      <WelcomeBanner />
      
      {user?.role === 'admin' ? (
        <AdminContent />
      ) : (
        <DeveloperContent />
      )}
    </div>
  );
};

export default DashboardPage;
