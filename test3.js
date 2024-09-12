const toySlider = new Swiper('.toy-swiper', {
    loop: true,
    autoplay: {
        delay: 2000, // Time in milliseconds between slide changes
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
    },
    slidesPerView: 1,
    spaceBetween: 20, // Optional: Space between slides
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});