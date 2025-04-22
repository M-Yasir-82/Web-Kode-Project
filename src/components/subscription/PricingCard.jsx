
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * @typedef {Object} PricingTier
 * @property {string} id - The tier ID
 * @property {string} name - The tier name
 * @property {string} description - The tier description
 * @property {number} price - The tier price
 * @property {string[]} features - The tier features
 * @property {boolean} [highlighted] - Whether the tier is highlighted
 * @property {boolean} [popular] - Whether the tier is popular
 */

/**
 * PricingCard Component
 * @param {Object} props - Component props
 * @param {PricingTier} props.tier - The pricing tier
 * @param {Function} props.onSelect - The handler for selecting this tier
 * @param {boolean} [props.isCurrentPlan] - Whether this is the user's current plan
 * @param {boolean} [props.disabled] - Whether the select button is disabled
 */
const PricingCard = ({
  tier,
  onSelect,
  isCurrentPlan = false,
  disabled = false,
}) => {
  return (
    <Card
      className={cn(
        "flex flex-col transform transition-all duration-200 hover:shadow-xl",
        tier.highlighted && "border-blue-400 shadow-lg scale-105",
        isCurrentPlan && "border-green-500"
      )}
    >
      {tier.popular && (
        <div className="py-2 text-center text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-lg">
          Popular Choice
        </div>
      )}
      
      {isCurrentPlan && (
        <div className="py-2 text-center text-sm font-medium text-white bg-green-500 rounded-t-lg">
          Current Plan
        </div>
      )}
      
      <CardHeader className={cn(
        tier.popular || isCurrentPlan ? "rounded-t-none" : "rounded-t-lg",
        "bg-gradient-to-b from-gray-50 to-white"
      )}>
        <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
        <CardDescription className="text-gray-600">{tier.description}</CardDescription>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold">${tier.price}</span>
          <span className="ml-1 text-gray-500">/month</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 py-6">
        <ul className="space-y-4">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="bg-gradient-to-t from-gray-50 to-white rounded-b-lg pt-6 pb-8">
        <Button
          onClick={() => onSelect(tier.id)}
          disabled={disabled || isCurrentPlan}
          className={cn(
            "w-full py-6 text-base font-medium transition-all duration-200 transform hover:scale-[1.02]",
            tier.highlighted 
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" 
              : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900",
            isCurrentPlan && "bg-green-500 hover:bg-green-600"
          )}
        >
          {isCurrentPlan ? "Current Plan" : "Subscribe"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
