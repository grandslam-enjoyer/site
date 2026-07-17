$(function () {

  /* ------------------ COUNTDOWN ------------------ */
  const el = document.getElementById("countdown");

  if (el) {
    const target = new Date(el.dataset.time).getTime();

    setInterval(() => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) return;

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);

      el.querySelector(".days").textContent = d;
      el.querySelector(".hours").textContent = h;
      el.querySelector(".minutes").textContent = m;
      el.querySelector(".seconds").textContent = s;
    }, 1000);
  }


  /* ------------------ SLICK + BAR ------------------ */

  const speed = 2500;
  const $slider = $('.ticket-slider');

  $slider.on('init', () => animate($('.slick-active')));

  $slider.on('beforeChange', () => {
    $('.bar span').css({ width: 0, transition: 'none' });
  });

  $slider.on('afterChange', () => animate($('.slick-active')));

  $slider.slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: speed,
    fade: true,
    arrows: false,
    dots: false
  });

  function animate($slide) {
    const bar = $slide.find('.bar span')[0];
    const target = bar.style.getPropertyValue('--bar-width');

    setTimeout(() => {
      bar.style.transition = `width ${speed}ms linear`;
      bar.style.width = target;
    }, 50);
  }

});$(function () {

  /* ------------------ COUNTDOWN ------------------ */
  const el = document.getElementById("countdown");

  if (el) {
    const target = new Date(el.dataset.time).getTime();

    setInterval(() => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) return;

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);

      el.querySelector(".days").textContent = d;
      el.querySelector(".hours").textContent = h;
      el.querySelector(".minutes").textContent = m;
      el.querySelector(".seconds").textContent = s;
    }, 1000);
  }


  /* ------------------ SLICK + BAR ------------------ */

  const speed = 2500;
  const $slider = $('.ticket-slider');

  $slider.on('init', () => animate($('.slick-active')));

  $slider.on('beforeChange', () => {
    $('.bar span').css({ width: 0, transition: 'none' });
  });

  $slider.on('afterChange', () => animate($('.slick-active')));

  $slider.slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: speed,
    fade: true,
    arrows: false,
    dots: false
  });

  function animate($slide) {
    const bar = $slide.find('.bar span')[0];
    const target = bar.style.getPropertyValue('--bar-width');

    setTimeout(() => {
      bar.style.transition = `width ${speed}ms linear`;
      bar.style.width = target;
    }, 50);
  }

});