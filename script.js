document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.image-gallery img');
    const overlay = document.getElementById('overlay');
    const enlargedImage = document.getElementById('enlarged-image');
    const closeButton = document.getElementById('close-button');
    const menu = document.getElementById('menu');

    //image overlay
    galleryImages.forEach(image => {
        image.addEventListener('click', function () {
            const src = this.getAttribute('src');
            enlargedImage.setAttribute('src', src);
            overlay.style.display = 'flex';
        });
    });

    //for mouse
    closeButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent overlay click event from triggering
        overlay.style.display = 'none';
    });

    // Add touch event for phone...
    closeButton.addEventListener('touchstart', function (e) {
        e.stopPropagation();
        overlay.style.display = 'none';
    });

    //scrolling functionality
    const offsetValue = 50;
    const menuItems = document.querySelectorAll('ul li a');
    const sections = document.querySelectorAll('section');

    
    menuItems.forEach(item => {
        if (item.textContent.trim() === "Competitions") {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                slide(1);
            });
        } else {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const targetSection = document.querySelector(this.getAttribute('href'));
                if (targetSection) {
                    window.scroll({
                        behavior: 'smooth',
                        left: 0,
                        top: targetSection.offsetTop - offsetValue
                    });
                }
            });
        }
    });    
    

    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });

    });

    //banner size per screen
    function updateBannerSize() {
        const banner = document.getElementById('banner');
        if (banner) {
            const viewportHeight = window.innerHeight;
            const bannerHeight = viewportHeight * 0.4; 
            banner.style.height = bannerHeight + 'px';
        }
    }

    window.addEventListener('resize', updateBannerSize);
    window.addEventListener('load', updateBannerSize);
});

//swapping between pages
//const pages = document.querySelectorAll(".container .pages .page");
const translateAmount = 100;
let translate = 0;
let currentPage = 0; // Keep track of the current page

slide = (direction) => {
    const pages = document.querySelectorAll(".page");

    if(currentPage==0){
        currentPage = 1; // Increment or decrement the current page based on the direction
        translate = -translateAmount;
    }
    else{
        currentPage = 0;
        translate = 0;
    }
    pages.forEach(
        page => (page.style.transform = `translateX(${translate}%)`)
    );
};


console.log("Hiya! I see you're snooping about.");
console.log("Not sure what you're hoping to find...");
console.log("But whatever it is, feel free to message me and ask :)");
