
import { useState } from 'react';

interface PowerUp {
  name: string;
  icon: string;
  description: string;
}

const powerUps: PowerUp[] = [
  {
    name: "Code Kart Nitro",
    icon: "💡🔌",
    description: "Arduino & ESP32 coding for motors, sensors, gesture & wireless control"
  },
  {
    name: "Grip Master Tires",
    icon: "🔩🛞",
    description: "High-torque motor setups, traction techniques, and weight balancing for power bots"
  },
  {
    name: "WiFi Warp Drive",
    icon: "📶🚀",
    description: "Wireless control using Bluetooth, RF, or gesture interfaces"
  },
  {
    name: "Solder Banana",
    icon: "🍌🔥",
    description: "Circuit building, soldering motors, sensors, & power supply systems"
  },
  {
    name: "Sensor Seeker Shell",
    icon: "🐢👀",
    description: "IR/ultrasonic sensor integration for autonomous movement & obstacle handling"
  },
  {
    name: "Stratastar Badge",
    icon: "🧠🌟",
    description: "Design thinking, real-time problem solving & matchday strategy"
  }
];

const PowerUpsSection = () => {
  return (
    <section className="bg-[#1e1e42] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#9370ff] text-3xl md:text-4xl font-mario uppercase">POWER-UPS</h2>
          <p className="text-xl mt-4 font-racing">
            Skills & Tools You'll Learn
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-[#2d2d5d] rounded-xl p-6 shadow-xl">
            <p className="text-lg text-center max-w-3xl mx-auto">
              "This is no ordinary workshop. It's a hands-on, high-voltage engineering showdown! 
              Build bots, battle it out, and level up with every round. Choose your mission, 
              collect power-ups, and conquer the finale."
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-mario text-2xl mb-6 text-center text-[#ff9cff]">⚡ Power-Up Garage — Your Engineering Boosts</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {powerUps.map((powerUp, index) => (
            <PowerUpCard key={index} powerUp={powerUp} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PowerUpCard = ({ powerUp }: { powerUp: PowerUp }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-[#2d2d5d] rounded-lg p-6 
                 border border-[#433e7a] shadow-lg transition-all duration-300
                 ${isHovered ? 'transform -translate-y-2 shadow-xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-4">{powerUp.icon}</div>
      <h4 className="text-xl font-bold font-racing mb-3 text-[#ff9cff]">{powerUp.name}</h4>
      <p className={`transition-opacity duration-300 text-gray-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
        {powerUp.description}
      </p>
    </div>
  );
};

export default PowerUpsSection;
