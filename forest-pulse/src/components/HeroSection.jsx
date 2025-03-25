import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Video load handler
    const handleLoadedData = () => {
      setVideoLoaded(true);
      
      // Animate content fade in
      gsap.to(contentRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
      });

      // Text animation
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