// Scroll Progress Bar
window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let docHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercentage = (scrollPosition / docHeight) * 100;
  document.getElementById('scroll-progress-bar').style.width = scrollPercentage + '%';
});

// Button Click Navigation (for "Click here" button in hero section)
document.getElementById('btn-click').addEventListener('click', function() {
  // Scroll smoothly to Product Categories Section (using scrollIntoView)
  document.querySelector('.product-categories').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Smooth Transition for "MII" to "MADE IN INDIA" Text
window.addEventListener('load', function() {
  const miiText = document.querySelector('.transition-text');
  const transitionText = document.querySelector('.transition-text');
  
  // Initial state (MII)
  miiText.style.opacity = 1;
  
  // Transition from MII to MADE IN INDIA
  setTimeout(() => {
    transitionText.innerText = 'MADE IN INDIA'; // Change text
    miiText.style.transition = 'opacity 2s ease-out'; // Apply transition for smooth fade
    miiText.style.opacity = 0; // Fade out MII
  }, 3000); // Wait for 3 seconds before transitioning
  
  // Reapply MII and fade in the new text after transition
  setTimeout(() => {
    transitionText.innerText = 'MADE IN INDIA'; // Final Text
    miiText.style.transition = 'opacity 1s ease-in';
    miiText.style.opacity = 1; // Fade in the new text
  }, 5000); // Wait another 2 seconds before fading in new text
});

// Button Hover Effect Animation
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseenter', function() {
    button.style.transform = 'scale(1.05)';
    button.style.transition = 'transform 0.3s ease';
  });

  button.addEventListener('mouseleave', function() {
    button.style.transform = 'scale(1)';
  });
});

// Parallax Scroll Effect (for Parallax Section)
window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.parallax');
  const scrollPosition = window.scrollY;

  parallax.style.backgroundPositionY = (scrollPosition * 0.3) + 'px'; // Control parallax speed
});

// Client Testimonials Slider
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.style.display = 'block';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % totalTestimonials; // Loop through testimonials
  showTestimonial(testimonialIndex);
}, 5000); // Change testimonial every 5 seconds

// Smooth Scroll Effect for Anchors (For Menu Navigation)
const menuLinks = document.querySelectorAll('a[href^="#"]');
menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
