// ---- Menu mobile (hamburger) ----
const burgerBtn = document.getElementById('burgerBtn');
const siteNav = document.getElementById('siteNav');

burgerBtn.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  burgerBtn.setAttribute('aria-expanded', isOpen);
});

// Ferme le menu quand on clique sur un lien (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
  });
});

// ---- Accordéon FAQ ----
document.querySelectorAll('.acc-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const panel = trigger.nextElementSibling;
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    // ferme les autres
    document.querySelectorAll('.acc-trigger').forEach(t => {
      t.setAttribute('aria-expanded', 'false');
      t.nextElementSibling.style.maxHeight = null;
    });

    if (!isOpen) {
      trigger.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

// ---- Header : ombre au scroll ----
const siteHeader = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

// ---- Révélation au scroll (IntersectionObserver) ----
const revealEls = document.querySelectorAll('.section, .card, .acc-item, .g-item');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => {
  if (!el.classList.contains('reveal')) el.classList.add('reveal');
  observer.observe(el);
});

// ---- Marquee : dupliquer le contenu pour une boucle parfaite ----
const marqueeTrack = document.getElementById('marqueeTrack');
if (marqueeTrack) {
  const clone = marqueeTrack.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  marqueeTrack.parentNode.appendChild(clone);
}
