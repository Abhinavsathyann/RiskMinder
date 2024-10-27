import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend: string;
  trendDirection: 'up' | 'down';
  className?: string;
}

export default function MetricsCard({
  title,
  value,
  icon: Icon,
  trend,
  trendDirection,
  className = 'text-gray-600',
}: MetricsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className={`rounded-md p-3 ${className} bg-opacity-10`}>
          <Icon className={`h-6 w-6 ${className}`} />
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="mt-1 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <span className={`ml-2 text-sm ${trendDirection === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}