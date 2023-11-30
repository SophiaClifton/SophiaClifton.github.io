document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.image-gallery img');
    const overlay = document.getElementById('overlay');
    const enlargedImage = document.getElementById('enlarged-image');
    const closeButton = document.getElementById('close-button');
    const menu = document.getElementById('menu');

    galleryImages.forEach(image => {
        image.addEventListener('click', function () {
            const src = this.getAttribute('src');
            enlargedImage.setAttribute('src', src);
            overlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent overlay click event from triggering
        overlay.style.display = 'none';
    });

    closeButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent overlay click event from triggering
    overlay.style.display = 'none';
    });

    // Add touch event listener
    closeButton.addEventListener('touchstart', function (e) {
        e.stopPropagation();
        overlay.style.display = 'none';
    });

    const offsetValue = 50;
    const menuItems = document.querySelectorAll('ul li a');
    const sections = document.querySelectorAll('section');

    menuItems.forEach(item => {
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

    function updateBannerSize() {
        const banner = document.getElementById('banner');
        if (banner) {
            const viewportHeight = window.innerHeight;
            const bannerHeight = viewportHeight * 0.4; // Adjust this percentage as needed
            banner.style.height = bannerHeight + 'px';
        }
    }

    window.addEventListener('resize', updateBannerSize);
    window.addEventListener('load', updateBannerSize);
});

console.log("Hiya! I see you're snooping about.");
console.log("Not sure what you're hoping to find...");
console.log("But whatever it is, feel free to message me and ask :)");
console.log("438-499-8170");