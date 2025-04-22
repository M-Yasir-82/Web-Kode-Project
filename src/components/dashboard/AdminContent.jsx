
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import StatCard from './StatCard';
import { UserCheck, Users, Package, Settings } from 'lucide-react';

const AdminContent = () => {
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
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-md hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">User Registration</CardTitle>
            <CardDescription>
              New user sign-ups over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center rounded-md bg-gray-50 border">
              <p className="text-gray-500">User Growth Chart</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Subscription Revenue</CardTitle>
            <CardDescription>
              Revenue from subscriptions over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center rounded-md bg-gray-50 border">
              <p className="text-gray-500">Revenue Chart</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="shadow-md hover:shadow-lg transition-all">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">Recent Activity</CardTitle>
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
              <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <p className="font-medium text-gray-800">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminContent;
