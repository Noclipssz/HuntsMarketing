import { useEffect, useRef, useState } from 'react';

interface Service {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'POSICIONAMENTO ESTRATÉGICO',
    subtitle: 'Não ajudamos você a vender. Ajudamos você a SER.',
    description: 'Definimos quem você é no mercado, qual é seu diferencial incontestável e como você se torna referência absoluta no seu nicho.',
  },
  {
    id: 2,
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    title: 'GESTÃO DE MARCA',
    subtitle: 'Marcas que não querem só vender, querem influenciar.',
    description: 'Criamos identidades visuais, verbais e estratégicas que fazem sua marca ser lembrada, desejada e respeitada.',
  },
  {
    id: 3,
    icon: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
    title: 'CRIAÇÃO DE CONTEÚDO',
    subtitle: 'Ideias que se transformam em posicionamentos memoráveis.',
    description: 'Produzimos conteúdos que educam, provocam e convertem. Não fazemos posts bonitos. Fazemos narrativas que constroem autoridade.',
  },
  {
    id: 4,
    icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
    title: 'TRÁFEGO & PERFORMANCE',
    subtitle: 'Crescimento sem perder a alma.',
    description: 'Escalamos sua presença digital com estratégias de tráfego pago e orgânico que trazem resultados reais sem comprometer sua essência.',
  },
];

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      {/* Background with Horizontal Lines */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-[#1A1A1A]"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <h2
            className={`font-[--font-display] font-bold text-[clamp(2.5rem,5vw,4rem)] text-[#FAFAFA] mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            ARSENAL ESTRATÉGICO
          </h2>
          <div
            className={`w-32 h-1 bg-[#FF8C00] transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card group relative bg-[#0A0A0A] border-2 border-[#2D2D2D] p-8 md:p-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center border-2 border-[#FF8C00] transition-all duration-300 group-hover:bg-[#FF8C00] group-hover:rotate-12">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#FF8C00] group-hover:text-[#0A0A0A] transition-colors duration-300"
                    >
                      <path d={service.icon} />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="font-[--font-display] font-bold text-2xl md:text-3xl text-[#FAFAFA] mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-[--font-body] font-medium text-lg text-[#FF8C00]">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description - Revealed on Hover */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      hoveredCard === service.id
                        ? 'max-h-40 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="font-[--font-body] text-base text-[#E8E8E8] leading-relaxed pt-2 border-t border-[#2D2D2D]">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="flex-shrink-0 hidden md:block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#FF8C00] transition-transform duration-300 group-hover:translate-x-2"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
