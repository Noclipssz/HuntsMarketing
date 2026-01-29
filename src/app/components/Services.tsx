const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Posicionamento Estratégico',
    description: 'Definimos quem você é no mercado e como você se torna referência absoluta no seu nicho.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Gestão de Marca',
    description: 'Criamos identidades visuais e estratégicas que fazem sua marca ser lembrada e respeitada.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Criação de Conteúdo',
    description: 'Produzimos conteúdos que educam, provocam e convertem. Narrativas que constroem autoridade.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Tráfego & Performance',
    description: 'Escalamos sua presença digital com estratégias que trazem resultados reais.',
  },
];

export function Services() {
  return (
    <section className="py-24 px-6 bg-[#0C0C0E]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FF8C00] text-sm font-medium tracking-[0.25em] uppercase mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl">
            O que fazemos por você
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-8 bg-[#09090B] border border-white/5 hover:border-[#FF8C00]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-[#FF8C00] mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-['Syne'] font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FF8C00] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
