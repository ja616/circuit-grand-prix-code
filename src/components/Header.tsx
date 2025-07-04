import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'HOME', to: '/' },
    { label: 'MISSION', to: '#mission' },
    { label: 'POWERUPS', to: '#powerups' },
    { label: 'SCHEDULE', to: '#schedule' },
    { label: 'LEADERBOARD', to: '#leaderboard' },
    { label: 'HIGHLIGHTS', to: '/highlights' },
  ];

  const renderLink = ({ label, to }) => {
    if (to.startsWith('#')) {
      return isHome ? (
        <button
          onClick={() => scrollToSection(to.substring(1))}
          className="font-mario text-white hover:text-yellow-200 transition-colors text-sm"
        >
          {label}
        </button>
      ) : (
        <Link
          to="/"
          className="font-mario text-white hover:text-yellow-200 transition-colors text-sm"
        >
          {label}
        </Link>
      );
    }
    return (
      <Link
        to={to}
        className="font-mario text-white hover:text-yellow-200 transition-colors text-sm"
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="bg-gradient-to-r from-[#8e44ad] to-[#ff3e3e] text-white sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo aligned to the left with larger space */}
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/275d2a89-16d4-4c5f-81d6-c0b6f9f1f9e7.png"
            alt="SOP Logo"
            className="h-16" // Adjusted logo size
          />
        </Link>

        {/* Spacer with more space between logo and nav */}
        <div className="flex-grow"></div> {/* Added flexible space */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8"> {/* Adjusted spacing */}
          {navItems.map((item) => (
            <div key={item.label}>
              {renderLink(item)}
            </div>
          ))}
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noreferrer"
            className="font-mario bg-white text-[#ff3e3e] px-4 py-2 rounded-lg hover:bg-yellow-200 transition-colors text-sm font-bold"
          >
            REGISTER
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden py-4 bg-[#8e44ad] rounded-b-lg">
          <div className="flex flex-col space-y-4 items-center">
            {navItems.map((item) => (
              <div key={item.label} onClick={() => setIsOpen(false)}>
                {renderLink(item)}
              </div>
            ))}
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noreferrer"
              className="font-mario bg-white text-[#ff3e3e] px-6 py-2 rounded-lg hover:bg-yellow-200 transition-colors mb-2"
              onClick={() => setIsOpen(false)}
            >
              REGISTER
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

