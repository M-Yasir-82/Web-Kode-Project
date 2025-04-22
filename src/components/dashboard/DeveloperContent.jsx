
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatCard from './StatCard';
import { Key, Package, Settings, User } from 'lucide-react';

const DeveloperContent = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="API Calls" 
          value="15,872" 
          description="Last 30 days" 
          icon={<Key />}
          trend="up"
          trendValue="23% from last month"
        />
        <StatCard 
          title="Projects" 
          value="4" 
          description="Active projects" 
          icon={<Package />}
        />
        <StatCard 
          title="API Keys" 
          value="2" 
          description="Active keys" 
          icon={<Settings />}
        />
        <StatCard 
          title="Usage Quota" 
          value="67%" 
          description="Of monthly limit" 
          icon={<User />}
          trend="neutral"
          trendValue="5% increase this week"
        />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-md hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">API Usage</CardTitle>
            <CardDescription>
              API call volume over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center rounded-md bg-gray-50 border">
              <p className="text-gray-500">API Usage Chart</p>
            </div>
          </CardContent>
          <CardFooter className="justify-end pt-0">
            <Button variant="outline" size="sm">View Details</Button>
          </CardFooter>
        </Card>
        
        <Card className="shadow-md hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">API Response Times</CardTitle>
            <CardDescription>
              Average response time by endpoint
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center rounded-md bg-gray-50 border">
              <p className="text-gray-500">Response Time Chart</p>
            </div>
          </CardContent>
          <CardFooter className="justify-end pt-0">
            <Button variant="outline" size="sm">View Details</Button>
          </CardFooter>
        </Card>
      </div>
      
      <Card className="shadow-md hover:shadow-lg transition-all">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-xl text-gray-800">Your API Keys</span>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Create New Key
            </Button>
          </CardTitle>
          <CardDescription>
            Manage your API access keys
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Production Key', created: '2023-06-15', lastUsed: '2023-08-22', status: 'Active' },
              { name: 'Test Environment', created: '2023-07-03', lastUsed: '2023-08-21', status: 'Active' },
            ].map((key, index) => (
              <div key={index} className="bg-gray-50 border rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-gray-800">{key.name}</h3>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-600 mt-1">
                      <span>Created: {key.created}</span>
                      <span>Last used: {key.lastUsed}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">{key.status}</span>
                    <Button variant="outline" size="sm">Revoke</Button>
                    <Button variant="outline" size="sm">Copy</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeveloperContent;
