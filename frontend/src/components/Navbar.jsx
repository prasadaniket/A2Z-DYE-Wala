import { useState, useEffect } from 'react';
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collection' },
    { name: 'Our Story', path: '/our-story' }
  ];

  return (
    <nav className={`premium-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>

        {/* Brand Logo */}
        <Link to="/" className="brand-logo-link">
          <img
            src="/assets/Logo/DYE logo.png"
            alt="DYE Logo"
            className="brand-logo"
            style={{ 
              height: isScrolled ? '45px' : '55px', 
              transition: 'height 0.3s ease',
              objectFit: 'contain' 
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="nav-text">{link.name}</span>
                <span className="nav-dot" />
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="mobile-actions">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Wrapper */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        /* Core Nav Structure */
        .premium-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 90px;
          transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, border-color 0.4s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        
        .premium-nav.scrolled {
          height: 70px;
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
        }

        /* Desktop Menu */
        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        /* Nav Links */
        .nav-link {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-primary);
          padding: 8px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nav-text {
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .nav-link:hover .nav-text {
          color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .nav-link.active .nav-text {
          color: var(--accent-primary);
        }

        /* Premium Dot Indicator */
        .nav-dot {
          position: absolute;
          bottom: -4px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--accent-primary);
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover .nav-dot,
        .nav-link.active .nav-dot {
          opacity: 1;
          transform: scale(1);
        }

        /* Mobile Layout */
        .mobile-actions {
          display: none;
        }

        .mobile-menu-btn {
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Mobile Overlay */
        .mobile-menu-overlay {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu-overlay.open {
          max-height: 400px;
          opacity: 1;
        }

        .mobile-menu-container {
          display: flex;
          flex-direction: column;
          padding: 20px 30px 40px;
          gap: 25px;
        }

        .mobile-nav-link {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          color: var(--text-secondary);
          transition: color 0.3s ease, padding-left 0.3s ease;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--accent-primary);
          padding-left: 10px;
        }

        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-actions { display: flex !important; gap: 10px; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
