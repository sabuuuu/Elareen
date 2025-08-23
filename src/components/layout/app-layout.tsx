import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import DashboardSidebar from './sidebar';

interface AppLayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

const getPageTitle = (pathname: string): string => {
  const titleMap: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/letters': 'Love Letters',
    '/complaints': 'Complaints',
    '/memories': 'Memories',
    '/date-ideas': 'Date Ideas',
    '/timers': 'Timers',
    '/setup': 'Setup'
  };
  
  return titleMap[pathname] || 'Dashboard';
};

export function AppLayout({ children, pageTitle }: AppLayoutProps) {
  const location = useLocation();
  
  const dynamicTitle = pageTitle || getPageTitle(location.pathname);
  
  return (
    <div className="bg-[#DFF0D0] flex min-h-screen">
      {/* Sidebar */}
      <DashboardSidebar />
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-28">
        {/* Header */}
        <Header pageTitle={dynamicTitle} />
        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}