import type { ReactNode } from 'react';
import Header from './header';
import DashboardSidebar from './sidebar';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="bg-[#DFF0D0] flex min-h-screen">
      {/* Sidebar - fixed width */}
      <div className="hidden md:block w-20 flex-shrink-0">
        <DashboardSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header />
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
