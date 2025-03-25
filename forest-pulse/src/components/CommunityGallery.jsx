import React, { useState } from 'react';

const communityData = [
  {
    id: 1,
    username: "EcoWarrior22",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    treesPlanted: 42,
  },
  {
    id: 2,
    username: "GreenThumb",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    treesPlanted: 36,
  },
  {
    id: 3,
    username: "TreeHugger",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    treesPlanted: 29,
  },
  {
    id: 4,
    username: "PlanterPro",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    treesPlanted: 53,
  },
  {
    id: 5,
    username: "EcoChampion",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    treesPlanted: 47,
  },
];

export default function CommunityGallery() {
  const [sortBy, setSortBy] = useState('trees');
  const topContributors = [...communityData]
    .sort((a, b) => b.treesPlanted - a.treesPlanted)
    .slice(0, 5);

  const maxTrees = Math.max(...topContributors.map(user => user.treesPlanted));

  return (
    <section className="py-16" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#32CD32' }}>
          Community Impact
        </h2>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityData.slice(0, 3).map((item) => (
            <div 
              key={item.id}
              className="group relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#121212' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent z-10" />
              <img
                src={item.image}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-300"
                alt={`Tree planted by ${item.username}`}
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold" style={{ color: '#EDEDED' }}>
                    {item.username}
                  </h3>
                  <span
                    className="text-sm font-bold px-3 py-1 rounded-full backdrop-blur-sm"
                    style={{ 
                      backgroundColor: 'rgba(50, 205, 50, 0.2)', 
                      color: '#32CD32',
                      border: '1px solid rgba(50, 205, 50, 0.5)'
                    }}
                  >
                    {item.treesPlanted} trees
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm" style={{ color: '#B0B0B0' }}>
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Leaderboard */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold" style={{ color: '#32CD32' }}>
              🏆 Leaderboard
            </h3>
            <div className="flex gap-4">
              <button
                onClick={() => setSortBy('trees')}
                className={`px-4 py-2 rounded-full text-sm ${
                  sortBy === 'trees' ? 'bg-green-500/20 text-green-500' : 'text-gray-400'
                }`}
                style={{
                  border: '1px solid rgba(50, 205, 50, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                Sort by Trees
              </button>
              <button
                onClick={() => setSortBy('name')}
                className={`px-4 py-2 rounded-full text-sm ${
                  sortBy === 'name' ? 'bg-green-500/20 text-green-500' : 'text-gray-400'
                }`}
                style={{
                  border: '1px solid rgba(50, 205, 50, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                Sort by Name
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {topContributors.map((user, index) => (
              <div 
                key={user.id}
                className="group relative p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-dark/50"
                style={{
                  backgroundColor: 'rgba(18, 18, 18, 0.3)',
                  border: '1px solid rgba(50, 205, 50, 0.1)'
                }}
              >
                <div className="flex items-center justify-between">
                  {/* Rank & Profile */}
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                        style={{
                          backgroundColor: 
                            index === 0 ? 'rgba(255, 215, 0, 0.15)' :
                            index === 1 ? 'rgba(192, 192, 192, 0.15)' :
                            index === 2 ? 'rgba(205, 127, 50, 0.15)' : 'rgba(50, 205, 50, 0.1)',
                          color: '#32CD32',
                          border: `2px solid ${
                            index === 0 ? '#FFD700' :
                            index === 1 ? '#C0C0C0' :
                            index === 2 ? '#CD7F32' : '#32CD32'
                          }`
                        }}
                      >
                        {index + 1}
                        {index < 3 && (
                          <div className="absolute -top-2 -right-2">
                            {index === 0 && '👑'}
                            {index === 1 && '🥈'}
                            {index === 2 && '🥉'}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <img 
                        src={user.image} 
                        alt={user.username}
                        className="w-14 h-14 rounded-full object-cover border-2"
                        style={{ borderColor: '#32CD32' }}
                      />
                      <div>
                        <h4 className="font-semibold" style={{ color: '#EDEDED' }}>
                          {user.username}
                        </h4>
                        <p className="text-sm" style={{ color: '#B0B0B0' }}>
                          {user.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress & Count */}
                  <div className="flex items-center gap-6">
                    <div className="w-32 hidden md:block">
                      <div className="h-2 rounded-full bg-dark/50 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${(user.treesPlanted / maxTrees) * 100}%`,
                            backgroundColor: '#32CD32'
                          }}
                        />
                      </div>
                    </div>
                    
                    <div 
                      className="px-4 py-2 rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: 'rgba(50, 205, 50, 0.1)',
                        color: '#32CD32'
                      }}
                    >
                      {user.treesPlanted} 🌳
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}