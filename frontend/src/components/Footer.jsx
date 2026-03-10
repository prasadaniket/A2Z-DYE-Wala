/* eslint-disable react/prop-types */
import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--bg-secondary)', 
      borderTop: '1px solid var(--border-color)',
      padding: '100px 0 30px',
      marginTop: 'auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Premium Watermark */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '14vw',
        fontFamily: 'Playfair Display',
        fontWeight: '900',
        color: 'var(--text-primary)',
        opacity: 0.02,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        DYE WALA
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div className="footer-grid">
          
          {/* Brand & Vision */}
          <div className="footer-brand">
            <Link to="/" style={{ display: 'inline-block', marginBottom: '25px' }}>
              <img
                src="/assets/Logo/DYE logo.png"
                alt="DYE Jewels Logo"
                style={{ height: '70px', objectFit: 'contain' }}
              />
            </Link>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '15px', 
              lineHeight: '1.8', 
              maxWidth: '400px',
              fontFamily: 'Inter'
            }}>
              Transcending the boundaries of traditional jewelry making. We merge legendary craftsmanship with avant-garde 3D precision to forge artifacts that outlive time itself.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">The Maison</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <FooterLink text="Home" to="/" />
              <FooterLink text="Masterpiece Collection" to="/collection" />
              <FooterLink text="Our Heritage" to="/our-story" />
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-contact">
            <h4 className="footer-heading">Inquiries</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)', fontSize: '15px' }}>
              <li>123 Diamond Avenue<br/>Mumbai, 400001, India</li>
              <li>
                <a href="tel:+919876543210" className="hover-accent" style={{ display: 'inline-block', marginTop: '10px' }}>
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:bespoke@a2zdyewala.com" className="hover-accent" style={{ display: 'inline-block' }}>
                  bespoke@a2zdyewala.com
                </a>
              </li>
            </ul>
            
            <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Linkedin} />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid var(--border-color)', 
          paddingTop: '30px',
          marginTop: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            &copy; {new Date().getFullYear()} UniCode. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '30px', fontSize: '13px', letterSpacing: '1px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
            <Link to="#" className="hover-accent">Privacy Policy</Link>
            <Link to="#" className="hover-accent">Terms of Service</Link>
          </div>
        </div>

      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
        }
        .footer-heading {
          font-size: 14px;
          margin-bottom: 30px;
          font-family: 'Inter', sans-serif;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
        }
        .hover-accent {
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }
        .hover-accent:hover {
          color: var(--accent-primary);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }
      `}</style>
    </footer>
  );
};

const SocialIcon = ({ Icon }) => (
  <a href="#" style={{
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: 'transparent',
    border: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-primary)',
    transition: 'all 0.3s ease'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.background = 'var(--accent-primary)';
    e.currentTarget.style.color = '#fff';
    e.currentTarget.style.borderColor = 'var(--accent-primary)';
    e.currentTarget.style.transform = 'translateY(-3px)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.background = 'transparent';
    e.currentTarget.style.color = 'var(--text-primary)';
    e.currentTarget.style.borderColor = 'var(--border-color)';
    e.currentTarget.style.transform = 'translateY(0)';
  }}>
    <Icon size={18} />
  </a>
);

const FooterLink = ({ text, to }) => (
  <li>
    <Link to={to} style={{ 
      color: 'var(--text-secondary)', 
      fontSize: '15px',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.color = 'var(--accent-primary)';
      e.currentTarget.style.transform = 'translateX(5px)';
      const icon = e.currentTarget.querySelector('.footer-link-icon');
      if(icon) {
        icon.style.opacity = '1';
        icon.style.transform = 'translateX(0)';
      }
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.transform = 'translateX(0)';
      const icon = e.currentTarget.querySelector('.footer-link-icon');
      if(icon) {
        icon.style.opacity = '0';
        icon.style.transform = 'translateX(-10px)';
      }
    }}>
      {text}
      <ArrowUpRight className="footer-link-icon" size={16} style={{ 
        opacity: 0, 
        transform: 'translateX(-10px)', 
        transition: 'all 0.3s ease' 
      }} />
    </Link>
  </li>
);

export default Footer;
