
// Add class = "swiper mySwiper";
let wrapper = document.querySelectorAll("#swiper-wrapper");

// Delete class = "row d-flex justify-content-center";
let slider = document.querySelectorAll("#slider");

// Delete class = "card-box";
let slide = document.querySelectorAll("#slide");

//Delete class = "d-none";
let buttons = document.querySelectorAll("#buttons");



window.addEventListener("resize", function(event) {
    if (window.innerWidth < 992) {
      //add wrapper
      wrapper.forEach(elem => elem.classList.add("swiper", "mySwiper"));
      //remove slider
      slider.forEach(elem => elem.classList.remove("row", "d-flex", "justify-content-center"));
      //remove slide
      slide.forEach(elem => elem.classList.remove("card-box"));
      //remove buttons
      buttons.forEach(elem => elem.classList.remove("d-none"));
/*
      console.log(wrapper.classList);
      console.log(slider.classList);
      slide.forEach(elem => console.log(elem.classList));
*/
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      //remove wrapper
      wrapper.forEach(elem => elem.classList.remove("swiper", "mySwiper"));
      //add slider
      slider.forEach(elem => elem.classList.add("row", "d-flex", "justify-content-center"));
      //add slide
      slide.forEach(elem => elem.classList.add("card-box"));
      //add buttons
      buttons.forEach(elem => elem.classList.add("d-none"));

    };
});