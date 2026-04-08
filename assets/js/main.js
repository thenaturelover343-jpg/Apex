// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('mainNav');

  if (btn && nav) {
    btn.addEventListener('click', function() {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      btn.setAttribute('aria-expanded', expanded);
      btn.setAttribute('aria-label', expanded ? 'Menu sluiten' : 'Menu openen');
    });
  }

  // Fade-in scroll animation
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
  });
});
