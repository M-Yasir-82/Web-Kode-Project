
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WelcomeBanner = () => {
  const { authState } = useAuth();
  const { user } = authState;
  
  if (!user) return null;
  
  return (
    <div className="relative overflow-hidden rounded-xl border-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 shadow-md">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Welcome back, {user.name}
          </h1>
          <p className="mt-2 text-gray-600 max-w-xl">
            {user.role === 'admin'
              ? 'Manage your team, monitor resources, and view analytics from your admin dashboard.'
              : 'Build and deploy your financial applications with ease using our powerful API tools.'}
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          {user.role === 'admin' ? (
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all">
              <Link to="/dashboard/users">Manage Users</Link>
            </Button>
          ) : (
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all">
              <Link to="/dashboard/profile">View Profile</Link>
            </Button>
          )}
        </div>
      </div>
      
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/30 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 h-32 w-32 transform translate-x-16 translate-y-16 rounded-full bg-gradient-to-r from-blue-200 to-indigo-200 opacity-50 blur-2xl" />
      <div className="absolute top-0 left-0 h-16 w-16 transform -translate-x-8 -translate-y-8 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-50 blur-xl" />
    </div>
  );
};

export default WelcomeBanner;
