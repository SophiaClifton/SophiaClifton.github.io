document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.image-gallery img');
    const overlay = document.getElementById('overlay');
    const enlargedImage = document.getElementById('enlarged-image');
    const closeButton = document.getElementById('close-button');

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

    const menuItems = document.querySelectorAll('ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: targetSection.offsetTop
                });
            }
        });
    });

    closeButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent overlay click event from triggering
        overlay.style.display = 'none';
    });
    
    // Add touch event listener
    closeButton.addEventListener('touchstart', function (e) {
        //e.stopPropagation();
        overlay.style.display = 'none';
    });

    // Highlight the current menu item when scrolling to a section
    window.addEventListener('scroll', function () {
        let current = '';
        section.forEach(section => {
            const sectionTop = section.offsetTop;
            if (this.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });

        // Check scroll position to fix or unfix the menu
        if (this.scrollY > 50) {
            menu.style.top = '-10px';
        } else {
            menu.style.top = '-10px';
        }
    });

    function updateBannerSize() {
        const banner = document.getElementById('banner');
        const viewportHeight = window.innerHeight;
        const bannerHeight = viewportHeight * 0.4; // Adjust this percentage as needed
    
        banner.style.height = bannerHeight + 'px';
    }
    
    window.addEventListener('resize', updateBannerSize);
    window.addEventListener('load', updateBannerSize);

    function updateBannerSize() {
        const banner = document.getElementById('banner');
        const viewportHeight = window.innerHeight;
        const bannerHeight = viewportHeight * 0.4; // Adjust this percentage as needed
    
        banner.style.height = bannerHeight + 'px';
    }
    
    window.addEventListener('resize', updateBannerSize);
    window.addEventListener('load', updateBannerSize);

});
