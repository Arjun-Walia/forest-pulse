import React from 'react';
import HeroSection from './components/HeroSection';
import ScrollEffects from './components/ScrollEffects';
import HowItWorks from './components/HowItWorks';
import CommunityGallery from './components/CommunityGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#121212',
      color: '#EDEDED',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      <HeroSection />
      <ScrollEffects />
      <HowItWorks />
      <CommunityGallery />
      <Footer />
    </div>
  );
}

export default App;