// Initialize Swiper
var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false, // Fixed typo: `allowtouchmove` to `allowTouchMove`
    grabCursor: false, // Fixed typo: `grabcursor` to `grabCursor`
    cubeEffect: {
        shadow: true,
        slideShadows: true, // Fixed typo: `slideshadow` to `slideShadows`
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true,
});

// Custom slider event
swiper.on('slideChange', function () {
    console.log('Slide changed to:', swiper.activeIndex);
});

// Navigation function
function navigate(index) {
    // Remove the "activelink" class from all links
    document.querySelectorAll(".links li").forEach((link) => {
        link.classList.remove("activelink");
    });

    // Add "activelink" class to the selected link
    const links = Array.from(document.querySelectorAll(".links li"));
    if (links[index]) {
        links[index].classList.add("activelink");
    }

    // Slide to the specified index
    swiper.slideTo(index, 1000, true);
}

// JavaScript for Interactivity
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const serviceName = card.getAttribute('data-service');
        alert(`You clicked on the ${serviceName} service!`);
        // You can replace this alert with more dynamic functionality, such as opening a modal.
    });
});
