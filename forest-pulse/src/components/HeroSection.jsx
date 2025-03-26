import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isTreeModalOpen, setIsTreeModalOpen] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    treeType: '',
    location: '',
    dedication: '',
    name: '',
    email: '',
    interests: []
  });
  
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleLoadedData = () => {
      setVideoLoaded(true);
      
      gsap.to(contentRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
      });

      gsap.from(textRef.current.children, {
        duration: 1.2,
        y: 40,
        opacity: 0,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.5
      });
    };

    const video = videoRef.current;
    video.addEventListener('loadeddata', handleLoadedData);

    return () => video.removeEventListener('loadeddata', handleLoadedData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return {
          ...prev,
          interests: prev.interests.filter(item => item !== interest)
        };
      } else {
        return {
          ...prev,
          interests: [...prev.interests, interest]
        };
      }
    });
  };

  const handleTreeSubmit = (e) => {
    e.preventDefault();
    console.log('Planting virtual tree:', formData);
    setIsTreeModalOpen(false);
    setFormData(prev => ({ ...prev, treeType: '', location: '', dedication: '' }));
  };

  const handleCommunitySubmit = (e) => {
    e.preventDefault();
    console.log('Joining community:', formData);
    setIsCommunityModalOpen(false);
    setFormData(prev => ({ ...prev, name: '', email: '', interests: [] }));
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center p-6 text-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="/forest.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute z-1 w-full h-full"
        style={{
          backgroundColor: "rgba(18, 18, 18, 0.7)",
          background: "linear-gradient(to bottom right, rgba(18, 18, 18, 0.9), rgba(30, 30, 30, 0.7))",
        }}
      />

      {/* Plant Tree Modal */}
      <AnimatePresence>
        {isTreeModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full max-w-md rounded-2xl p-8"
              style={{ backgroundColor: '#1E1E1E', border: '2px solid #32CD32' }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#32CD32' }}>
                Plant Your Virtual Tree
              </h3>
              <form onSubmit={handleTreeSubmit}>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block mb-2" style={{ color: '#EDEDED' }}>Tree Type</label>
                    <select
                      name="treeType"
                      value={formData.treeType}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg"
                      style={{ backgroundColor: '#121212', color: '#EDEDED', border: '1px solid #32CD32' }}
                      required
                    >
                      <option value="">Select a tree</option>
                      <option value="Oak">Oak</option>
                      <option value="Maple">Maple</option>
                      <option value="Pine">Pine</option>
                      <option value="Redwood">Redwood</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: '#EDEDED' }}>Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      className="w-full p-3 rounded-lg"
                      style={{ backgroundColor: '#121212', color: '#EDEDED', border: '1px solid #32CD32' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: '#EDEDED' }}>Dedication (Optional)</label>
                    <textarea
                      name="dedication"
                      value={formData.dedication}
                      onChange={handleInputChange}
                      placeholder="Dedicate this tree to someone special"
                      className="w-full p-3 rounded-lg"
                      style={{ backgroundColor: '#121212', color: '#EDEDED', border: '1px solid #32CD32', minHeight: '100px' }}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setIsTreeModalOpen(false)}
                    className="flex-1 py-3 rounded-lg font-bold"
                    style={{ 
                      backgroundColor: 'transparent',
                      color: '#32CD32',
                      border: '2px solid #32CD32'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-lg font-bold"
                    style={{ 
                      backgroundColor: '#32CD32',
                      color: '#121212'
                    }}
                  >
                    Plant Tree
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Join Community Modal */}
      <AnimatePresence>
        {isCommunityModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full max-w-md rounded-2xl p-8"
              style={{ backgroundColor: '#1E1E1E', border: '2px solid #32CD32' }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#32CD32' }}>
                Join Our Community
              </h3>
              <form onSubmit={handleCommunitySubmit}>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block mb-2" style={{ color: '#EDEDED' }}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full p-3 rounded-lg"
                      style={{ backgroundColor: '#121212', color: '#EDEDED', border: '1px solid #32CD32' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: '#EDEDED' }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full p-3 rounded-lg"
                      style={{ backgroundColor: '#121212', color: '#EDEDED', border: '1px solid #32CD32' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: '#EDEDED' }}>Your Interests</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Planting', 'Conservation', 'Education', 'Volunteering'].map((interest) => (
                        <button
                          type="button"
                          key={interest}
                          onClick={() => handleInterestToggle(interest)}
                          className={`py-2 px-3 rounded-lg text-sm ${formData.interests.includes(interest) ? 
                            'bg-green-500/20 text-green-500' : 'text-gray-400'}`}
                          style={{
                            border: '1px solid rgba(50, 205, 50, 0.3)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setIsCommunityModalOpen(false)}
                    className="flex-1 py-3 rounded-lg font-bold"
                    style={{ 
                      backgroundColor: 'transparent',
                      color: '#32CD32',
                      border: '2px solid #32CD32'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-lg font-bold"
                    style={{ 
                      backgroundColor: '#32CD32',
                      color: '#121212'
                    }}
                  >
                    Join Now
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full px-4 opacity-0"
      >
        <div className="space-y-8 w-full">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            ref={textRef}
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}
          >
            {["Join", "the", "Green", "Movement"].map((word, index) => (
              <span 
                key={index}
                style={{ 
                  display: 'inline-block',
                  color: '#32CD32'
                }}
              >
                {word}
              </span>
            ))}
          </h1>
          
          <p 
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed" 
            style={{ color: '#B0B0B0' }}
          >
            Plant trees, track your impact, and grow with our community.
          </p>

          <div className="flex gap-5 justify-center flex-wrap mt-10">
            <button
              onClick={() => setIsTreeModalOpen(true)}
              style={{
                fontWeight: 'bold',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#32CD32',
                color: '#121212',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  backgroundColor: '#2AC420',
                  y: -3,
                  boxShadow: '0 8px 20px rgba(50, 205, 50, 0.3)',
                  duration: 0.3
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  backgroundColor: '#32CD32',
                  y: 0,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  duration: 0.3
                });
              }}
            >
              <span style={{ marginRight: '0.5rem' }}>🌿</span>
              Plant a Virtual Tree
            </button>
            
            <button
              onClick={() => setIsCommunityModalOpen(true)}
              style={{
                fontWeight: 'bold',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: '2px solid #32CD32',
                color: '#32CD32',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  backgroundColor: '#32CD32',
                  color: '#121212',
                  y: -3,
                  boxShadow: '0 8px 20px rgba(50, 205, 50, 0.3)',
                  duration: 0.3
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  backgroundColor: 'transparent',
                  color: '#32CD32',
                  y: 0,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  duration: 0.3
                });
              }}
            >
              <span style={{ marginRight: '0.5rem' }}>🔗</span>
              Join Community
            </button>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {!videoLoaded && (
        <div 
          className="absolute z-30 w-full h-full flex items-center justify-center"
          style={{ backgroundColor: '#121212' }}
        >
          <div 
            style={{
              width: '50px',
              height: '50px',
              border: '4px solid #32CD32',
              borderRadius: '50%',
              borderTopColor: 'transparent',
              animation: 'spin 1s linear infinite'
            }}
          />
        </div>
      )}
    </section>
  );
}