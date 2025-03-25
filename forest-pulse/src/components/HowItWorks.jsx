import React from 'react';

export default function HowItWorks() {
  const features = [
    {
      icon: "🌱",
      title: "Plant With Purpose",
      description: "Join our global network of planting events or start your own green initiative locally. We provide resources for both individual and group planting.",
      subpoints: [
        "Find local planting events",
        "Request saplings & tools",
        "Track your planting history"
      ],
      visual: "./plant.png", 
    },
    {
      icon: "📲",
      title: "Track & Monitor",
      description: "Document your environmental impact through our intuitive platform. Get real-time insights and detailed analytics about your contributions.",
      subpoints: [
        "AI-powered growth tracking",
        "CO2 impact calculator",
        "Personal achievement milestones"
      ],
      visual: "./impact.png",
    },
    {
      icon: "📢",
      title: "Share & Inspire",
      description: "Amplify your impact by sharing progress with your network. Earn badges and compete in friendly challenges.",
      subpoints: [
        "Social media integration",
        "Community leaderboards",
        "Custom shareable templates"
      ],
      visual: "./earth.png",
    },
  ];

  return (
    <section className="min-h-screen relative py-20" style={{ backgroundColor: '#121212' }}>
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <header className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#32CD32' }}>
              Cultivate Change
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto" style={{ color: '#B0B0B0' }}>
              Transform your environmental impact through our three-pillar approach
            </p>
          </header>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
                style={{ minHeight: '60vh' }}
              >
                <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div 
                    className="p-8 rounded-2xl transition-all duration-300 hover:border-green-500"
                    style={{ 
                      backgroundColor: '#1E1E1E',
                      border: '2px solid rgba(50, 205, 50, 0.2)'
                    }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl"
                        style={{ 
                          backgroundColor: 'rgba(50, 205, 50, 0.1)',
                          border: '2px solid #32CD32'
                        }}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-3xl font-bold" style={{ color: '#EDEDED' }}>
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg mb-6" style={{ color: '#B0B0B0' }}>
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {feature.subpoints.map((point, i) => (
                        <li 
                          key={i}
                          className="flex items-center gap-3 text-lg"
                          style={{ color: '#B0B0B0' }}
                        >
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#32CD32' }} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} h-full`}>
                  <img 
                    src={feature.visual}
                    className="w-full h-96 object-cover rounded-2xl"
                    style={{ 
                      border: '2px solid rgba(50, 205, 50, 0.2)',
                      backgroundColor: '#1E1E1E'
                    }}
                    alt={feature.title}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <button 
              className="px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105"
              style={{
                backgroundColor: '#32CD32',
                color: '#121212',
                border: '2px solid rgba(50, 205, 50, 0.5)'
              }}
            >
              Start Your Green Journey →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}