import React from 'react';
import { cn } from '@/lib/utils';
import StatsCard, { StatsCardProps } from './StatsCard';

const funnelData: StatsCardProps = {
  type: 'funnel' as const,
  title: 'Funnel count',
  mainStat: { value: 600, label: 'active leads' },
  items: [
    { id: 'discovery', name: 'Discovery', count: 200, value: '$ 200', time: '2 days', color: 'bg-red-500' },
    { id: 'qualified', name: 'Qualified', count: 100, value: '$ 100', time: '2 days', color: 'bg-yellow-400', highlightText: 'average time on this stage' },
    { id: 'inConversation', name: 'In conversation', count: 50, value: '$ 100', time: 'N/A', color: 'bg-indigo-500' }, // Image has no time for this
    { id: 'negotiations', name: 'Negotiations', count: 20, value: '$ 50', time: '8 days', color: 'bg-green-500' },
    { id: 'closedWon', name: 'Closed won', count: 20, value: '$ 50', time: '10 days', color: 'bg-purple-500' },
  ],
};

const sourcesData: StatsCardProps = {
  type: 'sources' as const,
  title: 'Sources',
  items: [
    { id: 'clutch', name: 'Clutch', value: '$ 3000', percentage: '50%', color: '#F44336' }, // Red
    { id: 'behance', name: 'Behance', value: '$ 1000', percentage: '40%', color: '#FFC107' }, // Yellow
    { id: 'instagram', name: 'Instagram', value: '$ 1000', percentage: '10%', color: '#009688' }, // Teal
    { id: 'dribbble', name: 'Dribbble', value: '$ 1000', percentage: '10%', color: '#4CAF50' }, // Green
  ],
  footerText: 'from leads total',
};

interface StatsCardGridProps {
  className?: string;
}

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 gap-6 md:grid-cols-2', className)}>
      <StatsCard {...funnelData} />
      <StatsCard {...sourcesData} />
    </div>
  );
};

export default StatsCardGrid;
