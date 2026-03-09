import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--bg-secondary)', 
      borderTop: '1px solid var(--border-color)',
      padding: '70px 0 30px',
      marginTop: 'auto'
    }}>
      <div className="container">
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '50px',
          marginBottom: '50px'
        }}>
          
          {/* Brand Info */}
          <div>
            <Link to="/" style={{ 
              fontFamily: 'Playfair Display', 
              fontSize: '24px', 
              fontWeight: '700',
              letterSpacing: '1px',
              display: 'inline-block',
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              A2Z <span style={{ color: 'var(--accent-primary)' }}>DYE</span> Wala
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '25px', lineHeight: '1.7' }}>
              Redefining elegance through cutting-edge 3D design and timeless craftsmanship. Your vision, our masterpiece.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Linkedin} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '18px', marginBottom: '20px', fontFamily: 'Playfair Display', color: 'var(--text-primary)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <FooterLink text="Home" to="/" />
              <FooterLink text="Our Collection" to="/collection" />
              <FooterLink text="Our Story" to="/our-story" />
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '18px', marginBottom: '20px', fontFamily: 'Playfair Display', color: 'var(--text-primary)' }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--text-secondary)', fontSize: '15px' }}>
              <li>123 Diamond Avenue</li>
              <li>Mumbai, 400001, India</li>
              <li style={{ marginTop: '10px' }}><a href="tel:+919876543210" style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>+91 98765 43210</a></li>
              <li><a href="mailto:info@a2zdyewala.com" style={{ color: 'var(--text-primary)' }}>info@a2zdyewala.com</a></li>
            </ul>
          </div>

        </div>

        <div style={{ 
          borderTop: '1px solid var(--border-color)', 
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            &copy; {new Date().getFullYear()} A2Z DYE Wala. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px', fontSize: '14px', color: 'var(--text-secondary)' }}>
            <Link to="#" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-primary)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Privacy Policy</Link>
            <Link to="#" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-primary)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }) => (
  <a href="#" style={{
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: 'var(--bg-primary)',
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
    e.currentTarget.style.background = 'var(--bg-primary)';
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
      transition: 'color 0.3s, transform 0.3s',
      display: 'inline-block'
    }}
    onMouseOver={(e) => {
      e.target.style.color = 'var(--accent-primary)';
      e.target.style.transform = 'translateX(5px)';
    }}
    onMouseOut={(e) => {
      e.target.style.color = 'var(--text-secondary)';
      e.target.style.transform = 'translateX(0)';
    }}>
      {text}
    </Link>
  </li>
);

export default Footer;
