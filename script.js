const nav = document.querySelector(".nav"),
  // searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

// searchIcon.addEventListener("click", () => {
//   nav.classList.toggle("openSearch");
//   nav.classList.remove("openNav");
//   if (nav.classList.contains("openSearch")) {
//     return searchIcon.classList.replace("uil-search", "uil-times");
//   }
//   searchIcon.classList.replace("uil-times", "uil-search");
// });

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  // nav.classList.remove("openSearch");
  // searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});




// swiper for branding
   
   const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 1000, // Time in milliseconds between slide changes
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
    },
    slidesPerView: 1,
    spaceBetween: 20, // Optional: Space between slides
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 7,
        },
    },
});



