import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, Diamond, ArrowUpRight, Maximize2, Sparkles, Layers } from 'lucide-react';
import './Collection.css';

gsap.registerPlugin(ScrollTrigger);

const collectionItems = [
  {
    id: 1,
    num: "01",
    name: "Nebula Infinity Droplet",
    category: "Ethereal / Necklace",
    desc: "A fluid silhouette that captures the essence of motion. Crafted in liquid white gold, the Nebula sequence is a testament to generative design and hand-finish.",
    modelId: "NEB-INF-05",
    spec: "18k WG / 0.8ct Blue Dia",
    image: "/geo_necklace_preview.png",
    splineUrl: "https://my.spline.design/geonecklace-EgIHjwcL85ohca4EUFqSczbz/"
  },
  {
    id: 2,
    num: "02",
    name: "Chronos Mirror Bracelet",
    category: "Avant-Garde / Bracelet",
    desc: "A series of laser-precision mirror plates interlocking with surgical accuracy. A seamless flow of gold and light that responds to every subtle wrist movement.",
    modelId: "CHRON-MB-77",
    spec: "Custom Scale / 18k YG",
    image: "/gold_bracelet_preview.png",
    splineUrl: "https://my.spline.design/cartiergoldlovebracelet-SATsIrgu1HUytlInsE4mPeak/"
  }
];

const Collection = () => {
  const containerRef = useRef(null);
  const [active3D, setActive3D] = React.useState({});

  const toggle3D = (id) => {
    setActive3D(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Intro Animation Timeline
      const tl = gsap.timeline();

      tl.to(".hero-spline-bg", {
        opacity: 1,
        duration: 2.5,
        ease: "expo.out"
      })
        .to(".collection-eyebrow span", {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out"
        }, "-=1.8")
        .to(".collection-title span", {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.5,
          ease: "expo.out"
        }, "-=1.5")
        .to(".collection-desc span", {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.2,
          ease: "power2.out"
        }, "-=1.2");

      // Showcase Items Entrance: Clean Fade & Rise
      gsap.utils.toArray(".showcase-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=15%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power2.out"
        });

        // Sub-parallax for the image
        gsap.to(item.querySelector(".visual-img"), {
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          },
          y: -40,
          scale: 1.1,
          ease: "none"
        });
      });

      // Ambient Orbs Motion
      gsap.to(".orb-1", {
        x: "50vw",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="collection-wrapper">
      {/* Background Decor */}
      <div className="collection-orb orb-1" style={{ top: '20vh', left: '-10vw' }}></div>
      <div className="collection-orb orb-2" style={{ bottom: '20vh', right: '-10vw', opacity: 0.5 }}></div>

      {/* Hero Section with 3D Intro */}
      <section className="collection-hero">
        <div className="hero-spline-bg" style={{ pointerEvents: 'none' }}>
          <iframe
            src='https://my.spline.design/geonecklace-EgIHjwcL85ohca4EUFqSczbz/?optimized'
            frameBorder='0'
            width='100%'
            height='100%'
            importance="high"
            title="Hero Necklace Model"
          ></iframe>
          <div className="spline-cover-blur"></div>
        </div>

        <div className="hero-content-wrapper">
          <span className="collection-eyebrow">
            <span style={{ opacity: 0, transform: 'translateY(20px)', display: 'block' }}>Curated Exhibition</span>
          </span>
          <h1 className="collection-title">
            <span style={{ opacity: 0, transform: 'translateY(30px)' }}>The Masterpiece</span>
            <span style={{ opacity: 0, transform: 'translateY(30px)' }}><i>Collection</i></span>
          </h1>
          <p className="collection-desc">
            <span style={{ opacity: 0, transform: 'translateY(20px)', display: 'block' }}>Step into the void of mathematical perfection.</span>
            <span style={{ opacity: 0, transform: 'translateY(20px)', display: 'block' }}>Each piece is a testament to the intersection</span>
            <span style={{ opacity: 0, transform: 'translateY(20px)', display: 'block' }}>of generative art and high jewelry.</span>
          </p>
        </div>
      </section>

      {/* Main Showcase */}
      <main className="showcase-grid">
        {collectionItems.map((item) => (
          <div key={item.id} className="showcase-item" style={{ transform: 'translateY(100px)' }}>

            {/* Info Side */}
            <div className="item-info">
              <span className="item-num">{item.num}</span>
              <span className="item-category">{item.category}</span>
              <h2 className="item-name">{item.name}</h2>
              <p className="item-desc">{item.desc}</p>

              <div className="item-meta">
                <div>
                  <span className="meta-label">ID / BLOCKCHAIN</span>
                  <span className="meta-value">{item.modelId}</span>
                </div>
                <div>
                  <span className="meta-label">ARCHITECTURE</span>
                  <span className="meta-value">{item.spec}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '2rem' }}>
                <button
                  className="btn-3d"
                  onClick={() => item.splineUrl && toggle3D(item.id)}
                  style={{ borderRadius: '0', padding: '1rem 3rem' }}
                >
                  {active3D[item.id] ? "TERMINATE LINK" : "ESTABLISH 3D LINK"}
                </button>
              </div>
            </div>

            {/* Visual Side */}
            <div className="item-visual">
              {active3D[item.id] && item.splineUrl ? (
                <div className="spline-container" style={{ width: '100%', height: '100%' }}>
                  <iframe
                    src={item.splineUrl}
                    frameBorder='0'
                    width='100%'
                    height='100%'
                    title={item.name}
                  ></iframe>
                  <button className="close-3d" onClick={() => toggle3D(item.id)}>
                    EXIT INTERFACE
                  </button>
                </div>
              ) : (
                <>
                  <div className="visual-overlay"></div>
                  <img src={item.image} alt={item.name} className="visual-img" />

                  {/* Info Glass Action */}
                  <div className="visual-action">
                    <button
                      className="btn-3d"
                      onClick={() => item.splineUrl && toggle3D(item.id)}
                    >
                      ENGAGE DIGITAL TWIN
                    </button>
                  </div>

                  {/* Float Labels */}
                  <div style={{
                    position: 'absolute',
                    top: '4rem',
                    right: '4rem',
                    color: 'rgba(255,255,255,0.15)',
                    fontSize: '10px',
                    letterSpacing: '0.8em',
                    fontWeight: '300',
                    zIndex: 5,
                    writingMode: 'vertical-rl'
                  }}>
                    HIGH PRECISION SCAN // SERIES 1.0
                  </div>
                </>
              )}
            </div>

          </div>
        ))}
      </main>

      {/* Technical Footer */}
      <section className="technical-section">
        <h3>The DYE <i>Legacy</i></h3>
        <p>
          Our 3D showcase represents our absolute commitment to engineering clarity.
          Through these digital artifacts, we redefine the boundaries of luxury.
        </p>
      </section>
    </div>
  );
};

export default Collection;
