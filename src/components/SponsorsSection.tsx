
import { useState } from 'react';

interface Sponsor {
  name: string;
  logo: string;
  tier: 'diamond' | 'gold' | 'silver' | 'bronze';
}

// Replace these with real sponsor data when available
const sponsors: Sponsor[] = [
  {
    name: "Diamond Sponsor",
    logo: "/placeholder.svg",
    tier: "diamond"
  },
  {
    name: "Gold Sponsor",
    logo: "/placeholder.svg",
    tier: "gold"
  },
  {
    name: "Silver Sponsor",
    logo: "/placeholder.svg",
    tier: "silver"
  },
  {
    name: "Bronze Sponsor",
    logo: "/placeholder.svg",
    tier: "bronze"
  }
];

const SponsorsSection = () => {
  return (
    <section className="py-16 bg-[#fff6f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#8556f3] text-3xl md:text-4xl font-mario uppercase">Our Sponsors</h2>
          <p className="text-xl mt-4 font-racing text-gray-700">
            The power-ups behind our racing tracks!
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          <SponsorTier 
            title="💎 Diamond Tier" 
            tier="diamond"
            sponsors={sponsors.filter(sponsor => sponsor.tier === 'diamond')}
          />
          
          <SponsorTier 
            title="🥇 Gold Tier" 
            tier="gold"
            sponsors={sponsors.filter(sponsor => sponsor.tier === 'gold')}
          />
          
          <SponsorTier 
            title="🥈 Silver Tier" 
            tier="silver"
            sponsors={sponsors.filter(sponsor => sponsor.tier === 'silver')}
          />
          
          <SponsorTier 
            title="🥉 Bronze Tier" 
            tier="bronze"
            sponsors={sponsors.filter(sponsor => sponsor.tier === 'bronze')}
          />
        </div>

        <div className="text-center mt-12">
          <a href="/become-sponsor" className="bg-[#8556f3] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-mario">
            🚀 Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

interface SponsorTierProps {
  title: string;
  tier: 'diamond' | 'gold' | 'silver' | 'bronze';
  sponsors: Sponsor[];
}

const SponsorTier = ({ title, tier, sponsors }: SponsorTierProps) => {
  const getTierStyles = () => {
    switch(tier) {
      case 'diamond':
        return 'border-[#b0cefb]';
      case 'gold':
        return 'border-yellow-300';
      case 'silver':
        return 'border-gray-300';
      case 'bronze':
        return 'border-orange-200';
    }
  };

  const getLogoSize = () => {
    switch(tier) {
      case 'diamond':
        return 'w-48 h-48';
      case 'gold':
        return 'w-40 h-40';
      case 'silver':
        return 'w-32 h-32';
      case 'bronze':
        return 'w-24 h-24';
    }
  };

  return (
    <div className="text-center px-4">
      <h3 className="text-xl font-mario mb-4">{title}</h3>
      
      <div className="flex flex-wrap justify-center gap-6">
        {sponsors.map((sponsor, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg border-2 ${getTierStyles()} bg-white shadow-md transition-all hover:scale-105`}
          >
            <img 
              src={sponsor.logo} 
              alt={sponsor.name} 
              className={`${getLogoSize()} object-contain mx-auto mb-4`}
            />
            <p className="font-racing">{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
