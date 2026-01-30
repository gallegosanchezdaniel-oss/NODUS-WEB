
import React from 'react';

interface ServicesProps {
  onCtaClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onCtaClick }) => {
  const serviceList = [
    {
      title: "Webs y landing pages",
      desc: "Diseño y desarrollo de sitios centrados en la conversión y la claridad del mensaje. Menos adornos, más resultados.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Contenido digital",
      desc: "Blog, redes sociales y newsletters. Estrategia de contenidos que posiciona a tu negocio como una autoridad en su sector.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Automatización e IA",
      desc: "Sistemas prácticos que ahorran tiempo y errores humanos. Aplicamos tecnología solo donde realmente aporta valor al margen.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      isCta: true
    }
  ];

  return (
    <div className="py-24 md:py-32 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl mb-16 text-[#153B2E]">Nuestros Servicios</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceList.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 flex flex-col items-center text-center shadow-sm border-b-4 border-transparent hover:border-[#D9B25F] transition-all"
            >
              <div className="text-[#D9B25F] mb-8">{service.icon}</div>
              <h3 className="text-2xl mb-4 text-[#153B2E]">{service.title}</h3>
              <p className="text-[#1E2421]/60 leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              {service.isCta ? (
                <button 
                  onClick={onCtaClick}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-[#153B2E] flex items-center gap-2 hover:text-[#D9B25F] transition-colors"
                >
                  Agendar reunión <span className="text-lg">→</span>
                </button>
              ) : (
                <div className="h-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
