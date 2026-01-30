
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Para quién', href: '#para-quien' },
    { name: 'Cómo trabajamos', href: '#como-trabajamos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={`text-2xl font-bold tracking-widest ${
            scrolled ? 'text-[#153B2E]' : 'text-white'
          }`}>NODUS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled ? 'text-[#1E2421] hover:text-[#D9B25F]' : 'text-white/90 hover:text-[#D9B25F]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className={`px-5 py-2 text-sm border transition-all ${
            scrolled 
              ? 'border-[#153B2E] text-[#153B2E] hover:bg-[#153B2E] hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-[#153B2E]'
          }`}>
            Solicitar Presupuesto
          </button>
        </div>

        {/* Mobile menu icon (Simplified) */}
        <div className="md:hidden">
          <button className={scrolled ? 'text-[#153B2E]' : 'text-white'}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
