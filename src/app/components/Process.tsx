const steps = [
  {
    number: '01',
    title: 'Conversa Inicial',
    description: 'Entendemos sua marca, seus objetivos e desafios. Uma conversa sem compromisso para conhecer você.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Diagnóstico',
    description: 'Analisamos sua presença digital, concorrência e mercado para identificar oportunidades.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Estratégia',
    description: 'Desenvolvemos um plano personalizado com ações claras e objetivos mensuráveis.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Execução',
    description: 'Colocamos a estratégia em ação com acompanhamento constante e otimizações contínuas.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FF8C00] text-sm font-medium tracking-[0.25em] uppercase mb-4">
            Como Funciona
          </p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl">
            Nosso processo de trabalho
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00]/30 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center group">
                {/* Number badge */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 bg-[#09090B] border border-white/10 group-hover:border-[#FF8C00]/50 transition-colors duration-300">
                  <span className="text-[#FF8C00] font-['Syne'] font-bold text-2xl">
                    {step.number}
                  </span>
                  {/* Dot indicator */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FF8C00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Icon */}
                <div className="text-zinc-600 group-hover:text-[#FF8C00] transition-colors duration-300 mb-4 flex justify-center">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="font-['Syne'] font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
