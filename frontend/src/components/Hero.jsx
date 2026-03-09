import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section style={{ 
      minHeight: '85vh', 
      display: 'flex', 
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      paddingTop: '20px'
    }}>
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ zIndex: 2 }}
        >
          <h1 className="dancing-script" style={{ 
            fontSize: 'clamp(40px, 6vw, 72px)', 
            lineHeight: '1.1',
            marginBottom: '20px',
            color: 'var(--text-primary)'
          }}>
            Discover Your Next<br />
            Favorite <span style={{ color: 'var(--accent-primary)' }}>Masterpiece</span>
          </h1>
          <p style={{ 
            color: 'var(--text-secondary)',
            fontSize: '18px',
            maxWidth: '500px',
            marginBottom: '40px',
            fontFamily: 'Playfair Display',
            fontStyle: 'italic'
          }}>
            A modern digital showroom to explore, design, and enjoy 
            exclusive 3D jewelry at your fingertips.
          </p>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/collection" className="btn btn-primary">
              Start Exploring <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Visuals Area inspired by LIT-ISLE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="glass-panel animate-float" style={{ padding: '10px', background: 'var(--bg-secondary)' }}>
            <img 
              src="https://images.unsplash.com/photo-1599643478524-fb66f4558f6c?auto=format&fit=crop&q=80&w=800" 
              alt="Luxury Diamond Ring"
              style={{
                width: '100%',
                maxWidth: '450px',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                objectFit: 'cover',
                aspectRatio: '4/3'
              }}
            />
          </div>

          {/* Floating UI Badges */}
          <div className="glass-panel animate-float-reverse" style={{
            position: 'absolute',
            top: '15%',
            right: '-10%',
            padding: '12px 20px',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
          }}>
             <span style={{ fontWeight: 600, fontSize: '13px', color: 'var(--text-primary)' }}>Premium Quality</span>
          </div>

          <div className="glass-panel animate-float" style={{
            position: 'absolute',
            bottom: '20%',
            left: '-5%',
            padding: '12px 20px',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
          }}>
            <span style={{ fontWeight: 600, fontSize: '13px', color: 'var(--text-primary)' }}>3D Showcase</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
