import { useEffect, useRef, useState } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Parallax effect for gradient mesh
    const handleMouseMove = (e: MouseEvent) => {
      if (meshRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        meshRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const ctaSection = document.getElementById('cta-section');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      
      {/* Gradient Mesh */}
      <div ref={meshRef} className="gradient-mesh transition-transform duration-300 ease-out" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full text-center">
        {/* Logo - Breathing Effect */}
        <div 
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          <div className="inline-flex items-center justify-center animate-breathe">
            {/* Hunts Logo - Target/Crosshair */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_20px_rgba(255,140,0,0.5)]"
            >
              {/* Outer ring */}
              <circle cx="50" cy="50" r="40" stroke="#FF8C00" strokeWidth="4" fill="none" />
              {/* Middle ring */}
              <circle cx="50" cy="50" r="25" stroke="#FF8C00" strokeWidth="3" fill="none" />
              {/* Inner ring */}
              <circle cx="50" cy="50" r="10" stroke="#FF8C00" strokeWidth="2" fill="none" />
              {/* Center dot */}
              <circle cx="50" cy="50" r="4" fill="#FF8C00" />
              {/* Crosshair lines */}
              <line x1="50" y1="5" x2="50" y2="20" stroke="#FF8C00" strokeWidth="4" />
              <line x1="50" y1="80" x2="50" y2="95" stroke="#FF8C00" strokeWidth="4" />
              <line x1="5" y1="50" x2="20" y2="50" stroke="#FF8C00" strokeWidth="4" />
              <line x1="80" y1="50" x2="95" y2="50" stroke="#FF8C00" strokeWidth="4" />
            </svg>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className={`font-[--font-display] font-extrabold text-[clamp(2.5rem,8vw,7.5rem)] leading-[1.1] mb-8 text-[#FAFAFA] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          PARE DE FAZER MARKETING.
          <br />
          <span className="text-[#FF8C00]">COMECE A CRIAR MOVIMENTOS.</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`font-[--font-body] font-light text-[clamp(1.125rem,2vw,2rem)] leading-[1.6] text-[#E8E8E8] max-w-4xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.9s' }}
        >
          Somos a intersecção entre <strong className="text-[#FF8C00] font-medium">propósito</strong>, <strong className="text-[#FF8C00] font-medium">mentalidade</strong> e <strong className="text-[#FF8C00] font-medium">estratégia</strong>.
          <br />
          Não vendemos campanhas. Construímos marcas que transformam realidades.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1.2s' }}
        >
          <button
            onClick={scrollToContact}
            className="magnetic-button group relative px-12 py-5 bg-[#FF8C00] text-[#0A0A0A] font-[--font-display] font-bold text-lg uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,140,0,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              REPROGRAMAR MINHA MARCA
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-2"
              >
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-[#FFB84D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1.5s' }}
        >
          <div className="flex flex-col items-center gap-2 text-[#E8E8E8] animate-pulse-slow">
            <span className="text-sm uppercase tracking-widest font-[--font-body]">Role</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="animate-bounce"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
