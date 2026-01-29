import { useEffect, useRef, useState } from 'react';

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Spotlight effect following mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 140, 0, 0.15), transparent 40%)`;
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message
    const message = `Olá! Vim pelo site da Hunts.

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*WhatsApp:* ${formData.whatsapp}
${formData.message ? `*Mensagem:* ${formData.message}` : ''}

Gostaria de saber mais sobre os serviços de marketing.`;

    // WhatsApp number (replace with actual number)
    const whatsappNumber = '5500000000000'; // TODO: Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Small delay for UX, then redirect to WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', whatsapp: '', message: '' });
      }, 3000);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="cta-section"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Spotlight Effect */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none transition-all duration-300"
      />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Headline */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-[--font-display] font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-[#FAFAFA] mb-6">
            SUA MARCA É MAIOR
            <br />
            DO QUE AQUILO QUE
            <br />
            <span className="text-[#FF8C00]">O MERCADO ENXERGA.</span>
          </h2>
          <p className="font-[--font-body] text-xl md:text-2xl text-[#E8E8E8] max-w-2xl mx-auto">
            Vamos reprogramar juntos. Preencha o formulário e comece sua transformação.
          </p>
        </div>

        {/* Form */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {isSubmitted ? (
            <div className="text-center py-20 space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF8C00] rounded-full mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0A0A0A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-[--font-display] font-bold text-3xl text-[#FF8C00]">
                REDIRECIONANDO PARA O WHATSAPP!
              </h3>
              <p className="font-[--font-body] text-lg text-[#E8E8E8]">
                Você será direcionado para continuar a conversa no WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b-2 border-[#2D2D2D] px-0 py-4 text-lg text-[#FAFAFA] font-[--font-body] outline-none transition-all duration-300 focus:border-[#FF8C00] placeholder-transparent"
                  placeholder="Nome"
                  id="name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-6 text-sm text-[#E8E8E8] font-[--font-body] uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#E8E8E8]/50 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FF8C00]"
                >
                  Nome Completo
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b-2 border-[#2D2D2D] px-0 py-4 text-lg text-[#FAFAFA] font-[--font-body] outline-none transition-all duration-300 focus:border-[#FF8C00] placeholder-transparent"
                  placeholder="Email"
                  id="email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-6 text-sm text-[#E8E8E8] font-[--font-body] uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#E8E8E8]/50 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FF8C00]"
                >
                  E-mail
                </label>
              </div>

              {/* WhatsApp */}
              <div className="relative">
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b-2 border-[#2D2D2D] px-0 py-4 text-lg text-[#FAFAFA] font-[--font-body] outline-none transition-all duration-300 focus:border-[#FF8C00] placeholder-transparent"
                  placeholder="WhatsApp"
                  id="whatsapp"
                />
                <label
                  htmlFor="whatsapp"
                  className="absolute left-0 -top-6 text-sm text-[#E8E8E8] font-[--font-body] uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#E8E8E8]/50 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FF8C00]"
                >
                  WhatsApp
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="peer w-full bg-transparent border-b-2 border-[#2D2D2D] px-0 py-4 text-lg text-[#FAFAFA] font-[--font-body] outline-none resize-none transition-all duration-300 focus:border-[#FF8C00] placeholder-transparent"
                  placeholder="Mensagem"
                  id="message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-6 text-sm text-[#E8E8E8] font-[--font-body] uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#E8E8E8]/50 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FF8C00]"
                >
                  Mensagem (Opcional)
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="magnetic-button group w-full md:w-auto px-16 py-6 bg-[#FF8C00] text-[#0A0A0A] font-[--font-display] font-bold text-lg uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,140,0,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        ENVIANDO...
                      </>
                    ) : (
                      <>
                        COMEÇAR A REPROGRAMAÇÃO
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
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-[#FFB84D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
