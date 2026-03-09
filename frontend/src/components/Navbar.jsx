import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collection' },
    { name: 'Our Story', path: '/our-story' }
  ];

  return (
    <nav className={`glass-nav ${isScrolled ? 'scrolled' : ''}`} style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '10px 0' : '15px 0',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/assets/Logo/DYE logo.png" 
            alt="DYE Logo" 
            style={{ height: '55px', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{
                fontFamily: 'Inter',
                fontSize: '20px',
                fontWeight: location.pathname === link.path ? '600' : '400',
                color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-primary)',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '2px 0'
              }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              marginLeft: '10px',
              transition: 'all 0.3s ease'
            }}
          >
            {theme === 'light' ? <Moon size={20} fill="currentColor" /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="mobile-actions" style={{ display: 'none', gap: '15px' }}>
          <button 
            onClick={toggleTheme}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }} className="mobile-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: location.pathname === link.path ? '600' : '400',
                color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-primary)'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          width: 80%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--accent-primary);
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.4s ease-out;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-actions { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
