
import { Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardEntry {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const leaderboardEntries: LeaderboardEntry[] = [
  {
    title: "RC Champion",
    description: "Fastest gesture-controlled bot",
    icon: <Trophy className="w-8 h-8 text-yellow-400" />
  },
  {
    title: "RoboSoccer MVP",
    description: "Best autonomous play + highest goals",
    icon: <Award className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Tug Titan (Finale)",
    description: "Winner of Tug-of-War bot faceoff",
    icon: <Trophy className="w-8 h-8 text-red-500" />
  },
  {
    title: "Power-Up Collector",
    description: "Most badges earned from workshops",
    icon: <Medal className="w-8 h-8 text-purple-500" />
  },
  {
    title: "Circuit Commander",
    description: "Cleanest soldering + best circuit debug",
    icon: <Award className="w-8 h-8 text-green-500" />
  },
  {
    title: "Strategy Star",
    description: "Most creative design adaptations",
    icon: <Medal className="w-8 h-8 text-orange-500" />
  }
];

const LeaderboardSection = () => {
  return (
    <section id="leaderboard" className="mk-section bg-gradient-to-br from-mk-purple/10 to-mk-red/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="mb-2">🏆</div>
          <h2 className="mk-title text-3xl md:text-4xl lg:text-5xl font-bold">Leaderboard Titles</h2>
          <p className="text-xl mt-4 font-racing text-gray-700">
            Race to the top! Claim your championship title and eternal bot glory!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaderboardEntries.map((entry, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-mk-purple 
                       hover:shadow-xl hover:border-mk-red transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {entry.icon}
                <h3 className="ml-3 text-xl font-bold font-racing text-mk-purple-dark">{entry.title}</h3>
              </div>
              <p className="text-gray-700">{entry.description}</p>
              
              {/* Animated slot indicator */}
              <div className="mt-4 flex items-center">
                <span className="text-gray-500 mr-2">Current Leader:</span>
                <span className="font-bold animate-pulse">???</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <div className="mk-badge">Coming Soon</div>
          <p className="mt-4 text-gray-700">
            The race is on! Leaderboard will update throughout the competition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
