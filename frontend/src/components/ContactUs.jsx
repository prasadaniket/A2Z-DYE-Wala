/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background glow entrance animation (loads instantly when in view)
      gsap.from(".contact-bg-glow", {
        scale: 0.5,
        opacity: 0,
        duration: 2,
        ease: "power3.out"
      });

      // Stagger elements on scroll
      gsap.fromTo(".contact-stagger", 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: '120px 0', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
      {/* Decorative background element */}
      <div className="contact-bg-glow" style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, var(--glass-border) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(300px, 1fr) minmax(350px, 1.2fr)', 
          gap: '0',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)'
        }}>
          
          {/* Left Side: Visual & Info */}
          <div style={{
            position: 'relative',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg, var(--pu-darkest) 0%, var(--pu-deep) 100%)',
            color: 'var(--pure-white)',
            minHeight: '500px'
          }}>
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              opacity: 0.15, 
              backgroundImage: 'url("https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800")', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              zIndex: 0 
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }} className="contact-stagger">
              <span style={{ 
                fontFamily: 'Inter', 
                textTransform: 'uppercase', 
                letterSpacing: '3px', 
                fontSize: '12px', 
                color: 'var(--pu-muted)',
                display: 'block',
                marginBottom: '15px'
              }}>
                Private Concierge
              </span>
              <h3 style={{ 
                fontFamily: 'Playfair Display', 
                fontSize: 'clamp(32px, 4vw, 42px)', 
                marginBottom: '20px', 
                color: '#fff',
                lineHeight: 1.2
              }}>
                Commission Your Legacy
              </h3>
              <p style={{ color: 'var(--pu-light)', fontSize: '15px', lineHeight: 1.8, maxWidth: '90%' }}>
                Every masterpiece begins with a conversation. Connect with our master jewelers for a private consultation to transcend your vision into physical reality.
              </p>
            </div>

            <div style={{ position: 'relative', zIndex: 1, marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '30px' }} className="contact-stagger">
              <ContactItem icon={MapPin} title="The Atelier" detail="123 Diamond Avenue, Heritage District, Mumbai" />
              <ContactItem icon={Phone} title="Direct Line" detail="+91 98765 43210" />
              <ContactItem icon={Mail} title="Digital Correspondence" detail="bespoke@a2zdyewala.com" />
            </div>
          </div>

          {/* Right Side: Form */}
          <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="contact-stagger">
            <h4 style={{ 
              fontFamily: 'Playfair Display', 
              fontSize: '28px', 
              marginBottom: '40px', 
              color: 'var(--text-primary)' 
            }}>
              Request a Consultation
            </h4>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
              <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <MinimalInput type="text" label="First Name" />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <MinimalInput type="text" label="Last Name" />
                </div>
              </div>
              
              <MinimalInput type="email" label="Email Address" />
              <MinimalInput type="tel" label="Phone Number" />
              
              <div style={{ position: 'relative' }}>
                <textarea 
                  required
                  rows="2"
                  className="minimal-input"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid var(--border-color)',
                    padding: '10px 0',
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    outline: 'none',
                    resize: 'none',
                  }}
                ></textarea>
                <label className="minimal-label" style={{ top: '10px' }}>Tell us about your vision...</label>
              </div>
              
              <button 
                type="button" 
                className="btn btn-primary" 
                style={{ 
                  alignSelf: 'flex-start', 
                  marginTop: '10px',
                  padding: '16px 36px',
                  borderRadius: '0',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '14px',
                  textTransform: 'uppercase'
                }}
              >
                Summon the Artisan <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <style>{`
        .minimal-input:focus, .minimal-input:valid {
          border-bottom-color: var(--accent-primary) !important;
        }
        .minimal-label {
          position: absolute;
          left: 0;
          top: 10px;
          color: var(--text-secondary);
          font-size: 15px;
          pointer-events: none;
          transition: 0.3s ease all;
        }
        .minimal-input:focus ~ .minimal-label,
        .minimal-input:valid ~ .minimal-label {
          top: -15px !important;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent-primary);
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-grid > div {
            padding: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

const MinimalInput = ({ type, label }) => (
  <div style={{ position: 'relative' }}>
    <input 
      type={type} 
      required
      className="minimal-input"
      style={{
        width: '100%',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid var(--border-color)',
        padding: '10px 0',
        color: 'var(--text-primary)',
        fontFamily: 'Inter',
        fontSize: '15px',
        outline: 'none',
        transition: 'border-color 0.3s ease'
      }} 
    />
    <label className="minimal-label">{label}</label>
  </div>
);

const ContactItem = ({ icon: Icon, title, detail }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
    <div style={{ 
      width: '45px', 
      height: '45px', 
      borderRadius: '50%', 
      border: '1px solid rgba(255,255,255,0.2)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'var(--pu-light)'
    }}>
      <Icon size={18} />
    </div>
    <div>
      <h5 style={{ fontFamily: 'Inter', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.6)', marginBottom: '5px' }}>{title}</h5>
      <p style={{ color: '#fff', fontSize: '15px' }}>{detail}</p>
    </div>
  </div>
);

export default ContactUs;
