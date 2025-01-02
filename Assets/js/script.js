document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // Apply Now button functionality
  const applyButton = document.querySelector('#hero button');
  if (applyButton) {
      applyButton.addEventListener('click', function() {
          alert('Thank you for your interest in our university! Please visit our Admissions page to start your application process.');
      });
  }

  // Header style change on scroll
  const header = document.querySelector('header');
  if (header) {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 100) {
              header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
          } else {
              header.style.backgroundColor = '#fff';
              header.style.boxShadow = 'none';
          }
      });
  }

  // script.js
// script.js
const hamburger = document.getElementById("hamburger");
const navLinkss = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinkss.classList.toggle("active");
  hamburger.classList.toggle("active");
});


  // Mobile menu toggle
//   const menuToggle = document.createElement('button');
//   menuToggle.textContent = 'APPLY NOW';
//   menuToggle.className = 'menu-toggle';
//   const nav = document.querySelector('nav');
//   if (nav) {
//       nav.appendChild(menuToggle);
//       menuToggle.addEventListener('click', () => {
//           nav.classList.toggle('menu-open');
//       });
//   }

  // News & Events hover effect
  const newsItems = document.querySelectorAll('.news-item');
  newsItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
          item.style.transform = 'scale(1.05)';
          item.style.transition = 'transform 0.3s ease';
      });
      item.addEventListener('mouseleave', () => {
          item.style.transform = 'scale(1)';
      });
  });

  // Simple form validation for a newsletter signup
  const footerForm = document.querySelector('footer form');
  if (footerForm) {
      footerForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const emailInput = this.querySelector('input[type="email"]');
          if (emailInput && emailInput.value) {
              alert(`Thank you for subscribing with email: ${emailInput.value}`);
              emailInput.value = '';
          } else {
              alert('Please enter a valid email address.');
          }
      });
  }

  // Lazy loading for images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.getAttribute('data-src');
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
          }
      });
  });

  images.forEach(img => imageObserver.observe(img));
});