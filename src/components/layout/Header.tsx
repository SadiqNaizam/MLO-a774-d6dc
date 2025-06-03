import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // TopHeader is a fixed-position component that handles its own styling (h-16, md:left-60).
  // This Header component simply renders it.
  // The MainAppLayout will define the grid structure, and this component will be placed
  // in the designated header cell.
  return <TopHeader className={cn(className)} />;
};

export default Header;
