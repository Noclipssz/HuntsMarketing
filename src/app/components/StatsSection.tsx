import { useEffect, useRef, useState } from 'react';

interface Stat {
  id: number;
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: '100%',
    label: 'DEDICAÇÃO',
    description: 'AO SEU PROJETO',
  },
  {
    id: 2,
    value: '360°',
    label: 'GESTÃO',
    description: 'COMPLETA',
  },
  {
    id: 3,
    value: '24H',
    label: 'SUPORTE',
    description: 'DISPONÍVEL',
  },
];

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    // Animate first stat (100%)
    let count1 = 0;
    const interval1 = setInterval(() => {
      count1 += 5;
      if (count1 >= 100) {
        count1 = 100;
        clearInterval(interval1);
      }
      setAnimatedValues(prev => ({ ...prev, 1: count1 }));
    }, 25);

    // Animate second stat (360°)
    let count2 = 0;
    const interval2 = setInterval(() => {
      count2 += 15;
      if (count2 >= 360) {
        count2 = 360;
        clearInterval(interval2);
      }
      setAnimatedValues(prev => ({ ...prev, 2: count2 }));
    }, 20);

    // Animate third stat (24h)
    let count3 = 0;
    const interval3 = setInterval(() => {
      count3 += 1;
      if (count3 >= 24) {
        count3 = 24;
        clearInterval(interval3);
      }
      setAnimatedValues(prev => ({ ...prev, 3: count3 }));
    }, 50);
  };

  const getDisplayValue = (stat: Stat) => {
    if (stat.id === 1 && animatedValues[1] !== undefined) {
      return `${animatedValues[1]}%`;
    }
    if (stat.id === 2 && animatedValues[2] !== undefined) {
      return `${animatedValues[2]}°`;
    }
    if (stat.id === 3 && animatedValues[3] !== undefined) {
      return `${animatedValues[3]}H`;
    }
    return stat.value;
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background with Noise Texture */}
      <div className="absolute inset-0 bg-[#1A1A1A]">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" opacity="0.5" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <h2
            className={`font-[--font-display] font-bold text-[clamp(2.5rem,5vw,4rem)] text-[#FAFAFA] mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            RESULTADOS EM MOVIMENTO
          </h2>
          <div
            className={`w-32 h-1 bg-[#FF8C00] mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Number */}
              <div className="mb-6">
                <div className="counter font-[--font-mono] font-bold text-[clamp(4rem,10vw,7.5rem)] leading-none text-[#FF8C00] drop-shadow-[0_0_30px_rgba(255,140,0,0.4)]">
                  {getDisplayValue(stat)}
                </div>
              </div>

              {/* Label */}
              <div className="space-y-2">
                <p className="font-[--font-display] font-bold text-base md:text-lg tracking-[0.2em] text-[#FAFAFA] uppercase">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="font-[--font-display] font-bold text-base md:text-lg tracking-[0.2em] text-[#E8E8E8] uppercase">
                    {stat.description}
                  </p>
                )}
              </div>

              {/* Decorative Line */}
              <div className="mt-8 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent" />
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div
          className={`mt-24 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-[--font-body] text-xl md:text-2xl text-[#E8E8E8] italic max-w-3xl mx-auto">
            "Nosso compromisso é com o seu{' '}
            <strong className="text-[#FF8C00] not-italic">resultado</strong>.
            Cada estratégia é pensada para transformar sua marca em referência."
          </p>
        </div>
      </div>
    </section>
  );
}
