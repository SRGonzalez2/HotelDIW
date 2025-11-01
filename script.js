const swiperEl = document.querySelector('.ac-sections swiper-container');
const nextBtn = document.querySelector('.ac-sections .next-button');
const prevBtn = document.querySelector('.ac-sections .prev-button');

// Configurar antes de inicializar
const swiperParams = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
        el: '.custom-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.next-button',
        prevEl: '.prev-button',
    }
};

Object.assign(swiperEl, swiperParams);
swiperEl.initialize();