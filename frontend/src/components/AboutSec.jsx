import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSec = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(".about-image-overlay", 
        { height: "100%" },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          height: "0%",
          duration: 1.5,
          ease: "power4.inOut"
        }
      );

      // Image subtle scale
      gsap.fromTo(".about-image",
        { scale: 1.2 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          scale: 1,
          duration: 2,
          ease: "power2.out"
        }
      );

      // Text stagger animation
      gsap.fromTo(".about-stagger", 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: 'var(--bg-primary)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="about-grid">
          
          {/* Visual Side */}
          <div className="about-visual" style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', aspectRatio: '4/5', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <div className="about-image-overlay" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              background: 'var(--bg-primary)',
              zIndex: 2,
            }} />
            <img 
              className="about-image"
              src="/assets/images/legacy_crafting.png" 
              alt="Crafting Fine Jewelry"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'relative',
                zIndex: 1
              }}
            />
          </div>

          {/* Content Side */}
          <div className="about-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px' }}>
            <div className="about-stagger" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <span style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-primary)' }}></span>
              <span style={{ 
                color: 'var(--accent-primary)', 
                letterSpacing: '3px', 
                textTransform: 'uppercase', 
                fontSize: '12px', 
                fontFamily: 'Inter',
                fontWeight: '600'
              }}>
                Our Legacy
              </span>
            </div>
            
            <h2 className="about-stagger" style={{ 
              fontFamily: 'Playfair Display', 
              fontSize: 'clamp(36px, 5vw, 56px)', 
              lineHeight: '1.1', 
              marginBottom: '30px', 
              color: 'var(--text-primary)' 
            }}>
              Crafting The<br />
              <i style={{ color: 'var(--pu-muted)', fontWeight: '400' }}>Extraordinary</i>
            </h2>
            
            <p className="about-stagger" style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              marginBottom: '40px',
              maxWidth: '90%'
            }}>
              At A2Z DYE Wala, we merge generations of traditional jewelry craftsmanship with cutting-edge 3D visualization. We don&apos;t just sell jewelry—we bring your most precious visions into physical reality with 100% sustainably sourced diamonds and pure gold. Every piece is a testament to the intersection of art and architecture.
            </p>
            
            <div className="about-stagger">
              <Link to="/our-story" className="btn-premium" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                Discover Our Story <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        .btn-premium {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 32px;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .btn-premium::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background: var(--text-primary);
          transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }

        .btn-premium:hover {
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        .btn-premium:hover::before {
          height: 100%;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-content {
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSec;
