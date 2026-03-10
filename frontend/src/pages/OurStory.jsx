import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Diamond, Shield, Leaf, Heart, Star } from 'lucide-react';
import './OurStory.css';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const containerRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const orbRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);

  const artisans = [
    {
      id: 1,
      name: "Aarav Sharma",
      role: "Master Jeweler",
      handle: "@artisanaarav",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
      bio: "With over 30 years of experience, Aarav specializes in complex structural gold work and antique restoration.",
      type: "testimonial",
      rating: 5.0
    },
    {
      id: 2,
      name: "Vikram Singh",
      role: "Metal Smith",
      handle: "@vikram.gold",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
      bio: "Vikram's expertise lies in high-fire soldering and the manipulation of heavy platinum for bespoke bridal pieces.",
      type: "testimonial",
      rating: 5.0
    },
    {
      id: 3,
      name: "Priya Desai",
      role: "3D Architect",
      handle: "@priya_renders",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600",
      bio: "Priya translates ethereal dreams into digital blueprints, ensuring every facet is mathematically perfect.",
      type: "featured",
      rating: 5.0
    },
    {
      id: 4,
      name: "Sanya Malhotra",
      role: "Filigree Expert",
      handle: "@sanya_weave",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600",
      bio: "Specializing in the ancient art of wire weaving, Sanya creates patterns that appear light as air yet strong as stone.",
      type: "testimonial",
      rating: 4.5
    },
    {
      id: 5,
      name: "Ananya Raichand",
      role: "Polishing Specialist",
      handle: "@finish_by_ananya",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600",
      bio: "The final mirror-finish of our pieces is Ananya's signature. She treats every surface with microscopic precision.",
      type: "testimonial",
      rating: 5.0
    },
    {
      id: 6,
      name: "Rahul Verma",
      role: "Chief Gemologist",
      handle: "@rahul_gemstones",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600",
      bio: "Our eyes on the ground. Rahul travels to remote mines to hand-select only the top 1% of ethically sourced stones.",
      type: "featured",
      rating: 4.5
    },
    {
      id: 7,
      name: "Ishaan Khatter",
      role: "Diamond Setter",
      handle: "@ishaan_stoneset",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
      bio: "Ishaan's steady hands secure our most valuable diamonds using traditional pavé and channel setting techniques.",
      type: "testimonial",
      rating: 4.0
    },
    {
      id: 8,
      name: "Meera Rajput",
      role: "Design Researcher",
      handle: "@meera_heritage",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600",
      bio: "Meera digs through historical archives to bring traditional Indian jewelry patterns into the 21st century.",
      type: "testimonial",
      rating: 5.0
    },
    {
      id: 9,
      name: "Zoya Akhtar",
      role: "Heritage Consultant",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=600",
      handle: "@zoya_culture",
      bio: "Zoya ensures our modern designs respect the cultural narratives and craftsmanship traditions they draw from.",
      type: "featured",
      rating: 4.5
    },
    {
      id: 10,
      name: "Advait Singh",
      role: "Casting Master",
      handle: "@advait_cast",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
      bio: "Overseeing the liquid state of our gold, Advait ensures the base structures are flawless and high-density.",
      type: "testimonial",
      rating: 4.0
    },
    {
      id: 11,
      name: "Radhika Iyer",
      role: "Quality Control",
      handle: "@radhika_quality",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=600",
      bio: "The gateway. Nothing leaves the workshop without Radhika's 40-point verification under 10x magnification.",
      type: "testimonial",
      rating: 5.0
    },
    {
      id: 12,
      name: "Sameer Khan",
      role: "Hand Engraver",
      handle: "@sameer_etch",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600",
      bio: "Sameer's hand-engravings add the final personal touch, whether it's a family motto or an intricate floral border.",
      type: "featured",
      rating: 5.0
    }
  ];

  const valuePillars = [
    {
      icon: Leaf,
      title: "Ethical Origins",
      num: "01",
      desc: "Every ounce of gold is traced back to its root. We only partner with mines that respect both earth and artisan.",
      img: "https://images.unsplash.com/photo-1590486803833-ffc47530c3a5?q=80&w=800"
    },
    {
      icon: Diamond,
      title: "Flawless Cuts",
      num: "02",
      desc: "Precision to the tenth of a micron. Our masters cut for maximum light refraction and ethereal brilliance.",
      img: "https://images.unsplash.com/photo-1598560942007-6818173271ad?q=80&w=800"
    },
    {
      icon: Shield,
      title: "Enduring Trust",
      num: "03",
      desc: "A promise kept for decades. Every piece comes with a lifetime authenticity guarantee and certification.",
      img: "https://images.unsplash.com/photo-1573408302185-912704439c3b?q=80&w=800"
    },
    {
      icon: Heart,
      title: "Artisan Soul",
      num: "04",
      desc: "Not machines, but humans. Every weld and setting is a testament to the soul of our master craftsmen.",
      img: "https://images.unsplash.com/photo-1616423403598-15cf466ecf9e?q=80&w=800"
    }
  ];

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

      // Parallax Values
      gsap.utils.toArray(".value-card-parallax").forEach((card, i) => {
        let yMove = -30 + (i * 10);
        gsap.to(card, {
          yPercent: window.innerWidth > 768 ? yMove : 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".values-section-v2",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Continuous Scroll / Auto-slide Logic
  // (Animation is now handled via CSS for 'smooth scale' effect, React just handles pause state)

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="star-container">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} className="star-icon star-filled" />;
          } else if (i === fullStars && hasHalfStar) {
            return (
              <div key={i} style={{ position: 'relative' }}>
                <Star className="star-icon star-empty" />
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', width: '50%' }}>
                  <Star className="star-icon star-filled" />
                </div>
              </div>
            );
          } else {
            return <Star key={i} className="star-icon star-empty" />;
          }
        })}
      </div>
    );
  };

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

      {/* 3. Values */}
      <section className="values-section-v2">
        <div className="values-container-v2">
          <div className="values-header">
            <h2 className="section-title-medium">The Absolute Standard</h2>
          </div>
          <div className="values-masonry">
            {valuePillars.map((val, idx) => (
              <div
                className={`value-card-parallax value-card-${idx} group`}
                key={idx}
              >
                <div className="val-img-container">
                  <img src={val.img} alt={val.title} className="val-bg-img" />
                  <div className="val-overlay"></div>
                </div>

                <div className="val-content-top">
                  <div className="val-num-row">
                    <span className="val-num">{val.num}</span>
                    <val.icon className="val-icon" />
                  </div>
                </div>

                <div className="val-content-bottom">
                  <h4 className="val-title">{val.title}</h4>
                  <p className="val-hover-desc">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Artisans (Carousel) */}
      <section className="team-section-v3">
        <div className="carousel-container">
          <div className="carousel-header">
            <span className="carousel-eyebrow">The Collective</span>
            <h2 className="carousel-title">
              Crafted by the hands of masters. <br />
              <span>What our clients say about our Artisans.</span>
            </h2>
          </div>


          <div
            className="slider-viewport"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="fade-left"></div>
            <div className="fade-right"></div>

            <div
              className={`slider-track ${isPaused ? 'paused' : ''}`}
            >
              {[...Array(2)].map((_, setIndex) =>
                artisans.map((artisan) => (
                  <div key={`${setIndex}-${artisan.id}`} className="card-wrapper">
                    {artisan.type === 'featured' ? (
                      <div className="artisan-card-feat">
                        <img src={artisan.image} alt={artisan.name} className="feat-img" />
                        <div className="feat-overlay-default">
                          <h4 className="feat-name">{artisan.name}</h4>
                          <p className="feat-role">{artisan.role}</p>
                        </div>
                        <div className="feat-overlay-hover">
                          <h4 className="feat-name" style={{ fontFamily: 'cursive' }}>{artisan.name}</h4>
                          <p className="feat-role" style={{ marginBottom: '1rem' }}>{artisan.role}</p>
                          <blockquote style={{ fontSize: '0.875rem', lineStyle: 'italic', marginBottom: '1.5rem' }}>
                            &quot;{artisan.bio}&quot;
                          </blockquote>
                          <div className="flex items-center justify-center gap-1">
                            {renderStars(artisan.rating)}
                            <span className="rating-value" style={{ color: 'white' }}>{artisan.rating}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="artisan-card-reg">
                        <div className="card-profile">
                          <img src={artisan.image} alt={artisan.name} className="profile-img" />
                          <div>
                            <h4 className="profile-name" style={{ fontFamily: 'cursive' }}>{artisan.name}</h4>
                            <p className="profile-role">{artisan.role}</p>
                            <p className="profile-specialty">{artisan.handle}</p>
                          </div>
                        </div>
                        <p className="card-quote">&quot;{artisan.bio}&quot;</p>
                        <div className="flex items-center">
                          {renderStars(artisan.rating)}
                          <span className="rating-value">{artisan.rating}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bottom-tagline">
            <p>Join our sanctuary of bespoke brilliance and experience the heritage of A2Z DYE Wala.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurStory;
