import { useState } from 'react';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Productive from './components/Productive';
import Team from './components/Team';
import './index.css';
import Sidebar from './components/Sidebar';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div>
      <Header setOpenSidebar={setOpenSidebar} />
      {openSidebar && <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />}
      <Hero />
      <Features />
      <Productive />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
