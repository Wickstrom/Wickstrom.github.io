(function () {
  'use strict';

  function init(carousel) {
    var slides = carousel.querySelectorAll('[data-news-carousel-track] > li');
    var prevBtn = carousel.querySelector('[data-news-carousel-prev]');
    var nextBtn = carousel.querySelector('[data-news-carousel-next]');
    var dots = carousel.querySelectorAll('[data-news-carousel-dot]');

    if (slides.length === 0) return;

    var current = 0;
    var total = slides.length;

    function show(index) {
      if (index < 0 || index >= total) return;
      for (var i = 0; i < total; i++) {
        var active = i === index;
        slides[i].classList.toggle('is-active', active);
        slides[i].setAttribute('aria-hidden', active ? 'false' : 'true');
        if (dots[i]) {
          dots[i].classList.toggle('is-active', active);
          dots[i].setAttribute('aria-selected', active ? 'true' : 'false');
        }
      }
      current = index;
      if (prevBtn) prevBtn.disabled = current === 0;
      if (nextBtn) nextBtn.disabled = current === total - 1;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () { show(current - 1); });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () { show(current + 1); });
    }
    for (var d = 0; d < dots.length; d++) {
      (function (i) {
        dots[i].addEventListener('click', function () { show(i); });
      })(d);
    }

    carousel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        show(current - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        show(current + 1);
      }
    });

    show(0);
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var carousels = document.querySelectorAll('.news-carousel');
    for (var i = 0; i < carousels.length; i++) init(carousels[i]);
  });
})();
