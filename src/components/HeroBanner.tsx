
import CountdownTimer from './CountdownTimer';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  // Set this to your event date
  const eventDate = '2025-05-17T09:00:00';

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with the uploaded Mario theme image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: 'url("/lovable-uploads/d1c539da-d799-4e85-b9fb-ae156d444cbb.png")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-mk-purple/70 to-mk-red/70 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center py-16">
        <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold mb-6 font-mario">
          SOP Robotics & IoT Track 2025
        </h1>
        
        <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-racing">
          Start your engines! Welcome to the future of technology with tug-of-war bots, 
          underwater bots, and wild workshops!
        </p>
        
        <CountdownTimer targetDate={eventDate} />
        
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a 
            href="https://unstop.com" 
            target="_blank" 
            rel="noreferrer"
            className="mk-btn group text-lg"
          >
            REGISTER NOW 
            <ArrowRight className="inline ml-2 group-hover:animate-move-right" size={20} />
          </a>
          <a 
            href="/brochure" 
            className="font-racing bg-transparent hover:bg-white/20 text-white rounded-full 
                     px-6 py-2 transition-all shadow-lg hover:shadow-xl transform 
                     hover:scale-105 border-2 border-white text-lg"
          >
            ABOUT
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
