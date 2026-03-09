import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const diamondRef = useRef(null);
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  const [minTimeElapsed, setMinTimeElapsed] = React.useState(false);

  useEffect(() => {
    // 1. Monitor network status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // 2. Set minimum 2 second timer
    const timer = setTimeout(() => setMinTimeElapsed(true), 2000);

    // 3. GSAP Entrance and Infinite Loop
    const tl = gsap.timeline();
    gsap.set(diamondRef.current, { scale: 0.8, opacity: 0 });
    gsap.set(".diamond-glow", { opacity: 0, scale: 0.5 });

    tl.to(diamondRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    });

    tl.to(diamondRef.current, {
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }, "-=0.2");

    tl.to(".diamond-glow", {
      opacity: 0.6,
      scale: 1.4,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.out"
    }, "-=1.5");

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, []);

  // 4. Trigger exit only when Min Time is met AND Internet is back
  useEffect(() => {
    if (minTimeElapsed && isOnline) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: onComplete
      });
    }
  }, [minTimeElapsed, isOnline, onComplete]);

  return (
    <div className="preloader-overlay-v2" ref={containerRef}>
      <div className="preloader-visual-v2">
        <div className="diamond-container">
          <div className="diamond-glow"></div>
          <img 
            ref={diamondRef}
            src="/assets/Logo/DYE web logo.png" 
            alt="DYE Diamond Preloader" 
            style={{ 
              width: '120px', 
              height: '120px', 
              objectFit: 'contain', 
              zIndex: 10,
              filter: 'drop-shadow(0 0 15px rgba(120, 82, 255, 0.3))'
            }} 
          />
        </div>

        {/* Dynamic Connection Status Message */}
        <div style={{
          marginTop: '2rem',
          height: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {!isOnline && (
            <p className="animate-fadeIn" style={{
              fontFamily: 'Inter',
              color: '#6B5B95',
              fontSize: '14px',
              letterSpacing: '1px',
              opacity: 0.8
            }}>
              WAITING FOR INTERNET CONNECTION...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
