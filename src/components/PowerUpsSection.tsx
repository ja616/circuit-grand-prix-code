
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
    <section className="mk-section bg-gradient-to-br from-gray-900 to-mk-purple-dark text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="mb-2">🔋</div>
          <h2 className="mk-title text-3xl md:text-4xl lg:text-5xl font-bold">POWER-UPS</h2>
          <p className="text-xl mt-4 font-racing">
            Skills & Tools You'll Learn
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-xl">
            <h3 className="font-mario text-2xl mb-4 text-center">🎮 Welcome to the Race</h3>
            <p className="text-lg text-center max-w-3xl mx-auto">
              "This is no ordinary workshop. It's a hands-on, high-voltage engineering showdown! 
              Build bots, battle it out, and level up with every round. Choose your mission, 
              collect power-ups, and conquer the finale."
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-racing text-2xl mb-6 text-center">⚡ Power-Up Garage — Your Engineering Boosts</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      className={`bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-xl p-6 
                 border-2 border-white/20 shadow-lg transition-all duration-300
                 ${isHovered ? 'transform -translate-y-2 shadow-xl border-mk-red/50' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-4">{powerUp.icon}</div>
      <h4 className="text-xl font-bold font-racing mb-3">{powerUp.name}</h4>
      <p className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
        {powerUp.description}
      </p>
    </div>
  );
};

export default PowerUpsSection;
