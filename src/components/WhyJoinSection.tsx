
import { CircleCheck } from 'lucide-react';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: "🛠",
    title: "Build Real Bots",
    description: "From pulling champions to underwater explorers — you'll design, wire, code, and conquer."
  },
  {
    icon: "📚",
    title: "Skill Power-Ups",
    description: "Level up with workshops that boost your game: microcontrollers, wireless tech, waterproofing, and more."
  },
  {
    icon: "🧠",
    title: "Think Like an Engineer",
    description: "Master planning, testing, strategy — not just what works, but why it works."
  },
  {
    icon: "🏅",
    title: "Compete, Collaborate, Conquer",
    description: "Team up, test your bot in epic showdowns, and rise through leaderboards."
  },
  {
    icon: "🎁",
    title: "Unlock Rewards & Industry Outings",
    description: "Top teams get exclusive goodies, mentorship, and a victory lap with our sponsor industry visit!"
  },
  {
    icon: "💫",
    title: "Noobs to Ninjas Welcome",
    description: "Whether you're new to robotics or a battle-hardened builder, there's a challenge with your name on it."
  }
];

const WhyJoinSection = () => {
  return (
    <section className="mk-section bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="mb-2">🚀</div>
          <h2 className="mk-title text-3xl md:text-4xl lg:text-5xl font-bold">Why Join the Robotics Grand Prix?</h2>
          <p className="text-xl mt-4 font-racing text-gray-700">
            Not just a competition — it's an adventure through circuits, sensors, and serious swag!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} />
          ))}
        </div>

        <div className="text-center mt-12 bg-mk-red/10 p-8 rounded-xl border border-mk-red/30">
          <h3 className="text-2xl font-bold font-racing text-mk-red mb-2">🎉 It's Fun. Period.</h3>
          <p className="text-xl">
            Think Mario Kart meets Robo Wars — with real friends, real robots, and real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

const ReasonCard = ({ reason }: { reason: Reason }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all border-l-4 border-mk-purple">
      <div className="text-3xl mb-4">{reason.icon}</div>
      <h3 className="text-xl font-bold font-racing text-mk-purple-dark mb-2">{reason.title}</h3>
      <p className="text-gray-700">{reason.description}</p>
    </div>
  );
};

export default WhyJoinSection;
