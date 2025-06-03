import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SimpleStatCardProps {
  value: string;
  label: string;
  icon?: React.ElementType;
  valueClassName?: string;
  labelClassName?: string;
  className?: string;
}

const SimpleStatCard: React.FC<SimpleStatCardProps> = ({
  value,
  label,
  icon: Icon,
  valueClassName,
  labelClassName,
  className,
}) => {
  return (
    <Card className={cn('w-full bg-card shadow-sm', className)}>
      <CardContent className="p-4">
        <div className={cn('text-3xl font-bold text-foreground mb-1', valueClassName)}>
          {value}
        </div>
        <div className={cn('text-sm text-muted-foreground flex items-center', labelClassName)}>
          <span>{label}</span>
          {Icon && <Icon className="ml-1.5 h-4 w-4 text-muted-foreground" />}
        </div>
      </CardContent>
    </Card>
  );
};

export default SimpleStatCard;
