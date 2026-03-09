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
    name: "Astra Radiant Halo",
    category: "Elite Series / Ring",
    desc: "A singular 3-carat center diamond suspended within a celestial nest of 100+ micro-pavé accents. Every facet is digitally calculated for maximum internal light refraction.",
    modelId: "AST-2024-RH",
    spec: "3.2ct D-IF / PT950",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    num: "02",
    name: "Nebula Infinity Droplet",
    category: "Ethereal / Necklace",
    desc: "A fluid silhouette that captures the essence of motion. Crafted in liquid white gold, the Nebula sequence is a testament to generative design and hand-finish.",
    modelId: "NEB-INF-05",
    spec: "18k WG / 0.8ct Blue Dia",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    num: "03",
    name: "Zenith Emerald Signet",
    category: "Heritage / Signet",
    desc: "Redefining the classic signet for the digital age. A step-cut emerald of deep forest hue, encased in a high-density gold chassis with proprietary structural ribbing.",
    modelId: "ZEN-EM-SIGN",
    spec: "5.5ct Emerald / 22k Gold",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    num: "04",
    name: "Elysian Bloom Studs",
    category: "Organic / Earrings",
    desc: "Inspired by algorithmic floral growth patterns. These studs present a microscopic lattice structure that distributes light across 360 degrees of rotation.",
    modelId: "ELY-BLOOM-22",
    spec: "1.2ct Total / 14k RG",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 5,
    num: "05",
    name: "Chronos Mirror Bracelet",
    category: "Avant-Garde / Bracelet",
    desc: "A series of laser-precision mirror plates interlocking with surgical accuracy. A seamless flow of gold and light that responds to every subtle wrist movement.",
    modelId: "CHRON-MB-77",
    spec: "Custom Scale / 18k YG",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200"
  }
];

const Collection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Hero Reveal
      gsap.from(".collection-title", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      // 2. Showcase Items Entrance
      gsap.utils.toArray(".showcase-item").forEach((item) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=10%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "expo.out"
        });

        // Split Parallax for Info vs Visual
        gsap.to(item.querySelector(".item-visual"), {
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          },
          y: -50,
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
    <div ref={containerRef} className="collection-wrapper page-bg">
      {/* Background Decor */}
      <div className="collection-orb orb-1" style={{ top: '20vh', left: '-10vw' }}></div>
      <div className="collection-orb orb-2" style={{ bottom: '20vh', right: '-10vw', opacity: 0.5 }}></div>

      {/* Hero Section */}
      <section className="collection-hero">
        <span className="collection-eyebrow">The Virtual Showroom</span>
        <h1 className="collection-title">A Symphony of<br />Digitized <i>Elegance</i></h1>
        <p className="collection-desc">
          Explore our most exclusive masterpiece collection. Each piece is a digital twin of physical perfection, 
          meticulously rendered to showcase the apex of our architectural jewelry design.
        </p>
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
                  <span className="meta-label">Model ID</span>
                  <span className="meta-value">{item.modelId}</span>
                </div>
                <div>
                  <span className="meta-label">Technical Spec</span>
                  <span className="meta-value">{item.spec}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '2rem' }}>
                <button className="btn btn-primary" style={{ display: 'inline-flex', gap: '10px' }}>
                  Open 3D Viewer <Box size={18} />
                </button>
                <button className="btn btn-outline" style={{ display: 'inline-flex', gap: '10px' }}>
                  Certificates <Sparkles size={16} />
                </button>
              </div>
            </div>

            {/* Visual Side */}
            <div className="item-visual">
              <div className="visual-overlay"></div>
              <img src={item.image} alt={item.name} className="visual-img" />
              
              {/* Hover 3D Action */}
              <div className="visual-action">
                <button className="btn-3d">
                   Focus Model <Maximize2 size={20} />
                </button>
              </div>

              {/* Float Labels */}
              <div style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                color: 'white',
                fontSize: '12px',
                fontWeight: '600',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Layers size={14} style={{ marginRight: '8px' }} /> 3D SCANNED
              </div>
            </div>

          </div>
        ))}
      </main>

      {/* Technical Footer */}
      <section style={{ textAlign: 'center', marginTop: '10rem', padding: '0 5vw' }}>
        <h3 style={{ fontFamily: 'Playfair Display', fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Precision of DYE</h3>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--pu-muted)' }}>
          Our 3D showcase represents our absolute commitment to engineering clarity. 
          By visualizing these masterpieces in a virtual space, we allow you to perceive 
          the microscopic intricacies that define a legacy.
        </p>
      </section>
    </div>
  );
};

export default Collection;
