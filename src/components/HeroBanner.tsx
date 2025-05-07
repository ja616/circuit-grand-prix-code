
import CountdownTimer from './CountdownTimer';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  // Set this to your event date
  const eventDate = '2025-05-17T09:00:00';

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with uploaded image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/e773b7dc-1c82-463d-be0d-13a43cc2ef67.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center py-16 flex flex-col items-center">
        <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-mario mb-6 text-shadow-mario">
          START YOUR ENGINES!
        </h1>
        
        <div className="my-6 scale-75 md:scale-90">
          <CountdownTimer targetDate={eventDate} />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
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
