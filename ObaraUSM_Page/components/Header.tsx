import React, { useState, useEffect } from 'react';

// Hamburger Icon
const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

// Close Icon
const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Calculate scrollbar width and set it as a CSS variable
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
      
      // Add a class to the body to apply scroll-locking styles
      document.body.classList.add('no-scroll');
    } else {
      // Remove the class to restore scrolling
      document.body.classList.remove('no-scroll');
    }
    
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#uslugi', label: 'Usługi' },
    { href: '#o-mnie', label: 'O Mnie' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const handleMobileLinkClick = () => {
      setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#home" onClick={handleMobileLinkClick} className="text-3xl font-black tracking-tighter text-white uppercase">
          Obara<span className="text-[#f45c01ff]">USM.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-gray-300 hover:text-[#f45c01ff] transition-colors duration-300 font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {isMobileMenuOpen ? <XIcon className="w-8 h-8"/> : <MenuIcon className="w-8 h-8"/>}
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 w-full bg-gray-900/90 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 border-t border-gray-700/50' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-start p-6 space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileLinkClick}
                className="text-xl w-full text-gray-300 hover:text-[#f45c01ff] transition-colors duration-300 font-semibold"
              >
                {link.label}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;