import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

export default function App() {

  return (
    <div className='app'>
      <Navbar />
      <Sidebar />
      <main>main page area</main>
    </div>
  )
}