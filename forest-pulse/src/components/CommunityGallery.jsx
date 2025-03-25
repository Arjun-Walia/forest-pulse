import React from 'react';

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
  const topContributors = [...communityData]
    .sort((a, b) => b.treesPlanted - a.treesPlanted)
    .slice(0, 5);

  return (
    <section className="py-16" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#32CD32' }}>
          Community Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityData.slice(0, 3).map((item) => (
            <div 
              key={item.id}
              className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: '#121212' }}
            >
              <img
                src={item.image}
                className="w-full h-48 object-cover"
                alt={`Tree planted by ${item.username}`}
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold" style={{ color: '#EDEDED' }}>
                    {item.username}
                  </h3>
                  <span
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#32CD32', color: '#121212' }}
                  >
                    {item.treesPlanted} trees
                  </span>
                </div>
                <p style={{ color: '#B0B0B0' }}>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#32CD32' }}>
            🌿 Top Contributors
          </h3>
          <div className="rounded-lg overflow-hidden" style={{ backgroundColor: '#121212' }}>
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: '#1A1A1A' }}>
                  <th className="py-3 px-4 text-left" style={{ color: '#32CD32' }}>Rank</th>
                  <th className="py-3 px-4 text-left" style={{ color: '#32CD32' }}>Username</th>
                  <th className="py-3 px-4 text-right" style={{ color: '#32CD32' }}>Trees Planted</th>
                </tr>
              </thead>
              <tbody>
                {topContributors.map((user, index) => (
                  <tr key={user.id} className="border-b" style={{ borderColor: '#1E1E1E' }}>
                    <td className="py-4 px-4" style={{ color: '#EDEDED' }}>
                      <span className={`inline-block w-8 h-8 rounded-full flex items-center justify-center 
                        ${index < 3 ? 'font-bold' : ''}`}
                        style={{ 
                          backgroundColor: index === 0 ? '#FFD700' : 
                                         index === 1 ? '#C0C0C0' : 
                                         index === 2 ? '#CD7F32' : 'transparent',
                          color: index < 3 ? '#121212' : '#EDEDED'
                        }}>
                        {index + 1}
                      </span>
                    </td>
                    <td className="py-4 px-4" style={{ color: '#EDEDED' }}>
                      <div className="flex items-center">
                        <img 
                          src={user.image} 
                          alt={user.username}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        {user.username}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right" style={{ color: '#32CD32' }}>
                      {user.treesPlanted}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}