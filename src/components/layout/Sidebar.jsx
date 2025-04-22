
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { LayoutDashboard, Package, Settings, User, Users } from 'lucide-react';

/**
 * SidebarItem Component
 */
const SidebarItem = ({ to, icon, label, active, restricted }) => {
  const { authState } = useAuth();
  const userRole = authState.user?.role;
  
  // Hide item if it's restricted and user doesn't have the required role
  if (restricted && userRole !== restricted) {
    return null;
  }
  
  return (
    <li>
      <Link
        to={to}
        className={cn(
          "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-200",
          active
            ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        )}
      >
        {icon}
        <span className="ml-3">{label}</span>
      </Link>
    </li>
  );
};

/**
 * Sidebar Component
 */
const Sidebar = () => {
  const location = useLocation();
  const { authState } = useAuth();
  const { user } = authState;
  
  if (!user) return null;
  
  return (
    <div className="h-full bg-white flex flex-col border-r border-gray-200 shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-semibold">
              {user.name.substring(0, 1).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-600 capitalize">{user.role}</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto py-4 px-3">
        <ul className="space-y-1">
          <SidebarItem
            to="/dashboard"
            icon={<LayoutDashboard className="w-5 h-5" />}
            label="Dashboard"
            active={location.pathname === '/dashboard'}
          />
          
          <SidebarItem
            to="/dashboard/subscription"
            icon={<Package className="w-5 h-5" />}
            label="Subscription"
            active={location.pathname === '/dashboard/subscription'}
          />
          
          <SidebarItem
            to="/dashboard/profile"
            icon={<User className="w-5 h-5" />}
            label="Profile"
            active={location.pathname === '/dashboard/profile'}
          />
          
          <SidebarItem
            to="/dashboard/users"
            icon={<Users className="w-5 h-5" />}
            label="Manage Users"
            active={location.pathname === '/dashboard/users'}
            restricted="admin"
          />
          
          <SidebarItem
            to="/dashboard/settings"
            icon={<Settings className="w-5 h-5" />}
            label="Settings"
            active={location.pathname === '/dashboard/settings'}
          />
        </ul>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-600">
          {user.isSubscribed ? (
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">
                {user.subscriptionTier} Plan
              </span>
              <span>
                Expires: {new Date(user.subscriptionEnd || '').toLocaleDateString()}
              </span>
            </div>
          ) : (
            <Link 
              to="/subscription" 
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium inline-flex items-center"
            >
              <Package className="w-3 h-3 mr-1" />
              Upgrade to Premium
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
