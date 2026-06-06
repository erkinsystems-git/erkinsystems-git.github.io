/* ============================================================
   assets/js/main.js — Erkin Systems
============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ===================== Sticky Header Shadow =====================
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ===================== Mobile Nav Toggle =====================
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = mobileNav.classList.contains('open');
      navToggle.classList.toggle('open');
      mobileNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.setAttribute('aria-hidden', String(isOpen));
    });

    // Close drawer when a link is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('open');
        mobileNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // ===================== Scroll Reveal =====================
  const revealEls = document.querySelectorAll(
    '.service-card, .why-item, .team-card, .feature-item, .contact-info__item, .stat-item'
  );

  if ('IntersectionObserver' in window && revealEls.length > 0) {
    revealEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentElement.children);
          const delay = Math.min(siblings.indexOf(entry.target) * 75, 380);
          setTimeout(function () {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  // ===================== Active Nav Highlight =====================
  const currentPath = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.site-nav__link, .mobile-nav__link').forEach(function (link) {
    if (link.getAttribute('href').replace(/\/$/, '') === currentPath) {
      link.classList.add('active');
    }
  });

});
