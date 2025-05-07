import CountdownTimer from './CountdownTimer';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  const eventDate = '2025-05-17T09:00:00';

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with uploaded image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/e773b7dc-1c82-463d-be0d-13a43cc2ef67.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top'  // Shift background image up
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center py-8 md:py-12 flex flex-col items-center">
        {/* Smaller heading */}
        <h1 className="text-white text-xl md:text-3xl lg:text-5xl font-mario mb-4 text-shadow-mario">
          START YOUR ENGINES!
        </h1>
        
        <div className="my-4 scale-90">
          <CountdownTimer targetDate={eventDate} />
        </div>
        
        {/* Buttons moved up by reducing mt */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a 
            href="https://unstop.com" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#ff3e3e] text-white px-6 py-3 rounded-lg hover:brightness-110 transition-all font-bold text-lg"
          >
            REGISTER NOW 
            <ArrowRight className="inline ml-2" size={20} />
          </a>
          
          <a 
            href="https://docs.google.com/document/d/your-brochure-id" 
            target="_blank" 
            rel="noreferrer"
            className="bg-white text-[#8e44ad] px-6 py-3 rounded-lg hover:brightness-95 transition-all font-bold text-lg"
          >
            ABOUT
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
