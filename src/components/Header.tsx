
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-mk-purple to-mk-red text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="font-mario text-lg md:text-xl">
            RAS IEEE SOP
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
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/schedule">SCHEDULE</NavLink>
            <NavLink to="/tracks">TRACKS</NavLink>
            <NavLink to="/leaderboard">LEADERBOARD</NavLink>
            <NavLink to="/highlights">HIGHLIGHTS</NavLink>
            <NavLink to="/crew">CREW</NavLink>
            <a 
              href="https://unstop.com" 
              target="_blank" 
              rel="noreferrer"
              className="mk-btn"
            >
              REGISTER NOW
            </a>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 bg-mk-purple bg-opacity-95 rounded-b-lg">
            <div className="flex flex-col space-y-4 items-center">
              <MobileNavLink to="/" onClick={toggleMenu}>HOME</MobileNavLink>
              <MobileNavLink to="/schedule" onClick={toggleMenu}>SCHEDULE</MobileNavLink>
              <MobileNavLink to="/tracks" onClick={toggleMenu}>TRACKS</MobileNavLink>
              <MobileNavLink to="/leaderboard" onClick={toggleMenu}>LEADERBOARD</MobileNavLink>
              <MobileNavLink to="/highlights" onClick={toggleMenu}>HIGHLIGHTS</MobileNavLink>
              <MobileNavLink to="/crew" onClick={toggleMenu}>CREW</MobileNavLink>
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noreferrer"
                className="mk-btn mb-2"
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

const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link
    to={to}
    className="font-racing text-white hover:text-yellow-200 transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string, 
  children: React.ReactNode,
  onClick: () => void
}) => (
  <Link
    to={to}
    className="font-racing text-white hover:text-yellow-200 w-full text-center py-2"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
