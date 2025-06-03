import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

interface FunnelItem {
  id: string;
  name: string;
  count: number;
  value: string;
  time: string;
  color: string;
  highlightText?: string;
}

interface SourceItem {
  id: string;
  name: string;
  value: string;
  percentage: string;
  color: string;
}

export type StatsCardProps = {
  className?: string;
  title: string;
} & (
  | {
      type: 'funnel';
      mainStat: { value: number; label: string };
      items: FunnelItem[];
      footerText?: never;
    }
  | {
      type: 'sources';
      items: SourceItem[];
      footerText?: string;
      mainStat?: never;
    }
);

const StatsCard: React.FC<StatsCardProps> = (props) => {
  const { className, title } = props;

  const totalFunnelCount = props.type === 'funnel' ? props.items.reduce((sum, item) => sum + item.count, 0) : 0;

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {props.type === 'funnel' && (
          <div className="space-y-4">
            <div className="mb-4">
              <span className="text-4xl font-bold text-foreground">{props.mainStat.value}</span>
              <span className="ml-2 text-sm text-muted-foreground">{props.mainStat.label}</span>
            </div>
            <div className="flex h-3 w-full rounded-full overflow-hidden mb-4">
              {props.items.map(item => (
                <div key={item.id} className={cn(item.color)} style={{ width: `${(item.count / totalFunnelCount) * 100}%` }}></div>
              ))}
            </div>
            <ul className="space-y-2 text-sm">
              {props.items.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className={cn('mr-2 h-2.5 w-2.5 rounded-full', item.color)}></span>
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="w-10 text-right font-medium text-foreground">{item.count}</span>
                    <span className="w-16 text-right text-muted-foreground">{item.value}</span>
                    {item.highlightText ? (
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="w-16 text-right text-muted-foreground cursor-default">{item.time}</span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.highlightText}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <span className="w-16 text-right text-muted-foreground">{item.time}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {props.type === 'sources' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div style={{ width: '100%', height: 180 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={props.items} dataKey="percentage" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={70} labelLine={false}>
                    {props.items.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  {/* <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" /> */}
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="space-y-2 text-sm">
              {props.items.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span style={{ backgroundColor: item.color }} className='mr-2 h-2.5 w-2.5 rounded-full'></span>
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="w-16 text-right text-muted-foreground">{item.value}</span>
                    <span className="font-medium text-foreground">{item.percentage}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      {props.type === 'sources' && props.footerText && (
        <CardFooter className="text-xs text-muted-foreground justify-end pt-0">
          {props.footerText}
        </CardFooter>
      )}
    </Card>
  );
};

export default StatsCard;
