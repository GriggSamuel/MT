// script.js
document.addEventListener('DOMContentLoaded', () => {
  const topBar     = document.querySelector('.top-bar');
  const mainNav    = document.querySelector('.main-nav');
  const hero       = document.querySelector('.hero-section');
  const heroTop    = hero.offsetTop;
  let   lastY      = window.pageYOffset;

  // optional initial fade-in
  setTimeout(() => mainNav.classList.add('nav-color'), 1000);

  window.addEventListener('scroll', () => {
    const currentY = window.pageYOffset;
    const scrollUp = currentY < lastY;

    // keep blue bg on whenever you're not at the very top
    mainNav.classList.toggle('nav-color', currentY > 0);

    if (!scrollUp) {
      // scrolling down: hide white bar, slide nav up
      topBar.classList.add('hidden');
      mainNav.classList.add('nav-up');
    } else {
      // scrolling up: only reveal when crossing into the hero's top
      // or hitting the very top of the page
      const hitHeroTop   = lastY >= heroTop && currentY < heroTop;
      const hitPageTop   = lastY > 0 && currentY === 0;

      if (hitHeroTop || hitPageTop) {
        topBar.classList.remove('hidden');
        mainNav.classList.remove('nav-up');
      }
    }

    lastY = currentY;
  });
});
