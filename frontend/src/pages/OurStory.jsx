import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ValueSec from '../components/ValueSec';
import ArtisansCarousel from '../components/ArtisansCarousel';
import './OurStory.css';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const containerRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const orbRef = useRef(null);



  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from(".hero-word-line span", {
        yPercent: 120,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      });

      // Subtle Orb Float
      gsap.to(orbRef.current, {
        y: "40px",
        x: "-20px",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Horizontal Scroll Timeline
      const totalWidth = horizontalSectionRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      if (totalWidth > viewportWidth) {
        gsap.to(".horizontal-wrapper", {
          x: () => -(totalWidth - viewportWidth),
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-section",
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalWidth}`,
            anticipatePin: 1
          }
        });
      }


    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={containerRef} className="os-wrapper-v2">

      <div className="fixed-orb" ref={orbRef}></div>

      {/* 1. Hero */}
      <section className="hero-section-v2">
        <div className="hero-left-v2">
          <div className="hero-content-v2">
            <p className="hero-eyebrow-v2">A2Z DYE Wala / Est. 1990</p>
            <h1 className="hero-title-v2">
              <div className="hero-word-line"><span>Sculpting</span></div>
              <div className="hero-word-line"><span>Light Into</span></div>
              <div className="hero-word-line"><span><i className="text-accent-purple">Eternity</i>.</span></div>
            </h1>
            <div className="hero-desc-container">
              <p className="hero-desc-v2">
                We transcend the traditional boundaries of jewelry making.
                By intertwining legendary craftsmanship with avant-garde 3D precision,
                we forge artifacts that outlive time itself.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-right-v2">
          <img src="/assets/hero-anchor.png" alt="Bespoke Jewelry" className="hero-split-img" />
        </div>
      </section>

      {/* 2. Timeline (Horizontal) */}
      <div className="horizontal-section" ref={horizontalSectionRef}>
        <div className="horizontal-wrapper">
          <div className="horizontal-intro">
            <h2 className="section-title-large">The<br />Chronicles</h2>
            <div className="scroll-indicator">
              <span>Scroll</span>
              <div className="scroll-line"></div>
            </div>
          </div>
          {[
            { year: "1990", title: "The Inception", desc: "A singular vision. One master artisan and an uncompromising dedication to raw perfection." },
            { year: "2005", title: "The Expansion", desc: "Securing ethically verified direct-mine partnerships across the globe." },
            { year: "2015", title: "Digital Renaissance", desc: "Adoption of proprietary 3D rendering technology for boundaryless creation." },
            { year: "Today", title: "The Legacy", desc: "A global atelier crafting bespoke narratives for connoisseurs worldwide." }
          ].map((era, i) => (
            <div className="horizontal-panel" key={i}>
              <div className="panel-content">
                <span className="panel-year">{era.year}</span>
                <h3 className="panel-title">{era.title}</h3>
                <p className="panel-desc">{era.desc}</p>
              </div>
            </div>
          ))}
          <div className="horizontal-outro">
            <div className="outro-circle"></div>
          </div>
        </div>
      </div>

      {/* 3. Values Component */}
      <ValueSec />

      {/* 4. Artisans Component */}
      <ArtisansCarousel />

    </div>
  );
};

export default OurStory;
