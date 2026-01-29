const testimonials = [
  {
    name: 'Rafael Mendes',
    role: 'CEO, TechFlow Solutions',
    content: 'A Hunts transformou completamente nossa presença digital. Em 3 meses, triplicamos nosso engajamento e começamos a ser reconhecidos como referência no setor.',
    avatar: 'RM',
  },
  {
    name: 'Carolina Alves',
    role: 'Fundadora, Studio Bella',
    content: 'Eles não entregam apenas marketing, entregam estratégia. Pela primeira vez senti que alguém realmente entendeu a essência da minha marca.',
    avatar: 'CA',
  },
  {
    name: 'Bruno Ferreira',
    role: 'Diretor, Construtora Horizonte',
    content: 'Profissionalismo e criatividade em outro nível. A equipe da Hunts nos ajudou a comunicar nosso diferencial de forma clara e impactante.',
    avatar: 'BF',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FF8C00] text-sm font-medium tracking-[0.25em] uppercase mb-4">
            Depoimentos
          </p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group p-8 bg-[#0C0C0E] border border-white/5 hover:border-[#FF8C00]/20 transition-all duration-500"
            >
              {/* Quote icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#FF8C00]/20 mb-6"
              >
                <path
                  d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"
                  fill="currentColor"
                />
                <path
                  d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                  fill="currentColor"
                />
              </svg>

              {/* Content */}
              <p className="text-zinc-400 leading-relaxed mb-8">
                "{item.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00]/10 flex items-center justify-center text-[#FF8C00] font-semibold text-sm">
                  {item.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-zinc-500 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
