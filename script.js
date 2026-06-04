/* ============================================
   PORTFOLIO JAVASCRIPT

   This file handles interactive behavior:
   - Mobile menu toggle
   - Navbar shadow on scroll
   - Smooth scroll for nav links
   - Contact form handling
   - Scroll-triggered animations
   ============================================ */

// ---- MOBILE MENU TOGGLE ----
// Opens/closes the navigation menu on small screens
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});


// ---- NAVBAR SHADOW ON SCROLL ----
// Adds a subtle shadow to the navbar after you scroll down
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ---- CONTACT FORM ----
// Since this is a static site with no backend, the form
// shows a confirmation message. Later you can connect it
// to a service like Formspree or Netlify Forms.
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic check
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Show confirmation (replace this with a real form service later)
  alert(`Thanks, ${name}! Your message has been received. I'll get back to you soon.`);
  contactForm.reset();
});


// ---- SCROLL ANIMATIONS ----
// Elements fade in as you scroll down to them.
// This uses the Intersection Observer API.
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Observe all sections and project cards
document.querySelectorAll('section, .project-card, .featured-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
