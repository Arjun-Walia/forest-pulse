import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const ecoSteps = [
  { title: "Plant a Tree IRL", icon: "🌱", description: "Join local events or plant in your backyard." },
  { title: "Log It on Forest Pulse", icon: "📲", description: "Track your impact with our simple form." },
  { title: "Share & Inspire", icon: "📢", description: "Spread the word on social media." },
];

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  const scrollContainer = useRef();

  useGSAP(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    gsap.utils.toArray('.eco-step').forEach((step, index) => {
      gsap.fromTo(step, 
        { x: index % 2 === 0 ? -150 : 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
            markers: false,
          }
        }
      );
    });

    gsap.fromTo('.impact-stat', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.impact-stats-section',
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
          markers: false, 
        }
      }
    );

    ScrollTrigger.refresh();

  }, { scope: scrollContainer });

  return (
    <div style={{ backgroundColor: '#121212', color: '#EDEDED' }}>
      <div ref={scrollContainer} className="py-12">
        <div className="space-y-16 mb-16">
          {ecoSteps.map((step, index) => (
            <div
              key={index}
              className="eco-step p-6 rounded-lg shadow-lg max-w-md mx-auto"
              style={{ backgroundColor: '#1E1E1E', borderLeft: '4px solid #32CD32' }}
            >
              <span className="text-4xl block mb-3" style={{ color: '#32CD32' }}>
                {step.icon}
              </span>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: '#EDEDED' }}>
                {step.title}
              </h3>
              <p style={{ color: '#B0B0B0' }}>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="impact-stats-section text-center py-12" style={{ backgroundColor: '#121212' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#32CD32' }}>
            Our Collective Impact
          </h2>
          <div className="flex justify-center gap-8">
            <div className="impact-stat">
              <div className="text-5xl font-bold mb-2" style={{ color: '#32CD32' }}>
                12,459
              </div>
              <p style={{ color: '#B0B0B0' }}>Trees Planted</p>
            </div>
            <div className="impact-stat">
              <div className="text-5xl font-bold mb-2" style={{ color: '#00CED1' }}>
                284K+
              </div>
              <p style={{ color: '#B0B0B0' }}>KG of CO₂ Captured</p>
            </div>
            <div className="impact-stat">
              <div className="text-5xl font-bold mb-2" style={{ color: '#32CD32' }}>
                3,200+
              </div>
              <p style={{ color: '#B0B0B0' }}>Community Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
