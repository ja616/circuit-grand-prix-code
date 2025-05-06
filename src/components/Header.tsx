
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
              src="/lovable-uploads/d1c539da-d799-4e85-b9fb-ae156d444cbb.png" 
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
            <Link to="/about" className="font-mario text-white hover:text-yellow-200 transition-colors">ABOUT</Link>
            <Link to="/events" className="font-mario text-white hover:text-yellow-200 transition-colors">EVENTS</Link>
            <Link to="/schedule" className="font-mario text-white hover:text-yellow-200 transition-colors">SCHEDULE</Link>
            <Link to="/team" className="font-mario text-white hover:text-yellow-200 transition-colors">TEAM</Link>
            <Link to="/faq" className="font-mario text-white hover:text-yellow-200 transition-colors">FAQ</Link>
            <a 
              href="https://unstop.com" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-[#ff3e3e] px-4 py-1 rounded-lg hover:bg-yellow-200 transition-colors font-mario"
            >
              REGISTER
            </a>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 bg-[#8e44ad] rounded-b-lg">
            <div className="flex flex-col space-y-4 items-center">
              <Link to="/" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>HOME</Link>
              <Link to="/about" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>ABOUT</Link>
              <Link to="/events" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>EVENTS</Link>
              <Link to="/schedule" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>SCHEDULE</Link>
              <Link to="/team" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>TEAM</Link>
              <Link to="/faq" className="font-mario text-white hover:text-yellow-200 w-full text-center py-2" onClick={toggleMenu}>FAQ</Link>
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-[#ff3e3e] px-6 py-2 rounded-lg hover:bg-yellow-200 transition-colors font-mario mb-2"
                onClick={toggleMenu}
              >
                REGISTER
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
