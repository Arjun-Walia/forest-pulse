import React from 'react';

export default function HowItWorks() {
  const steps = [
    { icon: "🌱", title: "Plant a Tree", desc: "Join events or plant in your backyard." },
    { icon: "📲", title: "Log It", desc: "Track your impact on Forest Pulse." },
    { icon: "📢", title: "Share", desc: "Inspire others on social media." },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#32CD32' }}>
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg"
              style={{ backgroundColor: '#121212', borderLeft: '4px solid #32CD32' }}
            >
              <span className="text-4xl block mb-3" style={{ color: '#32CD32' }}>
                {step.icon}
              </span>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: '#EDEDED' }}>
                {step.title}
              </h3>
              <p style={{ color: '#B0B0B0' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
