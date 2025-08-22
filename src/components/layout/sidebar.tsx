import React, { useState } from 'react';
import {
  BookOpen,
  Shield,
  MessageCircle,
  FileText,
  Bell,
  LogOut,
  Menu,
  type LucideIcon,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

interface SidebarItemProps {
  icon: React.ReactElement<LucideIcon>;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, active, onClick }) => {
  return (
    <li className="flex items-center justify-center">
      <button
        onClick={onClick}
        className={cn(
          "flex items-center justify-center w-full py-3 text-left rounded-lg transition-colors duration-200 px-3",
          active ? "bg-[#2A6728] text-white" : "text-purple-200 hover:bg-[#30762E] hover:text-white"
        )}
      >
        {React.cloneElement(icon)}
      </button>
    </li>
  );
};

// --- Main Sidebar Component ---
const DashboardSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: <BookOpen /> },
  { id: 'letters', label: 'Letters', path: '/letters', icon: <FileText /> },
  { id: 'complaints', label: 'Complaints', path: '/complaints', icon: <MessageCircle /> },
  { id: 'memories', label: 'Memories', path: '/memories', icon: <Shield /> },
  { id: 'date-ideas', label: 'Date Ideas', path: '/date-ideas', icon: <Bell /> },
  { id: 'timers', label: 'Timers', path: '/timers', icon: <Bell /> },
];

  return (
    <>
      {/* Mobile Toggle Button*/}
        {!isMobileOpen && (
          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#1B430F] text-white rounded-md shadow-lg"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
        )}
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-4 bottom-4 bg-[#1B430F] text-white rounded-2xl",
          "flex flex-col z-40 transition-all duration-300 ease-in-out shadow-xl",
          // Mobile
          isMobileOpen ? "translate-x-0 w-20 ml-3" : "-translate-x-full w-20 ml-0",
          // Desktop
          "lg:translate-x-0 lg:w-20 lg:ml-3"
        )}
      >
        {/* Logo/Header */}
        <div className="flex items-center justify-center h-20 flex-shrink-0 pt-2">
          <div className="w-8 h-8 bg-[#30762E] rounded-full" />
        </div>

        {/* Navigation */}
      <nav className="flex-1 px-2 mt-12">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={location.pathname === item.path}
              onClick={() => {
                navigate(item.path);
                setIsMobileOpen(false);
              }}
            />
          ))}
        </ul>
      </nav>

        {/* Footer/Logout */}
        <div className="p-2">
          <SidebarItem
            icon={<LogOut />}
            label="Logout"
            onClick={() => console.log('Logout')}
          />
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default DashboardSidebar;