
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#8e44ad] to-[#ff3e3e] text-white sticky top-0 z-50 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/275d2a89-16d4-4c5f-81d6-c0b6f9f1f9e7.png" 
              alt="SOP Logo" 
              className="h-12"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center ml-auto space-x-8">
            <a href="#" onClick={(e) => {e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'})}} className="font-mario text-white hover:text-yellow-200 transition-colors text-lg text-shadow-mario">HOME</a>
            <a href="#mission" onClick={(e) => {e.preventDefault(); document.getElementById('mission')?.scrollIntoView({behavior: 'smooth'})}} className="font-mario text-white hover:text-yellow-200 transition-colors text-lg text-shadow-mario">MISSION</a>
            <a href="#powerups" onClick={(e) => {e.preventDefault(); document.getElementById('powerups')?.scrollIntoView({behavior: 'smooth'})}} className="font-mario text-white hover:text-yellow-200 transition-colors text-lg text-shadow-mario">POWERUPS</a>
            <a href="#schedule" onClick={(e) => {e.preventDefault(); document.getElementById('schedule')?.scrollIntoView({behavior: 'smooth'})}} className="font-mario text-white hover:text-yellow-200 transition-colors text-lg text-shadow-mario">SCHEDULE</a>
            <a href="#leaderboard" onClick={(e) => {e.preventDefault(); document.getElementById('leaderboard')?.scrollIntoView({behavior: 'smooth'})}} className="font-mario text-white hover:text-yellow-200 transition-colors text-lg text-shadow-mario">LEADERBOARD</a>
            <Link to="/highlights" className="font-mario text-white hover:text-yellow-200 transition-colors text-lg text-shadow-mario">HIGHLIGHTS</Link>
            <a 
              href="https://unstop.com" 
              target="_blank" 
              rel="noreferrer"
              className="font-mario bg-white text-[#ff3e3e] px-4 py-2 rounded-lg hover:bg-yellow-200 transition-colors text-lg font-bold"
            >
              REGISTER NOW
            </a>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 bg-[#8e44ad] rounded-b-lg">
            <div className="flex flex-col space-y-4 items-center">
              <a href="#" onClick={(e) => {e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); setIsOpen(false);}} className="font-mario text-white hover:text-yellow-200 w-full text-center py-2 text-shadow-mario">HOME</a>
              <a href="#mission" onClick={(e) => {e.preventDefault(); document.getElementById('mission')?.scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}} className="font-mario text-white hover:text-yellow-200 w-full text-center py-2 text-shadow-mario">MISSION</a>
              <a href="#powerups" onClick={(e) => {e.preventDefault(); document.getElementById('powerups')?.scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}} className="font-mario text-white hover:text-yellow-200 w-full text-center py-2 text-shadow-mario">POWERUPS</a>
              <a href="#schedule" onClick={(e) => {e.preventDefault(); document.getElementById('schedule')?.scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}} className="font-mario text-white hover:text-yellow-200 w-full text-center py-2 text-shadow-mario">SCHEDULE</a>
              <a href="#leaderboard" onClick={(e) => {e.preventDefault(); document.getElementById('leaderboard')?.scrollIntoView({behavior: 'smooth'}); setIsOpen(false);}} className="font-mario text-white hover:text-yellow-200 w-full text-center py-2 text-shadow-mario">LEADERBOARD</a>
              <Link to="/highlights" onClick={() => setIsOpen(false)} className="font-mario text-white hover:text-yellow-200 w-full text-center py-2 text-shadow-mario">HIGHLIGHTS</Link>
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noreferrer"
                className="font-mario bg-white text-[#ff3e3e] px-6 py-2 rounded-lg hover:bg-yellow-200 transition-colors mb-2"
                onClick={() => setIsOpen(false)}
              >
                REGISTER NOW
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
