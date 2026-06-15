import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  color?: 'blue' | 'red' | 'green' | 'orange';
  trend?: { value: string; positive: boolean };
}

const colorClasses = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  red: 'bg-red-50 text-red-700 border-red-200',
  green: 'bg-green-50 text-green-700 border-green-200',
  orange: 'bg-orange-50 text-orange-700 border-orange-200',
};

const iconColorClasses = {
  blue: 'text-blue-600',
  red: 'text-red-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
};

export default function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color = 'blue',
  trend,
}: MetricCardProps) {
  return (
    <div className={`rounded-lg border p-6 ${colorClasses[color]}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium opacity-75">{title}</p>
          <h3 className="mt-2 text-2xl font-bold">{value}</h3>
          {subtitle && <p className="mt-1 text-xs opacity-75">{subtitle}</p>}
          {trend && (
            <p className={`mt-2 text-xs font-medium ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.value}
            </p>
          )}
        </div>
        {Icon && <Icon className={`h-8 w-8 ${iconColorClasses[color]}`} />}
      </div>
    </div>
  );
}
