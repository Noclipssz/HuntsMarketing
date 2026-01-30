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
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/semfundopreview.png"
            alt="Hunts Marketing"
            width="96"
            height="96"
            className="transition-transform duration-300 group-hover:scale-110 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-['Syne'] font-bold text-lg tracking-tight">HUNTS</span>
            <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">Marketing</span>
          </div>
        </a>

        {/* CTA */}
        <button
          onClick={scrollToCTA}
          className="px-5 py-2.5 border border-[#FF8C00] text-[#FF8C00] text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-[#FF8C00] hover:text-[#09090B]"
        >
          Fale Conosco
        </button>
      </div>
    </header>
  );
}
