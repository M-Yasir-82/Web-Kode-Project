
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatCard from './StatCard';
import { Key, Package, Settings, User } from 'lucide-react';

const DeveloperContent: React.FC = () => {
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
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>API Usage</CardTitle>
            <CardDescription>
              API call volume over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/20">
              <p className="text-muted-foreground">API Usage Chart</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Response Times</CardTitle>
            <CardDescription>
              Average API response times
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/20">
              <p className="text-muted-foreground">Response Time Chart</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>Get started with FinConnect</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Create your first API key</li>
              <li>Read the API documentation</li>
              <li>Set up a test environment</li>
              <li>Make your first API call</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
            <CardDescription>Manage your access keys</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-sm">Production Key</p>
                    <p className="text-xs text-muted-foreground">Created 45 days ago</p>
                  </div>
                  <div className="text-xs font-mono bg-muted px-2 py-1 rounded">
                    fck_*****1234
                  </div>
                </div>
              </div>
              
              <div className="border p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-sm">Development Key</p>
                    <p className="text-xs text-muted-foreground">Created 2 days ago</p>
                  </div>
                  <div className="text-xs font-mono bg-muted px-2 py-1 rounded">
                    fck_*****5678
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Create New Key</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>API guides and references</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="border-b pb-2">
                <a href="#" className="text-blue-600 hover:underline text-sm">Getting Started Guide</a>
                <p className="text-xs text-muted-foreground">Complete setup tutorial</p>
              </li>
              <li className="border-b pb-2">
                <a href="#" className="text-blue-600 hover:underline text-sm">API Reference</a>
                <p className="text-xs text-muted-foreground">Full endpoint documentation</p>
              </li>
              <li className="border-b pb-2">
                <a href="#" className="text-blue-600 hover:underline text-sm">SDK Examples</a>
                <p className="text-xs text-muted-foreground">Code samples for all platforms</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline text-sm">Best Practices</a>
                <p className="text-xs text-muted-foreground">Optimize your integration</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeveloperContent;
