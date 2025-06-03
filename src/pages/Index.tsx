import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import LeadsChart from '../components/Dashboard/LeadsChart';
import SummaryStats from '../components/Dashboard/SummaryStats';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

/**
 * LeadsDashboardPage serves as the main view for the "Leads Overview".
 * It utilizes MainAppLayout for the overall page structure (sidebar, header)
 * and displays lead-specific data components like StatsCardGrid, LeadsChart, and SummaryStats.
 * Tabs are included for potential navigation or view switching between 'Sales' and 'Leads' perspectives,
 * with 'Leads' being the default active tab for this page.
 */
const LeadsDashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="grid w-max grid-cols-2">
          {/* 
            These TabsTriggers allow users to switch between different views 
            or sections within the dashboard. For this Leads Overview page,
            'Leads' is the default. 'Sales' is provided as a placeholder or for future expansion.
          */}
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>

        {/* Content for the 'Leads' tab */}
        <TabsContent value="leads" className="mt-6">
          {/* 
            This inner div ensures that the components specific to the 'Leads' tab 
            are laid out in a vertical column with consistent spacing, 
            mirroring the flex-col gap-6 behavior of MainAppLayout's children wrapper.
          */}
          <div className="flex flex-col gap-6">
            <StatsCardGrid />
            <LeadsChart />
            <SummaryStats />
          </div>
        </TabsContent>

        {/* Placeholder content for the 'Sales' tab */}
        <TabsContent value="sales" className="mt-6">
          <div className="flex h-[200px] items-center justify-center rounded-md border border-dashed bg-card p-6">
            <p className="text-center text-muted-foreground">
              Sales-specific content and components would be displayed here.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default LeadsDashboardPage;
