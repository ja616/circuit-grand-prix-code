import CountdownTimer from './CountdownTimer';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  const eventDate = '2025-05-17T09:00:00';

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - adjusted */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/Screenshot_235246.png")',
          backgroundSize: 'cover',
          backgroundPosition: '50% 40%'  // Moves image up slightly
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content moved right using margin-left */}
      <div className="container mx-auto px-4 relative z-20 text-center py-6 flex flex-col items-center -mt-40 ml-30">
        <h1 className="text-white text-base md:text-xl lg:text-3xl font-mario mb-3 text-shadow-mario">
          START YOUR ENGINES!
        </h1>

        <div className="my-2 scale-90">
          <CountdownTimer targetDate={eventDate} />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-3">
          <a 
            href="https://unstop.com" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#ff3e3e] text-white px-5 py-2.5 rounded-lg hover:brightness-110 transition-all font-bold text-base"
          >
            REGISTER NOW 
            <ArrowRight className="inline ml-2" size={18} />
          </a>
          
          <a 
            href="https://docs.google.com/document/d/your-brochure-id" 
            target="_blank" 
            rel="noreferrer"
            className="bg-white text-[#8e44ad] px-5 py-2.5 rounded-lg hover:brightness-95 transition-all font-bold text-base"
          >
            ABOUT
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

