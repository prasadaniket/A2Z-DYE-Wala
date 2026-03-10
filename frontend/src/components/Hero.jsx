import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight, Diamond } from 'lucide-react';
import Spline from '@splinetool/react-spline';
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
      gsap.set(".hero-spline-wrapper", { opacity: 0, scale: 0.95 });
      gsap.set(".visual-main-frame", { scale: 1.1, opacity: 0, x: 50 });
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
        .to(".hero-spline-wrapper", {
          opacity: 1,
          scale: 1,
          duration: 2.5,
          ease: "expo.out"
        }, "-=1.5")
        .to(".visual-main-frame", {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 2,
          ease: "expo.out"
        }, "-=2");

      // 3. Subtle Floating Animations
      gsap.to(".hero-ambient-orb", {
        x: "30px",
        y: "-30px",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
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
        {/* Premium Iframe Model Treatment */}
        <div className="hero-spline-wrapper" style={{
          position: 'absolute',
          top: 0,
          right: '-15%',
          width: '70%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}>
          <iframe
            src="https://my.spline.design/louisvuittonaquamarine-ymnsd6HVSpLeRRKw6uyDjPAA/?optimized"
            frameBorder="0"
            width="100%"
            height="100%"
            importance="high"
            loading="eager"
            title="Louis Vuitton Aquamarine Model"
            style={{ border: 'none' }}
          ></iframe>
        </div>

        {/* Left Side: Content */}
        <div className="hero-v2-content" style={{ position: 'relative', zIndex: 10 }}>
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
        <div className="hero-v2-visual" ref={visualRef} style={{ position: 'relative', zIndex: 10 }}>
          <div className="visual-main-frame" style={{ opacity: 0, visibility: 'hidden' }}>
            {/* Kept for GSAP target stability but hidden, Spline now floats independently */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
