import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import OurStory from './pages/OurStory';
import Preloader from './components/Preloader';
import './index.css';

function App() {
  // Only show preloader on Home page ('/') upon refresh
  const [isLoading, setIsLoading] = useState(window.location.pathname === '/');

  return (
    <BrowserRouter>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`page-bg ${isLoading ? 'is-loading' : 'is-ready'}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/our-story" element={<OurStory />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
