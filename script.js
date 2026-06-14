const cards = document.querySelectorAll('.card, .profile-card, .stack-board, .quote-section, .console-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

cards.forEach((card) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(14px)';
  card.style.transition = 'opacity .55s ease, transform .55s ease';
  observer.observe(card);
});

const style = document.createElement('style');
style.textContent = `.visible{opacity:1!important;transform:translateY(0)!important}`;
document.head.appendChild(style);
