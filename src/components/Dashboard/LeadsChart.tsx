import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, Circle } from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area
} from 'recharts';

const leadsTrackingData = [
  { month: 'March', closedWon: 65, closedLost: 50 },
  { month: 'April', closedWon: 50, closedLost: 38 },
  { month: 'May', closedWon: 85, closedLost: 42 },
  { month: 'June', closedWon: 60, closedLost: 8 }, // Significant dip for lost
  { month: 'July', closedWon: 75, closedLost: 45 },
  { month: 'August', closedWon: 95, closedLost: 30 }, // High point for won
];

interface LeadsChartProps {
  className?: string;
}

const LeadsChart: React.FC<LeadsChartProps> = ({ className }) => {
  const [timeRange, setTimeRange] = useState<string>('last6months');

  // This data would typically be filtered by timeRange in a real app
  const chartData = leadsTrackingData;

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">Leads tracking</CardTitle>
            <div className="mt-1 flex items-baseline space-x-4">
              <p className="text-2xl font-bold text-foreground">680 <span className="text-sm font-normal text-muted-foreground">total closed</span></p>
              <p className="text-2xl font-bold text-foreground">70 <span className="text-sm font-normal text-muted-foreground">total lost</span></p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Tabs defaultValue="leadsConverted" className="w-auto">
              <TabsList className="grid grid-cols-3 h-9">
                <TabsTrigger value="leadsCame" className="text-xs px-2 h-full">Leads came</TabsTrigger>
                <TabsTrigger value="leadsConverted" className="text-xs px-2 h-full">Leads Converted</TabsTrigger>
                <TabsTrigger value="totalDealsSize" className="text-xs px-2 h-full">Total deals size</TabsTrigger>
              </TabsList>
            </Tabs>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px] h-9">
                <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last6months">Last 6 months</SelectItem>
                <SelectItem value="last3months">Last 3 months</SelectItem>
                <SelectItem value="lastmonth">Last month</SelectItem>
                <SelectItem value="alltime">All time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <TabsContent value="leadsConverted">
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} dy={10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} dx={-10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  align="left" 
                  iconSize={8} 
                  iconType="circle"
                  wrapperStyle={{ paddingTop: '20px' }}
                  formatter={(value) => <span className="text-muted-foreground text-xs ml-1">{value}</span>}
                />
                <defs>
                  <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#009688" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#009688" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F44336" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F44336" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#009688" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, fill: '#009688', strokeWidth:0 }} activeDot={{ r: 6, fill: '#009688', strokeWidth:0 }} />
                <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="#F44336" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, fill: '#F44336', strokeWidth:0 }} activeDot={{ r: 6, fill: '#F44336', strokeWidth:0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
         {/* Add TabsContent for 'leadsCame' and 'totalDealsSize' if needed */}
         <TabsContent value="leadsCame"><p className='text-center text-muted-foreground py-10'>Leads Came data not available.</p></TabsContent>
         <TabsContent value="totalDealsSize"><p className='text-center text-muted-foreground py-10'>Total Deals Size data not available.</p></TabsContent>
      </CardContent>
    </Card>
  );
};

export default LeadsChart;
