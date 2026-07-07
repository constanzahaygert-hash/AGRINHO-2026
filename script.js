:root{
  --green:#2E7D32;
  --yellow:#FBC02D;
  --brown:#6D4C41;
  --white:#ffffff;
  --blue:#0288D1;
  --bg:#F6F7F3;
  --text:#263238;
  --muted:#6B7280;
  --max-width:1100px;
  --radius:10px;
  --gap:1.25rem;
  font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  color:var(--text);
  background:linear-gradient(180deg,var(--bg),#fff);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.5;
  font-size:16px;
}

.container{
  max-width:var(--max-width);
  margin:0 auto;
  padding:1rem;
}

/* Header */
.site-header{
  background:rgba(255,255,255,0.9);
  position:sticky;
  top:0;
  z-index:40;
  border-bottom:1px solid #e6e6e6;
  backdrop-filter:blur(6px);
}
.header-inner{display:flex;align-items:center;gap:1rem;justify-content:space-between}
.logo{display:flex;align-items:center;gap:.6rem;text-decoration:none;color:var(--text)}
.logo-mark{border-radius:6px}
.logo-text{font-weight:700}

/* Nav */
.main-nav{position:relative}
.nav-toggle{display:none;background:transparent;border:0;font-size:1.25rem}
.nav-list{display:flex;gap:1rem;list-style:none;margin:0;padding:0}
.nav-list a{text-decoration:none;color:var(--text);padding:.5rem .6rem;border-radius:6px}
.nav-list a:hover{background:#f0f6f1;color:var(--green)}

/* Hero */
.hero{padding:2.5rem 0}
.hero-inner{display:flex;gap:2rem;align-items:center;justify-content:space-between}
.hero-text{max-width:55%}
.lede{color:var(--muted)}
.hero-ctas{margin-top:1rem;display:flex;gap:.75rem}
.btn{background:var(--green);color:var(--white);padding:.6rem 1rem;border-radius:8px;text-decoration:none;border:0;cursor:pointer}
.btn-outline{background:transparent;border:2px solid var(--green);color:var(--green)}
.hero-media{width:45%}
.hero-cards{display:flex;gap:.6rem;flex-wrap:wrap;justify-content:flex-end}
.card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 6px 18px rgba(16,24,40,0.06)}
.card.small{width:120px;height:90px}
.card.medium{width:220px;height:140px}
.card img{width:100%;height:100%;object-fit:cover;display:block}

/* Sections */
.section{padding:2rem 0}
.cards-grid .cards{display:flex;gap:1rem;flex-wrap:wrap}
.info-card{flex:1 1 220px;background:#fff;padding:1rem;border-radius:10px;box-shadow:0 6px 18px rgba(16,24,40,0.06)}
.stats{display:flex;gap:1rem;margin-top:1rem}
.stat{flex:1;background:#fff;padding:1rem;border-radius:10px;text-align:center;box-shadow:0 6px 18px rgba(16,24,40,0.04)}
.two-col{display:flex;gap:2rem;align-items:flex-start}
.icons-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:.75rem}
.icon{display:flex;gap:.6rem;align-items:center;background:#fff;padding:.6rem;border-radius:8px;box-shadow:0 6px 18px rgba(16,24,40,0.04)}
.icon svg{width:36px;height:36px}
.chart .bar-chart{background:#fff;padding:1rem;border-radius:10px;box-shadow:0 6px 18px rgba(16,24,40,0.04)}
.bar{height:32px;background:linear-gradient(90deg,var(--green),var(--yellow));border-radius:6px;margin:0.5rem 0;padding:0.35rem 0.6rem;color:#fff;display:flex;align-items:center;justify-content:space-between;width:var(--value)}
.alert{background:linear-gradient(90deg,#fff7e6,#fff);border-left:6px solid var(--yellow);padding:1rem;border-radius:6px}

/* Solutions */
.solutions-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}
.timeline{display:flex;gap:.75rem;margin-top:1rem}
.tl-step{background:#fff;padding:.75rem;border-radius:8px;box-shadow:0 6px 18px rgba(16,24,40,0.04);flex:1}

/* Interactive forms */
.interactive .quiz-form, .interactive .calc-form{background:#fff;padding:1rem;border-radius:10px;box-shadow:0 6px 18px rgba(16,24,40,0.04)}
.q{margin-bottom:.8rem}
.q label{display:block;margin:0.35rem 0}
.q-actions{display:flex;gap:.6rem;margin-top:.8rem}
.result{margin-top:.8rem;padding:.6rem;border-radius:6px;background:#f6fff6;border:1px solid #e6f3ea;color:var(--green)}

/* Gallery */
.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:.6rem}
.gallery-grid img{width:100%;height:140px;object-fit:cover;border-radius:8px;cursor:pointer;display:block;box-shadow:0 6px 18px rgba(16,24,40,0.04)}

/* Contact */
.contact-form{background:#fff;padding:1rem;border-radius:10px;box-shadow:0 6px 18px rgba(16,24,40,0.04)}
.contact-form label{display:block;margin-bottom:.6rem}
.contact-form input, .contact-form textarea{width:100%;padding:.6rem;border-radius:6px;border:1px solid #e6e6e6}

/* Footer */
.site-footer{padding:1.25rem 0;background:#fff;border-top:1px solid #eee;margin-top:2rem}
.site-footer .small{color:var(--muted);font-size:.9rem}

/* Lightbox */
.lightbox{position:fixed;inset:0;background:rgba(10,10,12,0.7);display:none;align-items:center;justify-content:center;flex-direction:column;padding:1rem}
.lightbox[aria-hidden="false"]{display:flex}
.lightbox-image{max-width:min(90%,900px);max-height:70vh;border-radius:8px;box-shadow:0 10px 30px rgba(2,6,23,0.6)}
.lightbox-caption{color:#fff;margin-top:.6rem}
.lightbox-close{position:absolute;top:1rem;right:1rem;background:transparent;border:0;color:#fff;font-size:1.3rem}

/* Responsive */
@media (max-width:900px){
  .hero-inner{flex-direction:column;align-items:flex-start}
  .hero-text{max-width:100%}
  .hero-media{width:100%}
  .two-col{flex-direction:column}
  .solutions-grid{grid-template-columns:repeat(1,1fr)}
  .gallery-grid{grid-template-columns:repeat(2,1fr)}
  .nav-toggle{display:block}
  .nav-list{position:absolute;right:1rem;top:64px;background:#fff;padding:0.75rem;border-radius:8px;flex-direction:column;display:none;box-shadow:0 8px 30px rgba(2,6,23,0.12)}
  .nav-list.show{display:flex}
}

@media (max-width:600px){
  .gallery-grid img{height:110px}
  .card.small{width:90px;height:70px}
  .card.medium{width:160px;height:110px}
}
