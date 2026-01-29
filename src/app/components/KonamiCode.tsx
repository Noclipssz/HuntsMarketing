import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function KonamiCode() {
  const [input, setInput] = useState<string[]>([]);
  const [isActivated, setIsActivated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      
      setInput((prevInput) => {
        const newInput = [...prevInput, key].slice(-KONAMI_CODE.length);
        
        // Check if the sequence matches
        if (newInput.join(',') === KONAMI_CODE.join(',')) {
          if (!isActivated) {
            setIsActivated(true);
            setShowMessage(true);
            document.body.classList.add('inverse-mode');
            
            // Hide message after 5 seconds
            setTimeout(() => setShowMessage(false), 5000);
          } else {
            // Deactivate on second trigger
            setIsActivated(false);
            document.body.classList.remove('inverse-mode');
          }
          return [];
        }
        
        return newInput;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActivated]);

  return (
    <>
      {showMessage && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center pointer-events-none">
          <div className="bg-[#0A0A0A] border-4 border-[#FF8C00] px-12 py-8 max-w-2xl mx-4 text-center space-y-4 animate-fade-in-up shadow-[0_0_60px_rgba(255,140,0,0.6)] no-invert">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="font-[--font-display] font-bold text-3xl text-[#FF8C00] uppercase">
              Easter Egg Encontrado!
            </h3>
            <p className="font-[--font-body] text-lg text-[#E8E8E8] leading-relaxed">
              Você descobriu o <span className="text-[#FF8C00] font-bold">lado reverso</span>.
              <br />
              Somos assim: sempre tem mais camadas.
            </p>
            <p className="font-[--font-body] text-sm text-[#E8E8E8]/60 italic">
              Pressione a sequência novamente para voltar ao normal
            </p>
          </div>
        </div>
      )}
    </>
  );
}
