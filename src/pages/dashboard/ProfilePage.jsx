
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ProfilePage = () => {
  const { authState } = useAuth();
  const { user } = authState;
  
  if (!user) return null;
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600 mt-1">
          Manage your account settings and preferences
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="shadow-md hover:shadow-lg transition-all">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
            <CardTitle className="text-xl text-gray-800">Personal Information</CardTitle>
            <CardDescription>
              Update your personal details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">Name</Label>
              <Input 
                id="name" 
                defaultValue={user.name} 
                className="focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input 
                id="email" 
                defaultValue={user.email} 
                readOnly 
                className="bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <p className="text-xs text-gray-500">
                Your email address is used for login and cannot be changed
              </p>
            </div>
          </CardContent>
          <CardFooter className="bg-gradient-to-b from-white to-gray-50 border-t px-6 py-4">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all">
              Save Changes
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="shadow-md hover:shadow-lg transition-all">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
            <CardTitle className="text-xl text-gray-800">Account Information</CardTitle>
            <CardDescription>
              View your account details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-2">
              <Label className="text-gray-700">Account Type</Label>
              <div className="rounded-md bg-gray-50 p-3 border">
                <p className="text-sm font-medium capitalize text-gray-800">{user.role}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-700">Subscription Status</Label>
              <div className="rounded-md bg-gray-50 p-3 border">
                <p className="text-sm font-medium">
                  {user.isSubscribed ? (
                    <span className="text-green-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Active - {user.subscriptionTier} Plan
                    </span>
                  ) : (
                    <span className="text-amber-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      No active subscription
                    </span>
                  )}
                </p>
              </div>
            </div>
            {user.isSubscribed && user.subscriptionEnd && (
              <div className="space-y-2">
                <Label className="text-gray-700">Subscription Ends</Label>
                <div className="rounded-md bg-gray-50 p-3 border">
                  <p className="text-sm font-medium text-gray-800">
                    {new Date(user.subscriptionEnd).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="bg-gradient-to-b from-white to-gray-50 border-t px-6 py-4 flex justify-between">
            {user.isSubscribed ? (
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                Manage Subscription
              </Button>
            ) : (
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all">
                Subscribe Now
              </Button>
            )}
          </CardFooter>
        </Card>
        
        <Card className="shadow-md hover:shadow-lg transition-all md:col-span-2">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
            <CardTitle className="text-xl text-gray-800">Security</CardTitle>
            <CardDescription>
              Manage your password and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-gray-700">Current Password</Label>
              <Input 
                id="current-password" 
                type="password" 
                className="focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-gray-700">New Password</Label>
              <Input 
                id="new-password" 
                type="password" 
                className="focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-gray-700">Confirm New Password</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                className="focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </CardContent>
          <CardFooter className="bg-gradient-to-b from-white to-gray-50 border-t px-6 py-4">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all">
              Change Password
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
