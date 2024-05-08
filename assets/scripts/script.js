// ##################################
// ### Global variables/constants ###
// ##################################
// Hidden sections
const sectionEls = document.querySelectorAll("[data-hidden]");

const options = {
	rootMargin: "-10%",
};

// The IntersectionObserver for the sections to fade in and out.
const observer = new IntersectionObserver(entries=>{
	entries.forEach(entry=>{
		if(entry.isIntersecting) {
			entry.target.classList.remove(entry.target.dataset.hidden);
		} else {
			entry.target.classList.add(entry.target.dataset.hidden);
		}
	});
}, options);

// Elements to click
const bottle1Clicked = document.querySelector('#bottle_1');
const bottle2Clicked = document.querySelector('#bottle_2');
const bottle3Clicked = document.querySelector('#bottle_3');
const bottle4Clicked = document.querySelector('#bottle_4');

// #######################
// ### Event listeners ###
// #######################
// Add event listener for scroll events
window.addEventListener('scroll', handleScroll);



// #################
// ### Functions ###
// #################
// Function to check if an element is in the viewport (with code help from ChatGPT 3.5) - Jon
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function handleScroll() {
	const elements = document.querySelectorAll(".delayed-animation");
	elements.forEach(element => {
		if (isInViewport(element)) {
		element.classList.add("delayed-animation--active");
		}
	});
}



// Initial functions to run
handleScroll();
sectionEls.forEach(el=>observer.observe(el));
