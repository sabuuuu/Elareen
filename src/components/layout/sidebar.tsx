import React, { useState } from 'react';
import { 
  User, 
  BookOpen, 
  Shield, 
  MessageCircle, 
  FileText, 
  Bell, 
  Users, 
  LogOut,
  Menu,
  X,
  type LucideIcon
} from 'lucide-react';

// Utility for conditional class names
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

// --- Sidebar Item Component ---
interface SidebarItemProps {
  icon: React.ReactElement<LucideIcon>;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={cn(
          "flex items-center w-full h-12 text-left rounded-lg transition-colors duration-200 px-3",
          active ? "bg-purple-800 text-white" : "text-purple-200 hover:bg-purple-700 hover:text-white"
        )}
      >
        {/* Icon always centered */}
        <div className="flex items-center justify-center w-8">
          {React.cloneElement(icon)}
        </div>

        {/* Text only visible when sidebar is expanded */}
        <span 
          className={cn(
            "text-sm font-medium ml-4 overflow-hidden whitespace-nowrap transition-all duration-200",
            "hidden group-[.expanded]:inline"
          )}
        >
          {label}
        </span>
      </button>
    </li>
  );
};

// --- Main Sidebar Component ---
const DashboardSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('profile');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { id: 'profile', label: 'Профиль', icon: <User /> },
    { id: 'courses', label: 'Мои курсы', icon: <BookOpen /> },
    { id: 'completed', label: 'Завершенные', icon: <Shield /> },
    { id: 'messaging', label: 'Мессенджинг', icon: <MessageCircle /> },
    { id: 'documents', label: 'Документы', icon: <FileText /> },
    { id: 'schedule', label: 'Расписание', icon: <Bell /> },
    { id: 'messages', label: 'Сообщения', icon: <Users /> }
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-purple-600 text-white rounded-md shadow-lg"
        aria-label="Toggle sidebar"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 h-full bg-[#1B430F] text-white",
          "flex flex-col z-40 transition-all duration-300 ease-in-out group",
          // Mobile
          isMobileOpen ? "translate-x-0 w-64 expanded" : "-translate-x-full w-64",
          // Desktop
          "lg:translate-x-0 lg:w-20"
        )}
      >
        {/* Logo/Header */}
        <div className="flex items-center justify-center h-20 flex-shrink-0">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                active={activeItem === item.id}
                onClick={() => setActiveItem(item.id)}
              />
            ))}
          </ul>
        </nav>

        {/* Footer/Logout */}
        <div className="p-2 border-t border-purple-700/50">
          <SidebarItem
            icon={<LogOut />}
            label="Выйти"
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
