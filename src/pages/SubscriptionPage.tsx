import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import PricingCard, { PricingTier } from '@/components/subscription/PricingCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { api } from '@/services/api';
import Navbar from '@/components/layout/Navbar';

const SubscriptionPage: React.FC = () => {
  const { authState, updateUser } = useAuth();
  const { isAuthenticated, isLoading, user } = authState;
  const [isSubscribing, setIsSubscribing] = useState(false);
  const navigate = useNavigate();
  
  const pricingTiers: PricingTier[] = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Essential features for getting started',
      price: 29,
      features: [
        'Up to 50,000 API calls per month',
        '5 API keys',
        'Email support',
        'Basic analytics dashboard',
        'Standard rate limits',
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Everything in Basic plus advanced features',
      price: 99,
      features: [
        'Up to 500,000 API calls per month',
        '20 API keys',
        'Priority email support',
        'Advanced analytics dashboard',
        'Higher rate limits',
        'Webhook integrations',
      ],
      highlighted: true,
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom solutions for larger businesses',
      price: 299,
      features: [
        'Unlimited API calls',
        'Unlimited API keys',
        'Dedicated support manager',
        'Full analytics suite',
        'Unlimited rate limits',
        'Custom integrations',
        'SLA guarantees',
      ],
    },
  ];
  
  const handleSubscribe = async (tierId: string) => {
    if (!user) return;
    
    setIsSubscribing(true);
    
    try {
      const tier = pricingTiers.find(t => t.id === tierId);
      if (!tier) throw new Error('Invalid subscription tier');
      
      const now = new Date();
      const subscriptionEnd = new Date(now.setMonth(now.getMonth() + 1)).toISOString();
      
      updateUser({
        isSubscribed: true,
        subscriptionTier: tier.name,
        subscriptionEnd
      });
      
      setTimeout(() => {
        setIsSubscribing(false);
        navigate('/dashboard');
      }, 1500);
      
    } catch (error) {
      console.error('Subscription error:', error);
      setIsSubscribing(false);
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (user?.isSubscribed) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Choose Your Plan
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Select the subscription that best fits your needs
            </p>
          </div>
          
          <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                onSelect={handleSubscribe}
                disabled={isSubscribing}
                isCurrentPlan={user?.subscriptionTier === tier.name}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/" className="text-primary hover:underline">
              Return to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
