import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add IDs to sections when component mounts
  useEffect(() => {
    const addIdToFirstSectionOfType = (component: string, id: string) => {
      const sections = document.querySelectorAll(component);
      if (sections.length > 0) {
        sections[0].id = id;
      }
    };

    // Short delay to ensure components are rendered
    setTimeout(() => {
      addIdToFirstSectionOfType('.mk-section', 'mission');
      // Other sections already have IDs from their components
    }, 100);
  }, [location]);

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
            <NavLink onClick={() => scrollToSection('top')}>HOME</NavLink>
            <NavLink onClick={() => scrollToSection('schedule')}>SCHEDULE</NavLink>
            <NavLink onClick={() => scrollToSection('mission')}>TRACKS</NavLink>
            <NavLink onClick={() => scrollToSection('leaderboard')}>LEADERBOARD</NavLink>
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
              <MobileNavLink onClick={() => scrollToSection('top')}>HOME</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('schedule')}>SCHEDULE</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('mission')}>TRACKS</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('leaderboard')}>LEADERBOARD</MobileNavLink>
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

const NavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to?: string, 
  children: React.ReactNode,
  onClick?: () => void 
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className="font-racing text-white hover:text-yellow-200 transition-colors"
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className="font-racing text-white hover:text-yellow-200 transition-colors"
    >
      {children}
    </button>
  );
};

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to?: string, 
  children: React.ReactNode,
  onClick: () => void 
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className="font-racing text-white hover:text-yellow-200 w-full text-center py-2"
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className="font-racing text-white hover:text-yellow-200 w-full text-center py-2"
    >
      {children}
    </button>
  );
};

export default Header;
