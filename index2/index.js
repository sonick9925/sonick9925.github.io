const toggler = document.querySelector('.navbar-toggler');
const collapse = document.getElementById('navbarNav');
let closeMenu = document.querySelector('.close-menu')

closeMenu.onclick = function (){
    collapse.classList.toggle('show');
    // Блокуємо прокрутку при відкритому меню
    document.body.classList.toggle('offcanvas-backdrop');
}

toggler.addEventListener('click', function () {
    collapse.classList.toggle('show');

    // Блокуємо прокрутку при відкритому меню
    document.body.classList.toggle('offcanvas-backdrop');
});

// Закриття при натисканні на будь-який пункт меню
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        collapse.classList.remove('show');
        document.body.classList.remove('offcanvas-backdrop');
    });
});
 function toggleText() {
      const text = document.getElementById('moreText');
      const btn = document.querySelector('.toggle-btn');

      if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        btn.textContent = "Згорнути";
      } else {
        text.style.display = "none";
        btn.textContent = "Читати більше";
      }
    }




  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
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


