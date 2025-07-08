function orderNow() {
    alert("Thanks for choosing TastyBite! Ordering feature coming soon.");
  }
// Sticky Navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.position = 'sticky';
  navbar.style.top = '0';
  navbar.style.zIndex = '999';
  
});

// Hamburger Menu - Top-right, horizontal, no collision
const createHamburger = () => {
  const navbar = document.querySelector('.navbar');
  const ul = navbar.querySelector('ul');

  // Style <ul> for fixed dropdown
  ul.style.position = 'fixed';
  ul.style.top = '60px'; // below navbar
  ul.style.right = '0';
  ul.style.backgroundColor = '#000';
  ul.style.padding = '10px';
  ul.style.flexDirection = 'row';
  ul.style.zIndex = '998';
  ul.style.display = 'none';

  // Create hamburger icon
  const hamburger = document.createElement('div');
  hamburger.innerHTML = '&#9776;';
  hamburger.style.fontSize = '30px';
  hamburger.style.color = '#fff';
  hamburger.style.cursor = 'pointer';
  hamburger.style.display = 'none';
  hamburger.style.position = 'fixed';
  hamburger.style.right = '20px';
  hamburger.style.top = '20px';
  hamburger.style.zIndex = '1000';
  hamburger.style.backgroundColor = '#000';
  hamburger.style.padding = '5px 10px';
  hamburger.style.borderRadius = '5px';

  // Toggle menu display
  let menuOpen = false;
  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    ul.style.display = menuOpen ? 'flex' : 'none';
  });

  // Add hamburger to body
  document.body.appendChild(hamburger);

  // Handle visibility on resize
  const toggleHamburgerVisibility = () => {
    if (window.innerWidth <= 768) {
      hamburger.style.display = 'block';
      ul.style.display = menuOpen ? 'flex' : 'none';
    } else {
      hamburger.style.display = 'none';
      ul.style.position = 'static'; // default for large screen
      ul.style.display = 'flex';
    }
  };

  toggleHamburgerVisibility();
  window.addEventListener('resize', toggleHamburgerVisibility);
};

createHamburger();

// Section Animation on Scroll
const revealSections = () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(100px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
  });
};

revealSections();





     



