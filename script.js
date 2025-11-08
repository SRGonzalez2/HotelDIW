const swiperEl = document.querySelector('.ac-sections swiper-container');
const swiperRooms = document.querySelector('.ac-rooms-lg swiper-container');
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


const changeTab = (tabToOpen) => {
    const tabHeaders = document.querySelectorAll(".tab-header-element");
    const serviceTab = document.getElementById("servicesTab");
    const roomsTab = document.getElementById("roomsTab")

    tabHeaders.forEach((header) => {
        header.classList.toggle('active')
    })

    if (tabToOpen == "servicesTab") {
        roomsTab.style.display = "none";
        serviceTab.style.display = "block";

    } else {
        roomsTab.style.display = "block";
        serviceTab.style.display = "none";
    }



}   