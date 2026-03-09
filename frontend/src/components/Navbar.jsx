import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      padding: isScrolled ? '15px 0' : '25px 0',
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
          {navLinks.map((link, index) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link animate-fadeIn ${location.pathname === link.path ? 'active' : ''}`}
              style={{
                fontFamily: 'Inter',
                fontSize: '20px',
                fontWeight: location.pathname === link.path ? '600' : '400',
                color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-primary)',
                transition: 'color 1s ease',
                animationDelay: `${index * 0.3}s`,
                animationDuration: '1.2s',
                opacity: 0,
                position: 'relative',
                padding: '2px 0'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
              onMouseOut={(e) => e.target.style.color = location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-primary)'}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
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
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
