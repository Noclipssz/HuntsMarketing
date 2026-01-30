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
          <img
            src="/semfundopreview.png"
            alt="Hunts Marketing"
            className="w-[12vw] h-[12vw] min-w-[56px] min-h-[56px] max-w-[110px] max-h-[110px] transition-transform duration-300 group-hover:scale-110 object-contain"
          />
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
