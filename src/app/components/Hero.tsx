export function Hero() {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Penguin illustration - positioned in corner as decorative element */}
      <div className="hidden md:block absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.20] pointer-events-none">
        <img
          src="/penguin-logo.jpeg"
          alt=""
          width="550"
          height="550"
          className="animate-float"
        />
      </div>

      {/* Subtle gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF8C00]/5 via-transparent to-transparent" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content - centered */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tagline */}
        <p className="text-[#FF8C00] text-sm font-medium tracking-[0.25em] uppercase mb-6 animate-fade-in">
          Gestão Completa de Marketing
        </p>

        {/* Main Headline */}
        <h1 className="font-['Syne'] font-bold text-[clamp(2.25rem,6vw,4rem)] leading-[1.15] mb-6 animate-fade-in-up">
          Quando você entende a mente,
          <br />
          <span className="text-[#FF8C00]">cada movimento vira conversão.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
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

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-zinc-600">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
