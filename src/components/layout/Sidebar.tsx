
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { Dashboard, Package, Settings, User, Users } from 'lucide-react';

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  restricted?: 'admin' | 'developer';
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, label, active, restricted }) => {
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
          "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors",
          active
            ? "bg-sidebar-accent text-sidebar-accent-foreground"
            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
        )}
      >
        {icon}
        <span className="ml-3">{label}</span>
      </Link>
    </li>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { authState } = useAuth();
  const { user } = authState;
  
  if (!user) return null;
  
  return (
    <div className="h-full bg-sidebar flex flex-col border-r border-sidebar-border">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center">
            <span className="text-sidebar-accent-foreground font-semibold">
              {user.name.substring(0, 1).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">{user.name}</p>
            <p className="text-xs text-sidebar-foreground/70 capitalize">{user.role}</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto py-2 px-2">
        <ul className="space-y-1">
          <SidebarItem
            to="/dashboard"
            icon={<Dashboard className="w-5 h-5" />}
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
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-sidebar-foreground/70">
          {user.isSubscribed ? (
            <div className="flex flex-col">
              <span className="font-medium text-sidebar-foreground">
                {user.subscriptionTier} Plan
              </span>
              <span>
                Expires: {new Date(user.subscriptionEnd || '').toLocaleDateString()}
              </span>
            </div>
          ) : (
            <Link 
              to="/subscription" 
              className="text-sidebar-primary hover:underline font-medium"
            >
              Upgrade to Premium
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
