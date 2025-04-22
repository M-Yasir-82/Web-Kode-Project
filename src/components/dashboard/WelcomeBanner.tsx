
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WelcomeBanner: React.FC = () => {
  const { authState } = useAuth();
  const { user } = authState;
  
  if (!user) return null;
  
  return (
    <div className="relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user.name}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {user.role === 'admin'
              ? 'Manage your team, monitor resources, and view analytics from your admin dashboard.'
              : 'Build and deploy your financial applications with ease.'}
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          {user.role === 'admin' ? (
            <Button asChild>
              <Link to="/dashboard/users">Manage Users</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link to="/dashboard/profile">View Profile</Link>
            </Button>
          )}
        </div>
      </div>
      
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-50 to-transparent" />
    </div>
  );
};

export default WelcomeBanner;
