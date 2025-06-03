import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  UserCircle,
  FileText,
  Receipt,
  ShoppingBag,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings as SettingsIcon, // Renamed to avoid conflict with React.Settings
  Briefcase, // Placeholder for Logo
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
  isSection?: boolean;
}

const primaryNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#', isActive: true },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: UserCircle, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#' },
  { id: 'invoices', label: 'Invoices', icon: Receipt, href: '#' },
  { id: 'items', label: 'Items', icon: ShoppingBag, href: '#' },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#' },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#' },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, href: '#' },
];

const secondaryNavItems: NavItem[] = [
  { id: 'help1', label: 'Help', icon: HelpCircle, href: '#' },
  { id: 'settings', label: 'Settings', icon: SettingsIcon, href: '#' },
  { id: 'help2', label: 'Help', icon: HelpCircle, href: '#' }, // Second help item as per image
];

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const renderNavItem = (item: NavItem) => (
    <a
      key={item.id}
      href={item.href}
      className={cn(
        'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium',
        item.isActive
          ? 'bg-primary/10 text-primary'
          : 'text-sidebar-foreground hover:bg-gray-500/10 hover:text-primary',
        'transition-colors duration-150'
      )}
    >
      <item.icon className="h-5 w-5" />
      <span>{item.label}</span>
    </a>
  );

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-20 hidden h-screen w-60 flex-col border-r border-border bg-sidebar p-4 md:flex',
        className
      )}
    >
      <div className="mb-6 flex items-center space-x-2 px-2">
        {/* Placeholder for logo like in the image "bo" */}
        <div className='flex items-center justify-center w-8 h-8 bg-primary rounded-md text-primary-foreground font-bold text-lg'>B</div>
        <span className="text-xl font-bold text-foreground">Acme Corp</span>
      </div>

      <nav className="flex flex-1 flex-col justify-between">
        <div className="space-y-1">
          {primaryNavItems.map(renderNavItem)}
        </div>
        <div className="space-y-1 border-t border-border pt-4 mt-4">
          {secondaryNavItems.map(renderNavItem)}
        </div>
      </nav>
    </aside>
  );
};

export default SidebarNav;
