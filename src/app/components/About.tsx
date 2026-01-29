export function About() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Title */}
          <div>
            <p className="text-[#FF8C00] text-sm font-medium tracking-[0.25em] uppercase mb-4">
              Sobre Nós
            </p>
            <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl leading-tight">
              Marcas sólidas não nascem por acaso.
            </h2>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              Acreditamos que marcas de verdade são construídas{' '}
              <span className="text-white">de dentro para fora</span>, com intenção, clareza e visão.
            </p>
            <p>
              Assim como a mente sustenta o corpo, nós sustentamos ideias, valores e narrativas
              que se transformam em posicionamentos memoráveis.
            </p>
            <p className="text-[#FF8C00] font-medium text-xl pt-4 border-t border-white/10">
              "Não criamos apenas marketing. Criamos movimentos."
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: 'Propósito',
              desc: 'Entendemos o porquê antes do como. Cada estratégia nasce de um propósito claro.',
            },
            {
              title: 'Mentalidade',
              desc: 'Antes de transformar o mercado, transformamos a forma como você enxerga sua marca.',
            },
            {
              title: 'Estratégia',
              desc: 'Planejamento preciso que conecta sua essência aos resultados que você busca.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-8 border border-white/5 hover:border-[#FF8C00]/30 transition-colors duration-300"
            >
              <div className="text-[#FF8C00] text-5xl font-['Syne'] font-bold mb-4 opacity-20 group-hover:opacity-100 transition-opacity">
                0{i + 1}
              </div>
              <h3 className="font-['Syne'] font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
