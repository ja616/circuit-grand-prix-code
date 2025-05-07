
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
          backgroundImage: 'url("/lovable-uploads/5298c8e0-4e0b-4332-a41c-fff8e30c96f3.png")',
          backgroundPosition: 'center'
        }}
      >
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center py-16 flex flex-col items-center">
        <div className="absolute right-0 max-w-xs md:max-w-sm lg:max-w-md">
          {/* Character image would go here if needed */}
        </div>
        
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-mario italic mb-6">
            Start your engines! Welcome to the future of technology
          </h1>
          
          <div className="my-8">
            <CountdownTimer targetDate={eventDate} />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="https://unstop.com" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#ff3e3e] text-white px-8 py-3 rounded-full hover:brightness-110 transition-all font-mario text-lg flex items-center"
            >
              REGISTER NOW 
              <ArrowRight className="inline ml-2" size={20} />
            </a>
            
            <a 
              href="https://docs.google.com/document/d/your-brochure-id" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-[#8e44ad] px-8 py-3 rounded-full hover:brightness-95 transition-all font-mario text-lg"
            >
              ABOUT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
