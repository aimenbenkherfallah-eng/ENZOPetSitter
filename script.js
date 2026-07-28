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
