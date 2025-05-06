
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
        style={{ backgroundImage: 'url("/lovable-uploads/21a63c10-e17f-4c07-a561-ad5eeb85c0f9.png")' }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20 text-center py-16 flex flex-col items-center">
        <CountdownTimer targetDate={eventDate} />
        
        <h1 className="text-black text-3xl md:text-5xl lg:text-7xl font-bold font-mario mb-6 uppercase mt-8">
          Summer of Projects
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a 
            href="https://unstop.com" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#ff3e3e] text-white px-6 py-2 rounded-lg hover:brightness-110 transition-all font-mario"
          >
            REGISTER NOW 
            <ArrowRight className="inline ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
