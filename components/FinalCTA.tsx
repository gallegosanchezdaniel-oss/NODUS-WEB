
import React from 'react';

interface FinalCTAProps {
  onCtaClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onCtaClick }) => {
  return (
    <div className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F3EF]/50 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl mb-8 text-[#153B2E]">
            Hablemos de tu negocio, no de tecnología.
          </h2>
          <p className="text-lg text-[#1E2421]/60 mb-12 max-w-lg leading-relaxed">
            Estamos listos para ayudarte a simplificar tu presencia digital y potenciar tus resultados. Sin tecnicismos vacíos.
          </p>
          <button 
            onClick={onCtaClick}
            className="bg-[#153B2E] text-white px-10 py-5 text-sm font-semibold tracking-widest hover:bg-[#1E2421] transition-all flex items-center gap-4 group"
          >
            HABLAR CON UN ESPECIALISTA
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
