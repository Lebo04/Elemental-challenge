// $(document).ready(function () {
//   const slideCount = $(".slide").length;
//   let currentIndex = 0;

//   function showSlide(index) {
//     $(".slide").hide();
//     $(".slide").eq(index).show();
//   }

//   showSlide(currentIndex);

//   $(".next-button").click(function () {
//     currentIndex = (currentIndex + 1) % slideCount;
//     showSlide(currentIndex);
//   });

//   $(".prev-button").click(function () {
//     currentIndex = (currentIndex - 1 + slideCount) % slideCount;
//     showSlide(currentIndex);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelectorAll(".slide");
//   const dots = document.querySelectorAll(".dot");

//   let currentIndex = 0;

//   function showSlide(index) {
//     slides.forEach((slide) => {
//       slide.style.display = "none";
//     });
//     dots.forEach((dot) => {
//       dot.classList.remove("active");
//     });

//     slides[index].style.display = "block";
//     dots[index].classList.add("active");
//   }

//   showSlide(currentIndex);

//   dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//       currentIndex = index;
//       showSlide(currentIndex);
//     });
//   });
// });

$(document).ready(function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    slides[index].style.display = "block";
    dots[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);

  $(".next-button").click(nextSlide);
  $(".prev-button").click(prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });
});
