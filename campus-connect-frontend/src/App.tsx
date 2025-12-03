import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); //here to false later

  return (
    <div className='app'>
      <Navbar />
      <Sidebar 
      isOpen={isSidebarOpen}
      />
      <main className="main-content" aria-live="polite">main page area</main>
    </div>
  )
}