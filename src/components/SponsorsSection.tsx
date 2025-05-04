
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
    <section className="mk-section bg-gradient-to-br from-mk-purple/10 to-mk-red/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="mb-2">🏆</div>
          <h2 className="mk-title text-3xl md:text-4xl lg:text-5xl font-bold">Our Sponsors</h2>
          <p className="text-xl mt-4 font-racing text-gray-700">
            The power-ups behind our racing tracks!
          </p>
        </div>

        <div className="space-y-12">
          <SponsorTier 
            title="💎 Diamond Tier – Ultimate Boosters" 
            tier="diamond"
            sponsors={sponsors.filter(sponsor => sponsor.tier === 'diamond')}
          />
          
          <SponsorTier 
            title="🥇 Gold Tier – Turbo Supporters" 
            tier="gold"
            sponsors={sponsors.filter(sponsor => sponsor.tier === 'gold')}
          />
          
          <SponsorTier 
            title="🥈 Silver Tier – Speed Enhancers" 
            tier="silver"
            sponsors={sponsors.filter(sponsor => sponsor.tier === 'silver')}
          />
          
          <SponsorTier 
            title="🥉 Bronze Tier – Builders in the Shadows" 
            tier="bronze"
            sponsors={sponsors.filter(sponsor => sponsor.tier === 'bronze')}
          />
        </div>

        <div className="text-center mt-12">
          <a href="/become-sponsor" className="mk-btn">
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
        return 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.7)] border-white';
      case 'gold':
        return 'bg-yellow-50 shadow-[0_0_15px_rgba(234,179,8,0.5)] border-yellow-300';
      case 'silver':
        return 'bg-gray-50 shadow-[0_0_10px_rgba(148,163,184,0.5)] border-gray-300';
      case 'bronze':
        return 'bg-orange-50 shadow-[0_0_5px_rgba(180,83,9,0.4)] border-orange-200';
    }
  };

  const getLogoSize = () => {
    switch(tier) {
      case 'diamond':
        return 'w-64 h-64';
      case 'gold':
        return 'w-48 h-48';
      case 'silver':
        return 'w-40 h-40';
      case 'bronze':
        return 'w-32 h-32';
    }
  };

  return (
    <div className="text-center">
      <h3 className="text-2xl font-racing mb-6">{title}</h3>
      
      <div className="flex flex-wrap justify-center gap-8">
        {sponsors.map((sponsor, index) => (
          <div 
            key={index}
            className={`p-6 rounded-xl border-2 ${getTierStyles()} transition-all hover:scale-105`}
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
