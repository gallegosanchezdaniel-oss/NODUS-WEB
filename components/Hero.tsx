<section className="hero">
  {/* líneas / decoración */}
  <div className="hero-lines" aria-hidden="true"></div>

  {/* contenido */}
  <div className="hero-content">
    <p className="hero-eyebrow">SOLUCIONES DIGITALES PARA NEGOCIOS REALES</p>

    <h1 className="hero-title">
      Soluciones digitales para<br />negocios reales
    </h1>

    <p className="hero-sub">
      Webs profesionales, contenido útil y automatización práctica para pymes que quieren orden,
      visibilidad y eficiencia. Sin humo ni complejidad innecesaria.
    </p>

    <div className="hero-ctas">
      <a className="btn btn-primary" href="#contacto">Solicitar presupuesto</a>
      <a className="btn btn-secondary" href="#contacto">Hablar con un especialista</a>
    </div>
  </div>
</section>
.hero{
  position: relative;
  min-height: 100vh;
  display: grid;
  align-items: center;
  padding: 80px 6vw;
  background: url("/images/hero.jpg") center/cover no-repeat;
  overflow: hidden;
}

/* capa para legibilidad sin “oscurecer” demasiado */
.hero::before{
  content:"";
  position:absolute; inset:0;
  background: linear-gradient(90deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.15) 55%, rgba(0,0,0,.25) 100%);
  pointer-events:none;
}

/* líneas como overlay (así no van “pegadas” a la foto) */
.hero-lines{
  position:absolute; inset:0;
  pointer-events:none;
  z-index: 1;
}
/* EJEMPLO: una vertical larga + subrayado bajo claim (ajusta a tu gusto) */
.hero-lines::before{
  content:"";
  position:absolute;
  top: 10%;
  bottom: 10%;
  left: 38%;
  width: 1px;
  background: rgba(255,255,255,.35);
  filter: blur(.2px);
}

/* contenido por encima de todo */
.hero-content{
  position: relative;
  z-index: 2;
  max-width: 720px;
}

/* tipografías responsivas */
.hero-eyebrow{ letter-spacing: .18em; font-size: 12px; opacity:.85; }
.hero-title{ font-size: clamp(42px, 5vw, 76px); line-height: 1.05; margin: 14px 0 16px; }
.hero-sub{ max-width: 52ch; opacity:.9; }
