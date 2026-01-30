
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#153B2E]/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full text-white z-10">
        <div className="max-w-3xl">
          <span className="inline-block text-[#D9B25F] text-xs font-semibold tracking-[0.2em] mb-4 uppercase">
            SOLUCIONES DIGITALES PARA NEGOCIOS REALES
          </span>
          <h1 className="text-5xl md:text-7xl font-normal leading-tight mb-6">
            Soluciones digitales para negocios reales
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl leading-relaxed">
            Webs profesionales, contenido útil y automatización práctica para pymes que quieren orden, visibilidad y eficiencia. Sin humo ni complejidad innecesaria.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#D9B25F] hover:bg-[#c9a14d] text-[#153B2E] px-8 py-4 text-sm font-semibold tracking-wide transition-all shadow-lg">
              Solicitar presupuesto
            </button>
            <button 
              onClick={onCtaClick}
              className="border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 text-sm font-semibold tracking-wide transition-all"
            >
              Hablar con un especialista
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
