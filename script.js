/* =========================================================
   AGRO SUSTENTÁVEL — script.js
   Menu responsivo · scroll reveal · ícones · quiz · calculadora
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  injectIcons();
  initHeaderScroll();
  initMenu();
  initSmoothNavHighlight();
  initReveal();
  initQuiz();
  initCalculator();
  initContactForm();
  initShare();
  initBackToTop();
});

/* ---------- Ícones inline (SVG minimalistas) ---------- */
const ICONS = {
  tractor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="2"/><path d="M9 18h6M9 9h4l3 4h2M9 9V5H4v4"/></svg>',
  chart:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2 20h20"/></svg>',
  grain:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c3 3 3 7 0 10-3-3-3-7 0-10z"/><path d="M12 12v10M8 15c1.5 1 3 1 4-1M16 15c-1.5 1-3 1-4-1"/></svg>',
  export:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0z"/><path d="M4 12h16M12 4c2 2.5 2 15.5 0 16M12 4c-2 2.5-2 15.5 0 16"/></svg>',
  satellite:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M13 9l4-4M4 4l3 3M17 17l3 3M9 15l-4 4M15 9l3-3M4 20l4-4"/></svg>',
  drop:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12z"/></svg>',
  drone:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M4 4l5 5M20 4l-5 5M4 20l5-5M20 20l-5-5"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/></svg>',
  sun:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>',
  tree:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 6 11h3l-4 7h5v4h4v-4h5l-4-7h3z"/></svg>',
  'drop-warn':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12z"/><path d="M12 10v4M12 17h.01"/></svg>',
  smoke:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 21c2-2 2-4 0-6M10 21c2-2 2-4 0-6M15 21c2-2 2-4 0-6"/><path d="M8 9c-2-2-1-5 1-6 1 2 3 2 4 0 2 1 3 4 1 6"/></svg>',
  leaf:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20c8 0 16-6 16-16-10 0-16 8-16 16z"/><path d="M4 20c4-6 8-9 12-12"/></svg>',
  ai:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>',
  radar:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="M12 3v2M21 12h-2"/></svg>',
  gear:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.2-1.6l2-1.4-2-3.4-2.3.7a7 7 0 0 0-2.8-1.6L13.2 2h-2.4l-.5 2.7a7 7 0 0 0-2.8 1.6l-2.3-.7-2 3.4 2 1.4A7 7 0 0 0 5 12c0 .5 0 1 .2 1.6l-2 1.4 2 3.4 2.3-.7a7 7 0 0 0 2.8 1.6l.5 2.7h2.4l.5-2.7a7 7 0 0 0 2.8-1.6l2.3.7 2-3.4-2-1.4c.2-.6.2-1.1.2-1.6z"/></svg>'
};

function injectIcons(){
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });
}

/* ---------- Header: sombra ao rolar + progresso de leitura ---------- */
function initHeaderScroll(){
  const header = document.getElementById('siteHeader');
  const bar = document.getElementById('progressBar');
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,.06)' : 'none';
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + '%';
  };
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
}

/* ---------- Menu mobile ---------- */
function initMenu(){
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Nav ativo conforme seção visível ---------- */
function initSmoothNavHighlight(){
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');
  if (!('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(s => obs.observe(s));
}

/* ---------- Revelar elementos ao rolar ---------- */
function initReveal(){
  const targets = document.querySelectorAll(
    '.stat-card, .tech-card, .impact-card, .timeline-item, .panel, .hero-content'
  );
  targets.forEach(el => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)){
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting){
        setTimeout(() => entry.target.classList.add('is-visible'), i * 40);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold:.15 });

  targets.forEach(el => obs.observe(el));
}

/* ---------- Quiz sustentável ---------- */
const QUIZ_QUESTIONS = [
  {
    question: 'O que você faz com a água da chuva?',
    options: [
      { text: 'Deixo escoar normalmente', points: 0 },
      { text: 'Às vezes reaproveito em plantas', points: 1 },
      { text: 'Coleto e reutilizo sempre que possível', points: 2 },
    ]
  },
  {
    question: 'Com que frequência você recicla materiais?',
    options: [
      { text: 'Raramente', points: 0 },
      { text: 'Às vezes', points: 1 },
      { text: 'Sempre que possível', points: 2 },
    ]
  },
  {
    question: 'Como você avalia o impacto do seu consumo no meio ambiente?',
    options: [
      { text: 'Nunca pensei sobre isso', points: 0 },
      { text: 'Penso, mas nem sempre ajo', points: 1 },
      { text: 'Procuro sempre reduzir meu impacto', points: 2 },
    ]
  },
];

function initQuiz(){
  const body = document.getElementById('quizBody');
  const resultBox = document.getElementById('quizResult');
  const resultTitle = document.getElementById('quizResultTitle');
  const resultText = document.getElementById('quizResultText');
  const restartBtn = document.getElementById('quizRestart');

  let answers = new Array(QUIZ_QUESTIONS.length).fill(null);

  function render(){
    body.innerHTML = '';
    resultBox.hidden = true;
    body.hidden = false;

    QUIZ_QUESTIONS.forEach((q, qi) => {
      const wrap = document.createElement('div');
      wrap.className = 'quiz-question';

      const p = document.createElement('p');
      p.textContent = `${qi + 1}. ${q.question}`;
      wrap.appendChild(p);

      const opts = document.createElement('div');
      opts.className = 'quiz-options';

      q.options.forEach((opt, oi) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-option';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => {
          answers[qi] = opt.points;
          opts.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          if (answers.every(a => a !== null)) finish();
        });
        opts.appendChild(btn);
      });

      wrap.appendChild(opts);
      body.appendChild(wrap);
    });
  }

  function finish(){
    const total = answers.reduce((a, b) => a + b, 0);
    const max = QUIZ_QUESTIONS.length * 2;
    let title, text;

    if (total >= max - 1){
      title = 'Amigo do Meio Ambiente';
      text = 'Suas atitudes diárias já fazem diferença real na preservação dos recursos naturais.';
    } else if (total >= max / 2){
      title = 'Produtor Sustentável';
      text = 'Você está no caminho certo — pequenos ajustes podem ampliar ainda mais seu impacto positivo.';
    } else {
      title = 'Em transição';
      text = 'Todo mundo começa de algum lugar. Experimente adotar um novo hábito sustentável por semana.';
    }

    resultTitle.textContent = title;
    resultText.textContent = text;
    body.hidden = true;
    resultBox.hidden = false;
  }

  restartBtn.addEventListener('click', () => {
    answers = new Array(QUIZ_QUESTIONS.length).fill(null);
    render();
  });

  render();
}

/* ---------- Calculadora de impacto ambiental ---------- */
function initCalculator(){
  const form = document.getElementById('calcForm');
  const resultBox = document.getElementById('calcResult');
  const gaugeFill = document.getElementById('calcGaugeFill');
  const levelEl = document.getElementById('calcLevel');
  const textEl = document.getElementById('calcText');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const agua = Number(document.getElementById('agua').value) || 0;
    const energia = Number(document.getElementById('energia').value) || 0;
    const transporte = Number(document.getElementById('transporte').value) || 0;

    // Escala simplificada de referência para fins educativos
    const score = (agua / 200) * 33 + (energia / 300) * 33 + (transporte / 150) * 34;
    const clamped = Math.min(100, Math.max(0, Math.round(score)));

    let level, text;
    if (clamped < 34){
      level = 'Impacto baixo';
      text = 'Seus hábitos de consumo estão bem equilibrados com o meio ambiente. Continue assim.';
    } else if (clamped < 67){
      level = 'Impacto moderado';
      text = 'Há espaço para reduzir consumo de água, energia ou deslocamento sem grandes mudanças de rotina.';
    } else {
      level = 'Impacto alto';
      text = 'Pequenas trocas — irrigação eficiente, energia limpa, menos deslocamento — podem reduzir bastante seu impacto.';
    }

    gaugeFill.style.width = clamped + '%';
    levelEl.textContent = `${level} (${clamped}/100)`;
    textEl.textContent = text;
    resultBox.hidden = false;
  });
}

/* ---------- Formulário de contato (demonstrativo, sem backend) ---------- */
function initContactForm(){
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.hidden = false;
    form.reset();
    setTimeout(() => { note.hidden = true; }, 5000);
  });
}

/* ---------- Compartilhar ---------- */
function initShare(){
  document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const type = btn.dataset.share;
      const url = window.location.href;

      if (type === 'whatsapp'){
        window.open(`https://wa.me/?text=${encodeURIComponent('Confira este projeto sobre agronegócio sustentável: ' + url)}`, '_blank');
        return;
      }

      if (type === 'copy'){
        try {
          await navigator.clipboard.writeText(url);
          const original = btn.textContent;
          btn.textContent = 'Link copiado!';
          setTimeout(() => { btn.textContent = original; }, 2000);
        } catch {
          alert('Não foi possível copiar o link automaticamente.');
        }
      }
    });
  });
}

/* ---------- Botão voltar ao topo ---------- */
function initBackToTop(){
  const btn = document.getElementById('backToTop');
  document.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive:true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior:'smooth' });
  });
}
