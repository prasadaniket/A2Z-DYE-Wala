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
    { name: 'Collection', path: '/collection' },
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
        
        {/* Brand Name */}
        <Link to="/" style={{ 
          fontFamily: 'Playfair Display', 
          fontSize: '24px', 
          fontWeight: '700',
          letterSpacing: '1px',
          color: 'var(--text-primary)'
        }}>
          A2Z DYE Wala
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={{
                fontFamily: 'Inter',
                fontSize: '15px',
                fontWeight: location.pathname === link.path ? '600' : '400',
                color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-primary)',
                transition: 'color 0.3s ease'
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
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
