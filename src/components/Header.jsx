import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4">
            <svg className="w-10 h-10" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="20" fill="white" fillOpacity="0.2"/>
              <path d="M15 25C15 25 20 15 25 15C30 15 35 25 35 25C35 25 30 35 25 35C20 35 15 25 15 25Z" stroke="white" strokeWidth="2"/>
              <circle cx="25" cy="25" r="5" fill="white"/>
            </svg>
            <div>
              <h1 className="text-2xl font-bold tracking-wider">CREOXY</h1>
              <p className="text-xs italic">where creativity meets oxygen</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-purple-200 transition-colors duration-300 font-medium">Home</Link>
           
            <Link to="/about" className="text-white hover:text-purple-200 transition-colors duration-300 font-medium">About</Link>
            <Link to="/contact" className="px-4 py-2 bg-white text-purple-600 rounded-full hover:bg-purple-100 transition-colors duration-300 font-medium">Contact</Link>
          </nav>
          
          <button onClick={toggleSidebar} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;