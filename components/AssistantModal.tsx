
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AssistantModalProps {
  onClose: () => void;
}

const AssistantModal: React.FC<AssistantModalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: 'Hola. Soy el asistente virtual de NODUS. ¿En qué tipo de negocio estás pensando aplicar soluciones digitales? (Pyme, negocio local, despacho profesional...)' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `Eres el consultor senior de NODUS, una agencia que ayuda a pymes y negocios locales con "Soluciones digitales para negocios reales". Tu tono es profesional, calmado, sobrio y sin humo. No uses jerga de marketing agresiva. Responde de forma breve y concisa a la siguiente consulta del usuario, siempre orientada a cómo NODUS puede ayudarles a ordenar su web, contenido o automatización. Consulta: ${userText}` }] }
        ],
        config: {
          systemInstruction: "Eres un consultor de NODUS. Tu claim es 'Soluciones digitales para negocios reales'. Ayudas a pymes y autónomos a digitalizarse sin complicaciones. No prometas resultados mágicos, habla de orden, claridad y eficiencia."
        }
      });

      const aiResponse = response.text || "Lo siento, hubo un error al procesar tu consulta. Por favor, intenta de nuevo o solicita un presupuesto directo.";
      setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "En este momento no puedo responder, pero puedes dejarnos tus datos y un especialista humano te contactará." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#153B2E]/60 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-[#F5F3EF] w-full max-w-xl h-[600px] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-[#153B2E] p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-medium tracking-wide">Especialista NODUS</h3>
            <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Chat de consulta previa</p>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-[#153B2E] text-white shadow-sm' 
                  : 'bg-white text-[#1E2421] border border-black/5'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 space-x-1 flex items-center border border-black/5">
                <div className="w-1.5 h-1.5 bg-[#D9B25F] rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-[#D9B25F] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-[#D9B25F] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-black/5 flex gap-3">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu consulta sobre tu negocio..."
            className="flex-grow bg-[#F5F3EF] px-4 py-3 text-sm border-none focus:ring-1 focus:ring-[#153B2E] outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="bg-[#D9B25F] text-[#153B2E] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#c9a14d] transition-colors disabled:opacity-50"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssistantModal;
