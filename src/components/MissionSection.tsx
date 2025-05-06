
import { CircleCheck } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-16 bg-[#f5e6ff] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#d33fa6] text-3xl md:text-4xl font-mario uppercase">Mission Mode: Robotics<br/>Grand Tour</h2>
          <p className="text-lg mt-4 font-racing text-gray-700">
            "Make your bot. Complete the missions. Unlock every skill. Become the ultimate Robotics Grandmaster!"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionCard 
            title="Gesture-Controlled RC Car Build"
            tagline="Control with a flick. Zoom with precision."
            iconEmoji="🚗"
            description="Learn motor and sensor integration to build a gesture-controlled RC car. Assemble hardware, write control code, and race wirelessly."
            skills={["Code Kart Nitro", "WiFi Warp Drive", "Solder Banana"]}
          />
          
          <MissionCard 
            title="RoboSoccer – Autonomous League"
            tagline="No drivers. Just brains."
            iconEmoji="⚽"
            description="Build autonomous soccer bots to score on a custom field. Program them to sense, track, and shoot — all without human control. Compete in RoboSoccer League matches."
            skills={["Sensor Seeker Shell", "Code Kart Nitro", "Stratastar Badge"]}
          />
          
          <MissionCard 
            title="Tug-of-War Bot – GRAND FINALE"
            tagline="Power. Traction. Total domination."
            iconEmoji="🏁"
            description="Design high-torque bots for raw strength battles. Optimize motor power, traction grip, and weight distribution to overpower opponents in the ultimate Tug of War showdown."
            skills={["Grip Master Tires", "Solder Banana", "Stratastar Badge"]}
          />
        </div>
      </div>
    </section>
  );
};

interface MissionCardProps {
  title: string;
  tagline: string;
  iconEmoji: string;
  description: string;
  skills: string[];
}

const MissionCard = ({ 
  title, 
  tagline, 
  iconEmoji, 
  description, 
  skills
}: MissionCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200 flex flex-col justify-between">
      <div>
        <div className="text-4xl mb-4">{iconEmoji}</div>
        <h3 className="text-xl font-bold text-[#d33fa6] mb-2">{title}</h3>
        <p className="italic text-lg mb-4">"{tagline}"</p>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm uppercase font-bold text-gray-500 mb-2">Skills Earned:</h4>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <CircleCheck size={18} className="text-[#d33fa6] mr-2" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
