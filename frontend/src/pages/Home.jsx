import { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutSec from '../components/AboutSec';
import ContactUs from '../components/ContactUs';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      <Hero />
      <AboutSec />
      <ContactUs />
    </div>
  );
};

export default Home;
