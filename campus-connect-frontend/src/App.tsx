import { useState } from 'react';
import AppRoutes from './Routes/AppRoutes';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { key: '/', label: 'Home' },
    { key: '/notice-board', label: 'Notice Board' },
    { key: '/profile', label: 'Profile' },
    { key: '/classroom', label: 'Classroom' },
  ]

  const currentPageName = sidebarItems.find(item => item.key === location.pathname)?.label || "";

  const handleSelect = (path: string) => {
    navigate(path);
    setIsSidebarOpen(false);
  }

  return (
    <div className='app'>
      <Navbar
        onHamburgerClick={() => setIsSidebarOpen(!isSidebarOpen)}
        isOpen={isSidebarOpen}
        currentPageName={currentPageName}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onSelect={handleSelect}
        selectedKey={location.pathname}
        items={sidebarItems}
      />

      <main className="main-content">
        <AppRoutes />
      </main>
    </div>
  )
}