
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

/**
 * StatCard Component
 * @param {Object} props - Component props
 * @param {string} props.title - The stat title
 * @param {string|number} props.value - The stat value
 * @param {string} [props.description] - The stat description
 * @param {React.ReactNode} [props.icon] - The stat icon
 * @param {string} [props.className] - Additional class names
 * @param {'up'|'down'|'neutral'} [props.trend] - The stat trend
 * @param {string} [props.trendValue] - The stat trend value
 */
const StatCard = ({
  title,
  value,
  description,
  icon,
  className,
  trend,
  trendValue,
}) => {
  return (
    <Card className={cn("overflow-hidden transform hover:shadow-lg transition-all duration-200", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gradient-to-r from-gray-50 to-white border-b">
        <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
        {icon && <div className="h-5 w-5 text-gray-500">{icon}</div>}
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        {description && (
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        )}
        {trend && trendValue && (
          <div
            className={cn(
              "text-xs font-medium mt-4 flex items-center",
              trend === 'up' && "text-green-600",
              trend === 'down' && "text-red-600",
              trend === 'neutral' && "text-gray-600"
            )}
          >
            {trend === 'up' && (
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            )}
            {trend === 'down' && (
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            )}
            {trend === 'neutral' && (
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"></path>
              </svg>
            )}
            {trendValue}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
