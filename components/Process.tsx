
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { num: "01", title: "Entender el negocio", desc: "No hay solución técnica sin comprensión comercial previa." },
    { num: "02", title: "Ordenar y priorizar", desc: "Limpiamos el ruido para enfocarnos en lo que mueve la aguja." },
    { num: "03", title: "Construir soluciones", desc: "Desarrollo ágil y simple, sin complicaciones innecesarias." },
    { num: "04", title: "Acompañar y mejorar", desc: "Tu negocio evoluciona, y tu tecnología debe hacerlo con él." }
  ];

  return (
    <div className="py-24 md:py-32 bg-[#153B2E] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl mb-6">Cómo trabajamos</h2>
            <p className="text-white/60 leading-relaxed">
              Nuestro método se basa en el criterio y la pausa. No aplicamos la última tendencia por el hecho de ser nueva, sino porque resuelve un problema real.
            </p>
          </div>
          <div className="text-[#D9B25F] text-sm tracking-[0.3em] uppercase hidden md:block">
            El Método Nodus
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-[#D9B25F] text-5xl font-light opacity-20 mb-6 group-hover:opacity-100 transition-opacity">
                {step.num}
              </div>
              <h3 className="text-xl mb-3 border-l-2 border-[#D9B25F]/30 pl-4">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed pl-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
