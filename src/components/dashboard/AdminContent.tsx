
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import StatCard from './StatCard';
import { UserCheck, Users, Package, Settings } from 'lucide-react';

const AdminContent: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Users" 
          value="128" 
          description="Active accounts on platform" 
          icon={<Users />}
          trend="up"
          trendValue="12% from last month"
        />
        <StatCard 
          title="Subscribers" 
          value="84" 
          description="Premium tier subscribers" 
          icon={<UserCheck />}
          trend="up"
          trendValue="8% from last month"
        />
        <StatCard 
          title="Premium Plans" 
          value="3" 
          description="Active subscription tiers" 
          icon={<Package />}
        />
        <StatCard 
          title="API Keys" 
          value="47" 
          description="Active API keys" 
          icon={<Settings />}
          trend="up"
          trendValue="15% from last month"
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Registration</CardTitle>
            <CardDescription>
              New user sign-ups over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/20">
              <p className="text-muted-foreground">User Growth Chart</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Subscription Revenue</CardTitle>
            <CardDescription>
              Revenue from subscriptions over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/20">
              <p className="text-muted-foreground">Revenue Chart</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest platform activities and events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { user: 'John Smith', action: 'created an API key', time: '2 hours ago' },
              { user: 'Sarah Johnson', action: 'upgraded subscription to Premium', time: '5 hours ago' },
              { user: 'Mike Reynolds', action: 'registered a new account', time: '1 day ago' },
              { user: 'Lisa Wong', action: 'updated profile information', time: '2 days ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                <div>
                  <p className="font-medium">{activity.user}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminContent;
