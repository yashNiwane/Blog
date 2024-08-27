import React from 'react';
import { X, Home, BookOpen, User, Mail } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
      <div className="p-4">
        <button onClick={toggleSidebar} className="absolute top-4 right-4">
          <X size={24} />
        </button>
        <h2 className="text-xl font-bold mb-8">CREOXY</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-2 hover:text-purple-300 transition-colors duration-300">
            <Home size={20} />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-purple-300 transition-colors duration-300">
            <BookOpen size={20} />
            <span>Articles</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-purple-300 transition-colors duration-300">
            <User size={20} />
            <span>About</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-purple-300 transition-colors duration-300">
            <Mail size={20} />
            <span>Contact</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;