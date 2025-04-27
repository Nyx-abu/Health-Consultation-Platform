import React from 'react';
import { Bell, User, Menu } from 'lucide-react';

type NavbarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ sidebarOpen, setSidebarOpen }:NavbarProps) => {
  return (
    <div className="fixed top-0 right-0 left-0 lg:left-[280px] h-16 bg-white border-b border-gray-200 z-30">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Menu button for mobile */}
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={24} />
        </button>
        
        {/* Left side content for desktop - can be added here if needed */}
        <div className="hidden lg:block"></div>
        
        {/* Right aligned icons */}
        <div className="flex items-center space-x-4 ml-auto">
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;