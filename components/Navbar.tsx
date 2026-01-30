export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__brand">NODUS</div>

        <nav className="nav__links" aria-label="Primary">
          <a href="#servicios">Servicios</a>
          <a href="#para-quien">Para quién</a>
          <a href="#como-trabajamos">Cómo trabajamos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="nav__cta" href="#contacto">
          Solicitar Presupuesto
        </a>
      </div>

      <style>{`
        .nav{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 18px 6vw;
        }

        .nav__inner{
          width: min(1200px, 100%);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .nav__brand{
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.18em;
          font-size: 14px;
          text-transform: uppercase;
        }

        .nav__links{
          display: flex;
          gap: 22px;
          align-items: center;
        }

        .nav__links a{
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 13px;
        }

        .nav__links a:hover{
          color: rgba(255,255,255,1);
        }

        .nav__cta{
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          font-size: 13px;
          padding: 10px 14px;
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 6px;
          background: rgba(0,0,0,0.15);
        }

        .nav__cta:hover{
          border-color: rgba(255,255,255,0.6);
          background: rgba(0,0,0,0.22);
        }

        /* Mobile: hide links, keep CTA */
        @media (max-width: 768px){
          .nav__links{
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
