import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // SidebarNav is a fixed-position component that handles its own styling and visibility (md:flex).
  // This Sidebar component simply renders it.
  // The MainAppLayout will define the grid structure, and this component will be placed in the first column.
  return <SidebarNav className={cn(className)} />;
};

export default Sidebar;
