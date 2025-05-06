
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#8e44ad] to-[#ff3e3e] text-white sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2 px-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/275d2a89-16d4-4c5f-81d6-c0b6f9f1f9e7.png" 
              alt="SOP Logo" 
              className="h-10"
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
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="font-mario text-white hover:text-yellow-200 transition-colors">HOME</Link>
            <Link to="/schedule" className="font-mario text-white hover:text-yellow-200 transition-colors">SCHEDULE</Link>
            <Link to="/mission" className="font-mario text-white hover:text-yellow-200 transition-colors">MISSION</Link>
            <Link to="/leaderboard" className="font-mario text-white hover:text-yellow-200 transition-colors">LEADERBOARD</Link>
            <Link to="/highlights" className="font-mario text-white hover:text-yellow-200 transition-colors">HIGHLIGHTS</Link>
            <Link to="/crew" className="font-mario text-white hover:text-yellow-200 transition-colors">CREW</Link>
            <a 
              href="https://unstop.com" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-[#ff3e3e] px-4 py-1 rounded-lg hover:bg-yellow-200 transition-colors font-mario"
            >
              REGISTER NOW
            </a>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 bg-[#8e44ad] rounded-b-lg">
            <div className="flex flex-col space-y-4 items-center">
              <Link to="/" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>HOME</Link>
              <Link to="/schedule" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>SCHEDULE</Link>
              <Link to="/mission" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>MISSION</Link>
              <Link to="/leaderboard" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>LEADERBOARD</Link>
              <Link to="/highlights" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>HIGHLIGHTS</Link>
              <Link to="/crew" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>CREW</Link>
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-[#ff3e3e] px-6 py-2 rounded-lg hover:bg-yellow-200 transition-colors font-mario mb-2"
                onClick={toggleMenu}
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
