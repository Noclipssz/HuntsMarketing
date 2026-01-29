export function Hero() {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF8C00]/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#FF8C00]/10 rounded-full blur-[100px] animate-pulse-slow animation-delay-1000" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <div className="text-center lg:text-left">
          {/* Tagline */}
          <p className="text-[#FF8C00] text-sm font-medium tracking-[0.25em] uppercase mb-6 animate-fade-in">
            Gestão Completa de Marketing
          </p>

          {/* Main Headline */}
          <h1 className="font-['Syne'] font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] mb-6 animate-fade-in-up">
            Pare de fazer marketing.
            <br />
            <span className="text-[#FF8C00]">Comece a criar movimentos.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            Somos a intersecção entre propósito, mentalidade e estratégia.
            Transformamos marcas em referências de mercado.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-400">
            <button
              onClick={scrollToCTA}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FF8C00] text-[#09090B] font-semibold text-base uppercase tracking-wide transition-all duration-300 hover:bg-[#FF9F2F] hover:gap-5"
            >
              Quero transformar minha marca
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right - Illustration */}
        <div className="hidden lg:flex items-center justify-center animate-fade-in animation-delay-400">
          <div className="relative">
            {/* Main target icon - large */}
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              className="animate-spin-slow"
            >
              {/* Outer ring */}
              <circle cx="200" cy="200" r="180" stroke="#FF8C00" strokeWidth="1" opacity="0.2" />
              <circle cx="200" cy="200" r="140" stroke="#FF8C00" strokeWidth="1" opacity="0.3" />
              <circle cx="200" cy="200" r="100" stroke="#FF8C00" strokeWidth="2" opacity="0.4" />
              <circle cx="200" cy="200" r="60" stroke="#FF8C00" strokeWidth="2" opacity="0.6" />
              <circle cx="200" cy="200" r="20" fill="#FF8C00" opacity="0.8" />

              {/* Crosshair lines */}
              <line x1="200" y1="10" x2="200" y2="80" stroke="#FF8C00" strokeWidth="2" opacity="0.5" />
              <line x1="200" y1="320" x2="200" y2="390" stroke="#FF8C00" strokeWidth="2" opacity="0.5" />
              <line x1="10" y1="200" x2="80" y2="200" stroke="#FF8C00" strokeWidth="2" opacity="0.5" />
              <line x1="320" y1="200" x2="390" y2="200" stroke="#FF8C00" strokeWidth="2" opacity="0.5" />

              {/* Corner brackets */}
              <path d="M 50 50 L 90 50 M 50 50 L 50 90" stroke="#FF8C00" strokeWidth="2" opacity="0.3" />
              <path d="M 350 50 L 310 50 M 350 50 L 350 90" stroke="#FF8C00" strokeWidth="2" opacity="0.3" />
              <path d="M 50 350 L 90 350 M 50 350 L 50 310" stroke="#FF8C00" strokeWidth="2" opacity="0.3" />
              <path d="M 350 350 L 310 350 M 350 350 L 350 310" stroke="#FF8C00" strokeWidth="2" opacity="0.3" />
            </svg>

            {/* Floating elements */}
            <div className="absolute top-10 right-10 px-4 py-2 bg-[#0C0C0E] border border-[#FF8C00]/20 text-sm text-zinc-400 animate-float">
              Estratégia
            </div>
            <div className="absolute bottom-20 left-0 px-4 py-2 bg-[#0C0C0E] border border-[#FF8C00]/20 text-sm text-zinc-400 animate-float animation-delay-500">
              Propósito
            </div>
            <div className="absolute top-1/2 -right-4 px-4 py-2 bg-[#0C0C0E] border border-[#FF8C00]/20 text-sm text-zinc-400 animate-float animation-delay-1000">
              Mentalidade
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-zinc-600">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
