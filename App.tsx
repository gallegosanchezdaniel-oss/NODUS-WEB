import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Services from './components/Services';
import Process from './components/Process';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AssistantModal from './components/AssistantModal';

const App: React.FC = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const toggleAssistant = () => setIsAssistantOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Navbar />

      <main>
        <Hero onCtaClick={toggleAssistant} />

        <section id="para-quien">
          <TargetAudience />
        </section>

        <section id="servicios">
          <Services onCtaClick={toggleAssistant} />
        </section>

        <section id="como-trabajamos">
          <Process />
        </section>

        <section id="contacto">
          <FinalCTA onCtaClick={toggleAssistant} />
        </section>
      </main>

      <Footer />

      {isAssistantOpen && (
        <AssistantModal onClose={() => setIsAssistantOpen(false)} />
      )}
    </div>
  );
};

export default App;
