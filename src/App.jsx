import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BlogDashboard from './components/BlogDashboard';
import FullPost from './components/FullPost';
import About from './components/About'
import Contact from './components/Contact';


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          <Sidebar 
            isOpen={isSidebarOpen} 
            toggleSidebar={toggleSidebar} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <main className="flex-1 overflow-auto p-4">
            <Routes>
              <Route path="/" element={<BlogDashboard selectedCategory={selectedCategory} searchTerm={searchTerm} />} />
              <Route path="/post/:id" element={<FullPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;