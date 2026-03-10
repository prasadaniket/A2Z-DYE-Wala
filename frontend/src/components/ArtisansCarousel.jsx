import { useState } from 'react';
import { Star } from 'lucide-react';

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

const ArtisansCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="ac-star-container">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} className="ac-star-icon ac-star-filled" />;
          } else if (i === fullStars && hasHalfStar) {
            return (
              <div key={i} style={{ position: 'relative' }}>
                <Star className="ac-star-icon ac-star-empty" />
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', width: '50%' }}>
                  <Star className="ac-star-icon ac-star-filled" />
                </div>
              </div>
            );
          } else {
            return <Star key={i} className="ac-star-icon ac-star-empty" />;
          }
        })}
      </div>
    );
  };

  return (
    <section className="ac-team-section">
      <div className="ac-carousel-container">
        <div className="ac-carousel-header">
          <span className="ac-carousel-eyebrow">The Collective</span>
          <h2 className="ac-carousel-title">
            Crafted by the hands of masters. <br />
            <span>What our clients say about our Artisans.</span>
          </h2>
        </div>

        <div
          className="ac-slider-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="ac-fade-left"></div>
          <div className="ac-fade-right"></div>

          <div className={`ac-slider-track ${isPaused ? 'paused' : ''}`}>
            {[...Array(2)].map((_, setIndex) =>
              artisans.map((artisan) => (
                <div key={`${setIndex}-${artisan.id}`} className="ac-card-wrapper">
                  {artisan.type === 'featured' ? (
                    <div className="ac-artisan-card-feat">
                      <img src={artisan.image} alt={artisan.name} className="ac-feat-img" />
                      <div className="ac-feat-overlay-default">
                        <h4 className="ac-feat-name">{artisan.name}</h4>
                        <p className="ac-feat-role">{artisan.role}</p>
                      </div>
                      <div className="ac-feat-overlay-hover">
                        <h4 className="ac-feat-name" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '1.75rem' }}>{artisan.name}</h4>
                        <p className="ac-feat-role" style={{ marginBottom: '1rem', color: 'var(--pu-light)' }}>{artisan.role}</p>
                        <blockquote style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                          &quot;{artisan.bio}&quot;
                        </blockquote>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                          {renderStars(artisan.rating)}
                          <span className="ac-rating-value" style={{ color: 'white' }}>{artisan.rating}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="ac-artisan-card-reg">
                      <div className="ac-card-profile">
                        <img src={artisan.image} alt={artisan.name} className="ac-profile-img" />
                        <div>
                          <h4 className="ac-profile-name" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '1.4rem' }}>{artisan.name}</h4>
                          <p className="ac-profile-role">{artisan.role}</p>
                          <p className="ac-profile-specialty">{artisan.handle}</p>
                        </div>
                      </div>
                      <p className="ac-card-quote">&quot;{artisan.bio}&quot;</p>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {renderStars(artisan.rating)}
                        <span className="ac-rating-value">{artisan.rating}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="ac-bottom-tagline">
          <p>Join our sanctuary of bespoke brilliance and experience the heritage of A2Z DYE Wala.</p>
        </div>
      </div>

      <style>{`
        /* Local Scoped Component CSS */
        .ac-team-section {
          background-color: var(--bg-primary);
          padding: 8rem 0;
          position: relative;
          z-index: 10;
        }

        .ac-carousel-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .ac-carousel-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .ac-carousel-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--pu-muted);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 0.5rem;
          display: block;
        }

        .ac-carousel-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          color: var(--pu-darkest);
          line-height: 1.2;
        }

        .ac-carousel-title span {
          color: var(--pu-accent);
          display: block;
          margin-top: 10px;
        }

        .ac-slider-viewport {
          position: relative;
          overflow: hidden;
          padding: 20px 0;
        }

        .ac-fade-left,
        .ac-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 8rem;
          z-index: 10;
          pointer-events: none;
        }

        .ac-fade-left {
          left: 0;
          background: linear-gradient(to right, var(--bg-primary), transparent);
        }

        .ac-fade-right {
          right: 0;
          background: linear-gradient(to left, var(--bg-primary), transparent);
        }

        .ac-slider-track {
          display: flex;
          width: max-content;
          animation: ac-scroll 100s linear infinite;
        }

        .ac-slider-track.paused {
          animation-play-state: paused;
        }

        @keyframes ac-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .ac-card-wrapper {
          flex-shrink: 0;
          margin-right: 1.5rem;
        }

        /* Testimonial Regular Card */
        .ac-artisan-card-reg {
          background-color: var(--pure-white);
          border-radius: 1.5rem;
          padding: 1.5rem;
          width: 320px;
          height: 380px; /* Explicit height */
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .ac-artisan-card-reg:hover {
          border-color: rgba(120, 82, 255, 0.3);
          box-shadow: 0 10px 15px -3px rgba(120, 82, 255, 0.1);
          transform: translateY(-5px);
        }

        .ac-card-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .ac-profile-img {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--pu-bg-tint);
        }

        .ac-profile-name {
          color: var(--pu-darkest);
          margin: 0;
        }

        .ac-profile-role {
          font-family: 'Inter', sans-serif;
          font-size: 0.8125rem;
          color: var(--pu-muted);
          margin: 0;
        }

        .ac-profile-specialty {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: var(--pu-accent);
          opacity: 0.8;
          margin-top: 2px;
        }

        .ac-card-quote {
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--pu-deep);
          font-style: italic;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        /* Featured Tall Card */
        .ac-artisan-card-feat {
          position: relative;
          background-color: #f3f4f6;
          border-radius: 1.5rem;
          overflow: hidden;
          width: 320px;
          height: 380px; /* Matched height */
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .ac-artisan-card-feat:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 30px -10px rgba(120, 82, 255, 0.2);
        }

        .ac-feat-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: filter 0.3s ease;
        }

        .ac-artisan-card-feat:hover .ac-feat-img {
          filter: blur(8px);
        }

        .ac-feat-overlay-default {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          color: var(--pure-white);
          transition: opacity 0.3s ease;
          z-index: 5;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .ac-artisan-card-feat:hover .ac-feat-overlay-default {
          opacity: 0;
        }

        .ac-feat-name {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .ac-feat-role {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          opacity: 0.9;
        }

        .ac-feat-overlay-hover {
          position: absolute;
          inset: 0;
          background-color: rgba(25, 11, 59, 0.75);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
          color: var(--pure-white);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
        }

        .ac-artisan-card-feat:hover .ac-feat-overlay-hover {
          opacity: 1;
        }

        /* Star Rating */
        .ac-star-container {
          display: flex;
          gap: 2px;
        }
        .ac-star-icon {
          width: 14px;
          height: 14px;
        }
        .ac-star-filled {
          fill: #fbbf24;
          color: #fbbf24;
        }
        .ac-star-empty {
          color: #e5e7eb;
        }
        .ac-rating-value {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: var(--pu-muted);
          margin-left: 0.5rem;
          font-weight: 500;
        }

        .ac-bottom-tagline {
          text-align: center;
          margin-top: 3rem;
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: var(--pu-muted);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </section>
  );
};

export default ArtisansCarousel;
