
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ProfilePage: React.FC = () => {
  const { authState } = useAuth();
  const { user } = authState;
  
  if (!user) return null;
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue={user.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue={user.email} readOnly />
              <p className="text-xs text-muted-foreground">
                Your email address is used for login and cannot be changed
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>
              View your account details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label>Account Type</Label>
              <div className="rounded-md bg-muted p-2">
                <p className="text-sm font-medium capitalize">{user.role}</p>
              </div>
            </div>
            <div className="space-y-1">
              <Label>Subscription Status</Label>
              <div className="rounded-md bg-muted p-2">
                <p className="text-sm font-medium">
                  {user.isSubscribed ? (
                    <span className="text-green-600">Active - {user.subscriptionTier} Plan</span>
                  ) : (
                    <span className="text-amber-600">No active subscription</span>
                  )}
                </p>
              </div>
            </div>
            {user.isSubscribed && user.subscriptionEnd && (
              <div className="space-y-1">
                <Label>Subscription Ends</Label>
                <div className="rounded-md bg-muted p-2">
                  <p className="text-sm font-medium">
                    {new Date(user.subscriptionEnd).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {user.isSubscribed ? (
              <Button variant="outline">Manage Subscription</Button>
            ) : (
              <Button variant="outline" className="bg-primary text-primary-foreground">
                Subscribe Now
              </Button>
            )}
          </CardFooter>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>
              Manage your password and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Change Password</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
