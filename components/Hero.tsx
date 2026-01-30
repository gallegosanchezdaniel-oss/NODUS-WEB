type HeroProps = {
  onCtaClick?: () => void;
};

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="hero">
      {/* Fondo (imagen limpia) */}
      <div className="hero__bg" />

      {/* Capa para legibilidad */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Líneas (overlay SVG) */}
      <svg
        className="hero__lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Líneas verticales finas */}
        <line x1="44" y1="6" x2="44" y2="94" />
        <line x1="72" y1="10" x2="72" y2="90" />

        {/* Subrayado corto bajo el claim */}
        <line x1="72" y1="58" x2="82" y2="58" />

        {/* Esquina inferior derecha tipo L */}
        <path d="M95 95 L95 88 M95 95 L88 95" />
      </svg>

      {/* Contenido */}
      <div className="hero__content">
        <div className="hero__left">
          <h1 className="hero__brand">NODUS</h1>
        </div>

        <div className="hero__right">
          <p className="hero__claim">
            Soluciones digitales
            <br />
            para negocios reales
          </p>

          {/* (Opcional) Si quieres un botón que use tu onCtaClick */}
          {/* <button className="hero__btn" onClick={onCtaClick}>
            Solicitar presupuesto
          </button> */}
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        Scroll ↓
      </div>

      <style>{`
        .hero{
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: grid;
          align-items: center;
        }

        .hero__bg{
          position: absolute;
          inset: 0;
          background-image: url("/hero2.jpg");
          background-size: cover;
          background-position: center;
          transform: scale(1.02);
        }

        .hero__overlay{
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,0.35) 0%,
            rgba(0,0,0,0.18) 55%,
            rgba(0,0,0,0.28) 100%
          );
        }

        .hero__lines{
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .hero__lines line,
        .hero__lines path{
          stroke: rgba(255,255,255,0.35);
          stroke-width: 0.25;
          filter: drop-shadow(0 0 0.35px rgba(255,255,255,0.25));
        }

        .hero__content{
          position: relative;
          z-index: 3;
          width: min(1200px, 100%);
          margin: 0 auto;
          padding: 0 6vw;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4vw;
        }

        .hero__brand{
          margin: 0;
          font-size: clamp(56px, 7vw, 120px);
          color: #fff;
          line-height: 1;
        }

        .hero__claim{
          margin: 0;
          font-size: clamp(24px, 3vw, 44px);
          color: rgba(255,255,255,0.9);
          line-height: 1.15;
        }

        .hero__scroll{
          position: absolute;
          left: 50%;
          bottom: 24px;
          transform: translateX(-50%);
          z-index: 3;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }

        @media (max-width: 768px){
          .hero__content{
            grid-template-columns: 1fr;
            padding-top: 90px;
            padding-bottom: 90px;
          }
          .hero__right{
            margin-top: 14px;
          }
        }
      `}</style>
    </section>
  );
}
