import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group">
          <svg
            width="36"
            height="36"
            viewBox="0 0 100 100"
            fill="none"
            className="transition-transform duration-300 group-hover:rotate-90"
          >
            <circle cx="50" cy="50" r="38" stroke="#FF8C00" strokeWidth="3" fill="none" />
            <circle cx="50" cy="50" r="22" stroke="#FF8C00" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="6" fill="#FF8C00" />
            <line x1="50" y1="8" x2="50" y2="24" stroke="#FF8C00" strokeWidth="3" />
            <line x1="50" y1="76" x2="50" y2="92" stroke="#FF8C00" strokeWidth="3" />
            <line x1="8" y1="50" x2="24" y2="50" stroke="#FF8C00" strokeWidth="3" />
            <line x1="76" y1="50" x2="92" y2="50" stroke="#FF8C00" strokeWidth="3" />
          </svg>
          <div className="flex flex-col">
            <span className="font-['Syne'] font-bold text-[clamp(0.875rem,2.5vw,1.125rem)] tracking-tight">HUNTS</span>
            <span className="text-[clamp(7px,1.5vw,10px)] tracking-[0.2em] sm:tracking-[0.3em] text-zinc-500 uppercase">Marketing</span>
          </div>
        </a>

        {/* CTA */}
        <button
          onClick={scrollToCTA}
          className="px-[clamp(0.75rem,2vw,1.25rem)] py-[clamp(0.5rem,1.5vw,0.625rem)] border border-[#FF8C00] text-[#FF8C00] text-[clamp(0.625rem,1.5vw,0.875rem)] font-medium tracking-wide uppercase transition-all duration-300 hover:bg-[#FF8C00] hover:text-[#09090B] whitespace-nowrap"
        >
          Fale Conosco
        </button>
      </div>
    </header>
  );
}
