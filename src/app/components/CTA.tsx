import { useState } from 'react';

export function CTA() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const message = `Olá! Vim pelo site da Hunts.

*Nome:* ${form.name}
*E-mail:* ${form.email}
*Instagram:* ${form.whatsapp}
${form.message ? `*Mensagem:* ${form.message}` : ''}

Gostaria de saber mais sobre os serviços.`;

    // TODO: Replace with actual WhatsApp number
    const whatsappNumber = '5541999615068';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSending(false);
      setForm({ name: '', email: '', whatsapp: '', message: '' });
    }, 500);
  };

  return (
    <section id="cta" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#FF8C00] text-sm font-medium tracking-[0.25em] uppercase mb-4">
            Vamos Conversar
          </p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl mb-4">
            Sua marca é maior do que
            <br />
            <span className="text-[#FF8C00]">o mercado enxerga.</span>
          </h2>
          <p className="text-zinc-500 text-lg">
            Preencha o formulário e vamos conversar no WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-4 bg-[#0C0C0E] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#FF8C00] focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-4 bg-[#0C0C0E] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#FF8C00] focus:outline-none transition-colors"
            />
          </div>
          <input
            type="tel"
            placeholder="Seu Instagram"
            required
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            className="w-full px-4 py-4 bg-[#0C0C0E] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#FF8C00] focus:outline-none transition-colors"
          />
          <textarea
            placeholder="Conte um pouco sobre seu projeto (opcional)"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-4 bg-[#0C0C0E] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#FF8C00] focus:outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="w-full py-4 bg-[#FF8C00] text-[#09090B] font-semibold text-base uppercase tracking-wide transition-all duration-300 hover:bg-[#FF9F2F] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {sending ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Abrindo WhatsApp...
              </>
            ) : (
              <>
                Iniciar Conversa no WhatsApp
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
