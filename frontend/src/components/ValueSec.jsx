import { useEffect, useRef } from 'react';
import { Diamond, Shield, Leaf, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const valuePillars = [
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    num: "01",
    desc: "Every ounce of gold is traced back to its root. We only partner with mines that respect both earth and artisan.",
    img: "/assets/images/value_ethical_origins.png"
  },
  {
    icon: Diamond,
    title: "Unrivaled Brilliance",
    num: "02",
    desc: "Precision to the tenth of a micron. Our masters cut for maximum light refraction and ethereal brilliance.",
    img: "/assets/images/value_flawless_cuts.png"
  },
  {
    icon: Shield,
    title: "Heritage & Trust",
    num: "03",
    desc: "A promise kept for decades. Every piece comes with a lifetime authenticity guarantee and certification.",
    img: "/assets/images/value_enduring_trust.png"
  },
  {
    icon: Heart,
    title: "Masterful Artistry",
    num: "04",
    desc: "Not machines, but humans. Every weld and setting is a testament to the soul of our master craftsmen.",
    img: "/assets/images/value_artisan_soul.png"
  }
];

const ValueSec = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in title
      gsap.fromTo(".vs-title-reveal",
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%"
          }
        }
      );

      // Advanced stagger up for the 4 columns
      gsap.fromTo(".vs-col",
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".vs-grid",
            start: "top 80%"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="value-section-premium" style={{
      backgroundColor: 'var(--bg-primary)',
      padding: '120px 0',
      position: 'relative'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div className="vs-title-reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ 
            color: 'var(--accent-primary)', 
            letterSpacing: '3px', 
            textTransform: 'uppercase', 
            fontSize: '12px', 
            fontFamily: 'Inter',
            fontWeight: '600',
            display: 'block',
            marginBottom: '15px'
          }}>
            Our Tenets
          </span>
          <h2 style={{ 
            fontFamily: 'Playfair Display', 
            fontSize: 'clamp(32px, 4vw, 48px)', 
            color: 'var(--text-primary)' 
          }}>
            The Absolute Standard
          </h2>
        </div>

        {/* 4 Cards in a Row Layout */}
        <div className="vs-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {valuePillars.map((val, idx) => (
            <div key={idx} className="vs-col" style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '3/4',
              cursor: 'pointer',
              isolation: 'isolate'
            }}>
              
              {/* Background Image */}
              <img 
                src={val.img} 
                alt={val.title}
                className="vs-bg-img"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 1, 
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: -2
                }}
              />

              {/* Gradient Overlay */}
              <div 
                className="vs-gradient"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, var(--pu-darkest) 0%, transparent 80%)',
                  opacity: 0.7,
                  transition: 'opacity 0.5s ease',
                  zIndex: -1
                }}
              />
              <div 
                className="vs-gradient-hover"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, var(--pu-darkest) 0%, var(--accent-primary) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.6s ease',
                  zIndex: -1,
                  mixBlendMode: 'multiply'
                }}
              />

              {/* Top Icons */}
              <div style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                right: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 3,
                color: 'var(--pure-white)'
              }}>
                <span className="vs-num" style={{ 
                  fontFamily: 'Inter', 
                  fontSize: '13px', 
                  letterSpacing: '2px', 
                  fontWeight: '600', 
                  color: 'var(--pure-white)',
                  transition: 'transform 0.4s ease'
                }}>
                  {val.num}
                </span>
                <div className="vs-icon-wrapper" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(5px)',
                  color: 'var(--pure-white)',
                  transition: 'all 0.4s ease',
                  background: 'rgba(255,255,255,0.1)'
                }}>
                  <val.icon size={18} />
                </div>
              </div>

              {/* Content Bottom (Animated to slide up/down) */}
              <div className="vs-text-content" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '30px 24px',
                zIndex: 3,
                color: 'var(--pure-white)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
                <h4 className="vs-title" style={{
                  fontFamily: 'Playfair Display',
                  fontSize: '24px',
                  marginBottom: '0px',
                  color: 'var(--pure-white)',
                  transform: 'translateY(15px)',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), margin-bottom 0.5s ease',
                  lineHeight: '1.2'
                }}>
                  {val.title}
                </h4>
                <div className="vs-desc-wrapper" style={{
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateRows: '0fr',
                  transition: 'grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                  <div style={{ minHeight: '0' }}>
                    <p className="vs-desc-text" style={{
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: 'rgba(255,255,255,0.85)',
                      opacity: 0,
                      transform: 'translateY(20px)',
                      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      marginTop: '12px'
                    }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Deep scale and overlay mix-blend for cinematic hover */
        .vs-col:hover .vs-bg-img {
          transform: scale(1.15);
        }
        .vs-col:hover .vs-gradient-hover {
          opacity: 0.9 !important;
        }

        /* Number and Icon Hover Effects */
        .vs-col:hover .vs-num {
          transform: translateY(-3px);
        }
        .vs-col:hover .vs-icon-wrapper {
          background: var(--pure-white) !important;
          color: var(--accent-primary) !important;
          border-color: var(--pure-white) !important;
          transform: rotate(15deg) scale(1.05);
        }

        /* Description Reveal Effects */
        .vs-col:hover .vs-title {
          transform: translateY(0) !important;
        }
        .vs-col:hover .vs-desc-wrapper {
          grid-template-rows: 1fr !important;
        }
        .vs-col:hover .vs-desc-text {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .vs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .vs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ValueSec;
