import { useEffect, useRef, useState } from 'react';

export function ManifestoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[60%_40%] gap-16 items-center">
          {/* Left Side - Manifesto Text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="font-[--font-display] font-bold text-[clamp(2rem,4vw,3.5rem)] text-[#FF8C00] mb-8 uppercase">
              Sobre Nós
            </h2>

            <div className="text-[#E8E8E8] font-[--font-body] text-lg leading-[1.8] space-y-6">
              <p className="relative">
                <span className="float-left text-[6rem] leading-[4rem] text-[#FF8C00] font-[--font-display] font-bold mr-4 mt-2">
                  "
                </span>
                <span className="text-xl font-medium text-[#FAFAFA]">
                  Somos a Hunts,
                </span>{' '}
                a intersecção entre <strong className="text-[#FFB84D]">propósito, mentalidade e estratégia</strong>.
              </p>

              <p>
                Acreditamos que marcas sólidas não nascem por acaso — elas são construídas{' '}
                <strong className="text-[#FF8C00]">de dentro para fora</strong>, com intenção, clareza e visão.
              </p>

              <p>
                Assim como a mente sustenta o corpo, nós sustentamos{' '}
                <strong className="text-[#FF8C00]">ideias, valores e narrativas</strong>{' '}
                que se transformam em posicionamentos memoráveis.
              </p>

              <p className="text-2xl font-medium text-[#FF8C00] pt-6 border-t border-[#2D2D2D]">
                Não criamos apenas marketing. Criamos movimentos.
              </p>

              <p className="text-[#E8E8E8]/80 italic">
                Se você sente que sua marca é maior do que aquilo que o mercado enxerga,
                é hora de reprogramar.
                <span className="text-[6rem] leading-[4rem] text-[#FF8C00] font-[--font-display] font-bold ml-2 inline-block align-top">
                  "
                </span>
              </p>
            </div>
          </div>

          {/* Right Side - Icon & Quote */}
          <div
            className={`flex flex-col items-center justify-center gap-12 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Hunts Logo - Target/Crosshair Wireframe */}
            <div className="relative">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-breathe"
              >
                {/* Outer ring */}
                <circle cx="100" cy="100" r="80" stroke="#FF8C00" strokeWidth="2" fill="none" />
                {/* Middle ring */}
                <circle cx="100" cy="100" r="50" stroke="#FF8C00" strokeWidth="2" fill="none" />
                {/* Inner ring */}
                <circle cx="100" cy="100" r="20" stroke="#FF8C00" strokeWidth="2" fill="none" />
                {/* Center dot */}
                <circle cx="100" cy="100" r="6" fill="#FF8C00" />
                {/* Crosshair lines */}
                <line x1="100" y1="10" x2="100" y2="40" stroke="#FF8C00" strokeWidth="3" />
                <line x1="100" y1="160" x2="100" y2="190" stroke="#FF8C00" strokeWidth="3" />
                <line x1="10" y1="100" x2="40" y2="100" stroke="#FF8C00" strokeWidth="3" />
                <line x1="160" y1="100" x2="190" y2="100" stroke="#FF8C00" strokeWidth="3" />
                {/* Decorative corner accents */}
                <path d="M 30 30 L 50 30 M 30 30 L 30 50" stroke="#FFB84D" strokeWidth="1" opacity="0.5" />
                <path d="M 170 30 L 150 30 M 170 30 L 170 50" stroke="#FFB84D" strokeWidth="1" opacity="0.5" />
                <path d="M 30 170 L 50 170 M 30 170 L 30 150" stroke="#FFB84D" strokeWidth="1" opacity="0.5" />
                <path d="M 170 170 L 150 170 M 170 170 L 170 150" stroke="#FFB84D" strokeWidth="1" opacity="0.5" />
              </svg>
            </div>

            {/* Highlighted Quote */}
            <div className="text-center space-y-4">
              <p className="font-[--font-display] font-bold text-4xl text-[#FF8C00] tracking-tight">
                COMECE
                <br />
                PELA MENTE.
              </p>
              <div className="w-16 h-1 bg-[#FF8C00] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
