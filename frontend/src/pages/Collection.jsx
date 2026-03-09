import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Mock Data targeting exactly 5 items
const collectionItems = [
  {
    id: 1,
    name: "Radiant Diamond Halo",
    category: "Rings",
    price: "$4,500",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Golden Infinity Pendant",
    category: "Necklaces",
    price: "$2,800",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Sapphire Drop Earrings",
    category: "Earrings",
    price: "$3,200",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Emerald Cut Signet",
    category: "Rings",
    price: "$5,100",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Classic Tennis Bracelet",
    category: "Bracelets",
    price: "$6,500",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800"
  }
];

const Collection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="dancing-script" style={{ 
            fontSize: 'clamp(36px, 5vw, 54px)', 
            color: 'var(--text-primary)',
            marginBottom: '15px'
          }}>
            The Masterpiece Collection
          </h1>
          <p style={{ 
            color: 'var(--text-secondary)', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '16px',
            fontFamily: 'Playfair Display',
            fontStyle: 'italic'
          }}>
            A curated selection of our finest 5 jewelry pieces, demonstrating the pinnacle of our 3D design and craftsmanship.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '30px',
          justifyContent: 'center'
        }}>
          {collectionItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px 0 rgba(0, 0, 0, 0.05)';
              }}
            >
              <div style={{ 
                height: '280px', 
                overflow: 'hidden', 
                position: 'relative' 
              }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="collection-img"
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'var(--bg-secondary)',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'var(--accent-primary)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  {item.category}
                </div>
              </div>
              
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px', fontFamily: 'Inter', fontWeight: '600' }}>
                    {item.name}
                  </h3>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: '16px', marginBottom: '20px' }}>
                    {item.price}
                  </p>
                </div>
                
                <button className="btn btn-outline" style={{ width: '100%', padding: '10px 0', fontSize: '14px' }}>
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collection;
