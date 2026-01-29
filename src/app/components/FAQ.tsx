import { useState } from 'react';

const faqs = [
  {
    question: 'Como funciona o processo de trabalho da Hunts?',
    answer: 'Começamos com uma conversa para entender sua marca e objetivos. Depois, fazemos um diagnóstico completo e criamos uma estratégia personalizada. A partir daí, executamos com você, com acompanhamento constante e ajustes conforme necessário.',
  },
  {
    question: 'Qual o investimento mínimo para trabalhar com vocês?',
    answer: 'Cada projeto é único e o investimento varia conforme a complexidade e escopo. Agende uma conversa gratuita para entendermos suas necessidades e apresentarmos uma proposta personalizada.',
  },
  {
    question: 'Vocês atendem empresas de qualquer segmento?',
    answer: 'Sim, atendemos empresas B2B de diversos segmentos em todo o Brasil. Nosso foco está em negócios que buscam não apenas vender, mas construir uma marca forte e se posicionar como referência.',
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Resultados iniciais costumam aparecer nos primeiros 30-60 dias. Porém, construir uma marca sólida é um processo contínuo. Trabalhamos com transparência e relatórios regulares para você acompanhar a evolução.',
  },
  {
    question: 'Vocês cuidam de tudo ou preciso de equipe interna?',
    answer: 'Oferecemos gestão completa de marketing. Você não precisa de equipe interna dedicada - nós cuidamos de estratégia, criação, execução e análise. Você participa das decisões estratégicas enquanto focamos na operação.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-[#0C0C0E]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FF8C00] text-sm font-medium tracking-[0.25em] uppercase mb-4">
            Dúvidas Frequentes
          </p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl">
            Perguntas & Respostas
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-medium text-white pr-8">{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`text-[#FF8C00] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
