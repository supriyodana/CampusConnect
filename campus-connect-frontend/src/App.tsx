import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelect = () => {
    setIsSidebarOpen(false);
  }
  
  return (
    <div className='app'>
      <Navbar 
      onHamburgerClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Sidebar 
      isOpen={isSidebarOpen}
      onSelect={handleSelect}
      />
      <main className="main-content" aria-live="polite">main page area</main>
    </div>
  )
}