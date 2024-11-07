// GSAP Animations
document.addEventListener("DOMContentLoaded", function () {
    // Header Animation
    gsap.from(".header h1", { duration: 1.5, y: -50, opacity: 0 });
    gsap.from(".header p", { duration: 1.5, delay: 0.5, y: 50, opacity: 0 });
    gsap.from(".header a", { duration: 1.5, delay: 1, scale: 0.8, opacity: 0 });

    // Features Animation
    gsap.from(".feature-box", { 
        scrollTrigger: ".features", 
        duration: 1.5, 
        opacity: 0, 
        y: 50, 
        stagger: 0.3 
    });

    // About Section Animation
    gsap.from(".about img", { 
        scrollTrigger: ".about", 
        duration: 1.5, 
        x: -50, 
        opacity: 0 
    });
    gsap.from(".about h2, .about p", { 
        scrollTrigger: ".about", 
        duration: 1.5, 
        x: 50, 
        opacity: 0 
    });
});
