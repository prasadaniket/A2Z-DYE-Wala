import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // First time load: basic fade in for the whole container is handled by CSS,
      // but let's add specific scroll stagger for the legacy section.
      
      gsap.fromTo(".legacy-stagger", 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".legacy-section",
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
        }
      );

    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={homeRef} className="animate-fadeIn">
      <Hero />
      
      {/* Short About Section */}
      <section className="legacy-section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h4 className="legacy-stagger" style={{ 
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
          <h2 className="legacy-stagger" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '30px', color: 'var(--text-primary)' }}>
            Crafting the Extraordinary
          </h2>
          <p className="legacy-stagger" style={{ maxWidth: '700px', margin: '0 auto 40px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            At A2Z DYE Wala, we merge generations of traditional jewelry craftsmanship with cutting-edge 3D visualization. We don&apos;t just sell jewelry—we bring your most precious visions into physical reality with 100% sustainably sourced diamonds and pure gold.
          </p>
          <div className="legacy-stagger">
            <Link to="/our-story" className="btn btn-primary" style={{ display: 'inline-flex' }}>
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
};

export default Home;
