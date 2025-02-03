// const track = document.querySelector('.carousel-track');
// const prevButton = document.querySelector('.carousel-button.prev');
// const nextButton = document.querySelector('.carousel-button.next');
// const cards = document.querySelectorAll('.tutor-card');

// let currentIndex = 0;

// function updateCarousel() {
//   const cardWidth = cards[0].offsetWidth + 16; // Include margin
//   track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
// }

// prevButton.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateCarousel();
//   }
// });

// nextButton.addEventListener('click', () => {
//   if (currentIndex < cards.length - 1) {
//     currentIndex++;
//     updateCarousel();
//   }
// });

// window.addEventListener('resize', updateCarousel);

function toggleMenu() {
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu-icon');

  menu.classList.toggle('active');    // Toggle menu visibility
  menuIcon.classList.toggle('open');  // Animate the hamburger icon
}

document.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll(".hero-img");
  let currentIndex = 0;

  function changeImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
  }

  setInterval(changeImage, 5000); // Change image every 6 seconds
});

// window.onload = function() {
//   if (performance.navigation.type === 1) {
//     window.location.href = 'main.html';
//   }
// };

// function showForm() {
//   document.getElementById('tutorFormContainer').style.display = 'block';
// }

// function closeForm() {
//   document.getElementById('tutorFormContainer').style.display = 'none';
// }

// function closeUniqueFeatures() {
//   document.getElementById('uniqueFeatures').style.display = 'none';
// }

// document.getElementById('tutorForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Simulate form submission success
//   const successMessage = document.getElementById('successMessage');
//   successMessage.style.display = 'block';

//   // Clear the form
//   event.target.reset();
// });