import { Bell, User } from "lucide-react";

interface HeaderProps {
  pageTitle?: string;
}

function Header({ pageTitle = "Dashboard" }: HeaderProps) {
  return (
    <header className="mt-5 px-4 ">
      <div className="flex items-center justify-between">
        {/* Page Title */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{pageTitle}</h1>
        </div>

        {/* Right Side - Notifications and Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="h-5 w-5" />
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile */}
          <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <div className="bg-blue-500 text-white rounded-full p-1">
              <User className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium hidden sm:block">John Doe</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;