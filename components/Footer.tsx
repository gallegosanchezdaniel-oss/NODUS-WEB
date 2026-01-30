
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#153B2E] text-white/50 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-white text-2xl font-bold tracking-[0.2em] mb-6 block">NODUS</span>
            <p className="max-w-xs text-sm leading-relaxed mb-8">
              Consultoría tecnológica para pymes, negocios locales y despachos que buscan claridad y eficiencia digital.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#para-quien" className="hover:text-white transition-colors">Para quién</a></li>
              <li><a href="#como-trabajamos" className="hover:text-white transition-colors">Método</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Informes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} NODUS Digital Solutions S.L.</span>
          <span>Hecho con criterio para negocios reales.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
