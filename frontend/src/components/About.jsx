import React from 'react';
import { motion } from 'framer-motion';
import { Gem, ShieldCheck, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h4 style={{ 
            color: 'var(--accent-primary)', 
            letterSpacing: '2px', 
            textTransform: 'uppercase', 
            fontSize: '14px', 
            marginBottom: '15px',
            fontFamily: 'Inter',
            fontWeight: '600'
          }}>
            The Heritage
          </h4>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: '1.2', color: 'var(--text-primary)' }}>
            Crafting Masterpieces <br/> Since 1990
          </h2>
        </div>

        <div className="grid-2" style={{ gap: '60px', alignItems: 'center' }}>
          
          {/* Images Grid */}
          <div style={{ position: 'relative', height: '500px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel" 
              style={{
                position: 'absolute',
                top: 0, right: '10%',
                width: '60%', height: '70%',
                overflow: 'hidden',
                zIndex: 2,
                backgroundImage: 'url("https://images.unsplash.com/photo-1510620247073-952467d5cecb?auto=format&fit=crop&q=80&w=800")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
            />

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel" 
              style={{
                position: 'absolute',
                bottom: 0, left: '0',
                width: '65%', height: '65%',
                overflow: 'hidden',
                zIndex: 3,
                backgroundImage: 'url("https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '4px solid var(--bg-primary)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px' }}>
              At A2Z DYE Wala, we merge traditional craftsmanship with modern 3D design to bring your jewelry dreams to reality. Our artisans create pieces that are not just beautiful, but conceptually breathtaking.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginTop: '40px' }}>
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ 
                  background: 'rgba(44, 95, 45, 0.1)', 
                  padding: '15px', 
                  borderRadius: '12px',
                  color: 'var(--accent-primary)'
                }}>
                  <Gem size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Exquisite Materials</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Only the finest ethical diamonds and 18K pure gold are chosen for our collection.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ 
                  background: 'rgba(44, 95, 45, 0.1)', 
                  padding: '15px', 
                  borderRadius: '12px',
                  color: 'var(--accent-primary)'
                }}>
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Certified Quality</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Every piece undergoes strict quality and authenticity certification before reaching you.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ 
                  background: 'rgba(44, 95, 45, 0.1)', 
                  padding: '15px', 
                  borderRadius: '12px',
                  color: 'var(--accent-primary)'
                }}>
                  <Sparkles size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>3D Visualization</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Experience your custom designs in full 3D space before they are even forged.</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
