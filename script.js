// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── COUNTER ANIMATION ──
function animateCounter(el, target, duration = 1400) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target).toLocaleString('pt-BR');
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// Observe pricing value for counter
const priceEl = document.querySelector('.price-counter');
if (priceEl) {
  const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(priceEl, 3200);
        priceObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  priceObserver.observe(priceEl);
}

// ── WHATSAPP CTA ──
const WHATSAPP_NUMBER = '5511999999999'; // ← substitua pelo número do Leo

document.querySelectorAll('[data-whatsapp]').forEach(btn => {
  btn.addEventListener('click', () => {
    const msg = encodeURIComponent('Olá! Vi a proposta e tenho interesse no Plano de Crescimento Digital. Podemos conversar?');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  });
});
