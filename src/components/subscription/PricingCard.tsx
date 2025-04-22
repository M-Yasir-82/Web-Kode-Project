
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  highlighted?: boolean;
  popular?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  onSelect: (tierId: string) => void;
  isCurrentPlan?: boolean;
  disabled?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  onSelect,
  isCurrentPlan = false,
  disabled = false,
}) => {
  return (
    <Card
      className={cn(
        "flex flex-col",
        tier.highlighted && "border-primary shadow-lg",
        isCurrentPlan && "border-green-500"
      )}
    >
      {tier.popular && (
        <div className="rounded-t-lg bg-primary py-1 text-center text-sm font-medium text-primary-foreground">
          Popular Choice
        </div>
      )}
      
      {isCurrentPlan && (
        <div className="rounded-t-lg bg-green-500 py-1 text-center text-sm font-medium text-white">
          Current Plan
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl">{tier.name}</CardTitle>
        <CardDescription>{tier.description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">${tier.price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button
          onClick={() => onSelect(tier.id)}
          disabled={disabled || isCurrentPlan}
          className={cn(
            "w-full",
            tier.highlighted ? "bg-primary" : "bg-primary/90",
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
