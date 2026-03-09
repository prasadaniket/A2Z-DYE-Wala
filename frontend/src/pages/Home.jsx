import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Hero from '../components/Hero';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      <Hero />
      
      {/* Short About Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h4 style={{ 
            color: 'var(--accent-primary)', 
            letterSpacing: '2px', 
            textTransform: 'uppercase', 
            fontSize: '14px', 
            marginBottom: '15px',
            fontFamily: 'Inter',
            fontWeight: '600'
          }}>
            Our Legacy
          </h4>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '30px', color: 'var(--text-primary)' }}>
            Crafting the Extraordinary
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 40px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            At A2Z DYE Wala, we merge generations of traditional jewelry craftsmanship with cutting-edge 3D visualization. We don't just sell jewelry—we bring your most precious visions into physical reality with 100% sustainably sourced diamonds and pure gold.
          </p>
          <Link to="/our-story" className="btn btn-primary" style={{ display: 'inline-flex' }}>
            Discover Our Story
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '100px 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="glass-panel" style={{ padding: '60px 40px', borderRadius: '20px' }}>
            <div className="grid-2" style={{ gap: '60px' }}>
              
              {/* Contact Information */}
              <div>
                <h3 style={{ fontSize: '36px', marginBottom: '20px', color: 'var(--text-primary)' }}>Get in Touch</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1rem', lineHeight: '1.6' }}>
                  Have a custom masterpiece in mind? Reach out to our master jewelers for a private consultation and comprehensive 3D design session.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'rgba(44, 95, 45, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>Visit Us</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>123 Diamond Avenue, Mumbai</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'rgba(44, 95, 45, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>Call Us</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>+91 98765 43210</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'rgba(44, 95, 45, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>Email Us</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>info@a2zdyewala.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <input type="text" placeholder="First Name" style={inputStyle} />
                    <input type="text" placeholder="Last Name" style={inputStyle} />
                  </div>
                  <input type="email" placeholder="Email Address" style={inputStyle} />
                  <input type="tel" placeholder="Phone Number" style={inputStyle} />
                  <textarea placeholder="Describe your dream jewelry piece..." rows="4" style={{...inputStyle, resize: 'none'}}></textarea>
                  
                  <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                    Send Inquiry
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  background: 'var(--bg-primary)',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  color: 'var(--text-primary)',
  fontFamily: 'Inter, sans-serif',
  fontSize: '15px',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

export default Home;
