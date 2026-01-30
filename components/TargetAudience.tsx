
import React from 'react';

const TargetAudience: React.FC = () => {
  const segments = [
    "Pymes",
    "Negocios locales",
    "Profesionales y despachos",
    "Webs obsoletas"
  ];

  return (
    <div className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-8 text-[#153B2E]">Para quién es NODUS</h2>
            <p className="text-lg text-[#1E2421]/70 leading-relaxed mb-10">
              Trabajamos con personas que valoran el tiempo y la claridad. Si buscas un socio tecnológico que hable tu mismo idioma, estás en el lugar adecuado.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {segments.map((segment, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 border border-[#F5F3EF] hover:border-[#D9B25F]/30 transition-colors">
                  <div className="w-1.5 h-1.5 bg-[#D9B25F] rounded-full"></div>
                  <span className="text-[#1E2421] font-medium">{segment}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Imagery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden group">
                  <img 
                    src="/images/target-webs.jpg"
                    alt="Negocio local" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5"></div>
                </div>
                <div className="p-4 bg-[#F5F3EF] text-xs uppercase tracking-widest text-[#153B2E]">
                  Enfoque: Negocios Locales
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] overflow-hidden group">
                  <img 
                    src="/images/target-ia.jpg" 
                    alt="Despachos profesionales" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5"></div>
                </div>
                <div className="p-4 bg-[#F5F3EF] text-xs uppercase tracking-widest text-[#153B2E]">
                  Enfoque: Despachos y Pymes
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
