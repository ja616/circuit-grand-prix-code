import CountdownTimer from './CountdownTimer';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  const eventDate = '2025-05-17T09:00:00';

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/e773b7dc-1c82-463d-be0d-13a43cc2ef67.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'top'  // Keeps top aligned but uses full height
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center py-6 flex flex-col items-center">
        {/* Even smaller heading */}
        <h1 className="text-white text-lg md:text-2xl lg:text-4xl font-mario mb-3 text-shadow-mario">
          START YOUR ENGINES!
        </h1>

        <div className="my-3 scale-90">
          <CountdownTimer targetDate={eventDate} />
        </div>

        {/* Buttons slightly higher */}
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
