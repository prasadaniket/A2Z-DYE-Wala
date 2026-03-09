import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const diamondRef = useRef(null);
  const shardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: "expo.inOut",
          onComplete: onComplete
        });
      }
    });

    // 1. Initial Styles
    gsap.set(".preloader-char", { y: 20, opacity: 0 });
    gsap.set(".diamond-path", { strokeDasharray: 300, strokeDashoffset: 300 });

    // 2. Diamond Animation (The "Faceting")
    tl.to(".diamond-path", {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power3.inOut",
      stagger: 0.1
    });

    tl.to(diamondRef.current, {
      scale: 1.1,
      duration: 1,
      repeat: 1,
      yoyo: true,
      ease: "sine.inOut"
    }, "-=1.5");

    // 3. Shimmer / Pulse
    tl.to(".diamond-glow", {
      opacity: 0.8,
      scale: 1.5,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

    // 4. Branding Reveal (Staggered Characters)
    tl.to(".preloader-char", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: "power4.out"
    }, "-=1");

    tl.from(".preloader-tagline", {
      opacity: 0,
      y: 10,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

  }, [onComplete]);

  const brandName = "A2Z DYE WALA";

  return (
    <div className="preloader-overlay-v2" ref={containerRef}>
      <div className="preloader-visual-v2">
        <div className="diamond-container" ref={diamondRef}>
          <div className="diamond-glow"></div>
          <svg viewBox="0 0 100 100" className="diamond-svg">
            <path className="diamond-path" d="M50 10 L85 35 L50 90 L15 35 Z" fill="none" stroke="#7852FF" strokeWidth="0.5" />
            <path className="diamond-path" d="M15 35 L85 35" fill="none" stroke="#7852FF" strokeWidth="0.5" />
            <path className="diamond-path" d="M50 10 L50 90" fill="none" stroke="#7852FF" strokeWidth="0.5" />
            <path className="diamond-path" d="M32 22 L32 35 L50 90" fill="none" stroke="#7852FF" strokeWidth="0.5" />
            <path className="diamond-path" d="M68 22 L68 35 L50 90" fill="none" stroke="#7852FF" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="preloader-text-v2">
          <h1 className="preloader-brand-v2">
            {brandName.split("").map((char, i) => (
              <span key={i} className="preloader-char" style={{ display: char === " " ? "inline" : "inline-block" }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="preloader-tagline">Exquisite Craftsmanship Since 1990</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
