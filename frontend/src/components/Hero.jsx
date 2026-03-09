import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight, Diamond, Star, ExternalLink } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const visualRef = useRef(null);
  const titleLinesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial State
      gsap.set(".hero-v2-eyebrow", { opacity: 0, y: 20 });
      gsap.set(".hero-v2-description", { opacity: 0, y: 30 });
      gsap.set(".hero-v2-cta", { opacity: 0, y: 40 });
      gsap.set(".visual-main-frame", { scale: 1.1, opacity: 0, x: 50 });
      gsap.set(".visual-badge", { opacity: 0, scale: 0.8 });
      gsap.set(".hero-v2-title span", { yPercent: 120, opacity: 0 });

      // 2. Entrance Animation Timeline
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.5 }
      });

      tl.to(".hero-v2-title span", {
        yPercent: 0,
        opacity: 1,
        stagger: 0.15,
        delay: 0.4
      })
      .to(".hero-v2-eyebrow", {
        opacity: 1,
        y: 0,
        duration: 1
      }, "-=1.2")
      .to(".hero-v2-description", {
        opacity: 1,
        y: 0,
        duration: 1.2
      }, "-=1")
      .to(".hero-v2-cta", {
        opacity: 1,
        y: 0,
        duration: 1.2
      }, "-=1")
      .to(".visual-main-frame", {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 2,
        ease: "expo.out"
      }, "-=2")
      .to(".visual-badge", {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        duration: 1.2,
        ease: "back.out(1.7)"
      }, "-=1");

      // 3. Subtle Floating Animations
      gsap.to(".hero-ambient-orb", {
        x: "30px",
        y: "-30px",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".badge-top", {
        y: "-15px",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".badge-bottom", {
        y: "15px",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });

      // 4. Visual Parallax Effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to(".visual-image", {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="hero-v2-wrapper">
      {/* Background Elements */}
      <div className="hero-ambient-orb"></div>
      <div className="hero-line-decoration"></div>

      <div className="hero-v2-container">
        {/* Left Side: Content */}
        <div className="hero-v2-content">
          <span className="hero-v2-eyebrow">Exquisite Craftsmanship / Est. 1990</span>
          <h1 className="hero-v2-title">
            <span>Sculpting <em>Dreams</em></span>
            <span>Into <em>Physical</em></span>
            <span>Reality.</span>
          </h1>
          <p className="hero-v2-description">
            Experience the confluence of traditional artistry and digital precision. 
            We forge bespoke artifacts that transcend generations, 
            crafted with 100% sustainably sourced diamonds and pure gold.
          </p>
          
          <div className="hero-v2-cta">
            <Link to="/collection" className="btn-v2 btn-v2-primary">
              The Collection <ArrowUpRight size={18} />
            </Link>
            <Link to="/our-story" style={{ 
              color: 'var(--pu-darkest)', 
              fontWeight: '600', 
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Discover Our Story <Diamond size={16} />
            </Link>
          </div>
        </div>

        {/* Right Side: High-End Visuals */}
        <div className="hero-v2-visual" ref={visualRef}>
          {/* Top Badge */}
          <div className="visual-badge badge-top">
            <span className="badge-label">Exclusivity</span>
            <span className="badge-value">Collector's Grade</span>
            <div style={{ display: 'flex', gap: '2px', color: '#fbbf24' }}>
              <Star size={10} fill="#fbbf24" /><Star size={10} fill="#fbbf24" /><Star size={10} fill="#fbbf24" />
            </div>
          </div>

          <div className="visual-main-frame">
            <img 
              src="https://images.unsplash.com/photo-1599643478524-fb66f4558f6c?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Diamond Ring"
              className="visual-image"
            />
          </div>

          {/* Bottom Badge */}
          <div className="visual-badge badge-bottom">
            <span className="badge-label">Precision</span>
            <span className="badge-value">3D Visualized</span>
            <span style={{ fontSize: '10px', color: 'var(--pu-accent)', fontWeight: '700' }}>
              100% ACCURACY <ExternalLink size={10} style={{ marginLeft: '4px' }} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
