import React from 'react';
import SimpleStatCard from './SimpleStatCard';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SummaryStatsProps {
  className?: string;
}

const reasonsData = [
  { id: 'reason1', value: '40%', label: 'The proposal is unclear' as const },
  { id: 'reason2', value: '20%', label: 'However venture pursuit' as const },
  { id: 'reason3', value: '10%', label: 'Other' as const },
  { id: 'reason4', value: '30%', label: 'The proposal is unclear' as const }, // Duplicate label as per image
];

const otherDataStats = [
  { id: 'other1', value: '900', label: 'total leads count' as const },
  { id: 'other2', value: '12', label: 'days in average to convert lead' as const },
  { id: 'other3', value: '30', label: 'inactive leads' as const, icon: Info },
];

const SummaryStats: React.FC<SummaryStatsProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-8', className)}>
      <div className="lg:col-span-3">
        <h3 className="text-lg font-semibold text-foreground mb-4">Reasons of leads lost</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasonsData.map((stat) => (
            <SimpleStatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-lg font-semibold text-foreground mb-4">Other data</h3>
        <div className="grid grid-cols-1 gap-6">
          {otherDataStats.map((stat) => (
            <SimpleStatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryStats;
