const sections = document.querySelectorAll('.section');

function revealSections() {
  let visibleSection = null;
  let minDistance = Number.MAX_VALUE;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const triggerPoint = 100; // Adjust this value as needed

    // If the top of the section is within the viewport
    if (sectionTop < windowHeight - triggerPoint && sectionTop > -section.offsetHeight) {
      const distance = Math.abs(sectionTop);
      if (distance < minDistance) {
        minDistance = distance;
        visibleSection = section;
      }
    }
  });

  sections.forEach(section => {
    if (section === visibleSection) {
      section.classList.add('animated');
    } else {
      section.classList.remove('animated');
    }
  });
}

// Initial call to reveal sections that are already visible on page load
revealSections();

// Event listener for scroll
window.addEventListener('scroll', revealSections);
