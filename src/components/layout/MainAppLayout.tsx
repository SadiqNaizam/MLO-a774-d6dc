import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  // This layout uses CSS Grid as specified in Layout Requirements.
  // - Sidebar column: 0 width on small screens, 15rem (w-60) on md+ screens.
  // - Content column: Takes the remaining width.
  // - Header row: 4rem (h-16) height.
  // - Main content row: Takes the remaining height.
  //
  // SidebarNav (rendered by <Sidebar />) and TopHeader (rendered by <Header />)
  // are fixed-position components. They will overlay their respective grid cells.
  // The grid structure ensures that content in <main> is correctly positioned
  // relative to these fixed elements without needing explicit margins for fixed elements.

  return (
    <div
      className={cn(
        'grid min-h-screen bg-background text-foreground',
        'grid-rows-[theme(spacing.16)_1fr]', // Header row (h-16 / 4rem), Main content row (1fr)
        'grid-cols-[0_1fr] md:grid-cols-[theme(spacing.60)_1fr]', // Sidebar col (w-0 or w-60 / 15rem), Content col (1fr)
        className
      )}
    >
      {/* Sidebar Area: First column, spans two rows, visible on md+ screens */}
      {/* SidebarNav (rendered by <Sidebar />) is md:flex, so wrapper div is also hidden on small screens */}
      <div className="col-start-1 row-start-1 row-span-2 hidden md:block">
        <Sidebar />
      </div>

      {/* Header Area: Second column on md+ (first on small), first row */}
      {/* TopHeader (rendered by <Header />) is fixed and h-16. It will overlay this 4rem high cell. */}
      <div className="col-start-1 row-start-1 md:col-start-2">
        <Header />
      </div>

      {/* Main Content Area: Second column on md+ (first on small), second row */}
      {/* Layout Requirements for mainContent: */}
      {/*   - layout: "p-6 mt-16" (mt-16 is handled by grid row structure for fixed header) */}
      {/*   - container: "flex flex-col gap-6" */}
      {/*   - overall.sizing: "min-w-0 overflow-y-auto" */}
      <main
        className={cn(
          'col-start-1 row-start-2 md:col-start-2', // Grid placement
          'p-6', // Padding for content, as per mainContent.layout. 'mt-16' is not needed here due to grid row handling for header.
          'min-w-0 overflow-y-auto' // Sizing and scroll behavior, as per overall.sizing.mainContent
        )}
      >
        <div className="flex flex-col gap-6"> {/* Internal container, as per mainContent.container */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
