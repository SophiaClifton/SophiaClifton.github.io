document.addEventListener('DOMContentLoaded', function () {
    const offsetValue = 50;
    const sections = document.querySelectorAll('section');
    const dropdownItems = document.querySelectorAll('.dropdown-content a');
    const menuItems = document.querySelectorAll('li a');
    const galleryImages = document.querySelectorAll('.image-gallery img');
    const overlay = document.getElementById('overlay');
    const enlargedImage = document.getElementById('enlarged-image');
    const closeButton = document.getElementById('close-button');

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

    // Function to handle scrolling to a section
    function scrollToSection(targetSection) {
        if (targetSection) {
            const offset = targetSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                behavior: 'smooth',
                top: offset - offsetValue
            });
        }
    }

    // Add event listeners to dropdown items
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            scrollToSection(targetSection);
        });
    });

    // Add event listeners to menu items
    menuItems.forEach(item => {
        const itemText=item.textContent.trim();
        if (itemText === "Competitions" || itemText === "Art Portfolio") {
            return;}
        else{
            item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            scrollToSection(targetSection);
        });}
    });

    // Highlight menu item when scrolling
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        // Remove active class from all items
        dropdownItems.forEach(item => {
            item.classList.remove('active');
        });
        menuItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to the current item
        const activeItem = document.querySelector(`ul li a[href="#${current}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    });

    $(document).ready(function() {
        // Function to handle page transition
        function slidePage(url) {
            $('body').addClass('page-slide-out2'); 
            setTimeout(function() {
                window.location.href = url; 
            }, 350); //wait for animation b4 for page load
        }
    
        // Handle click event for the Competitions link
        $("#link").on("click", function(event) {
            event.preventDefault();
            var url = $(this).attr("href");
            slidePage(url); 
        });
    });

    //    I want to resize banner size in specific conditions
    window.addEventListener('resize', updateBannerHeight);
    
    // Set banner height when the page loads
    updateBannerHeight();
    
    // Event handler to update banner height
    function updateBannerHeight() {
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        // Get the banner element by its ID
        const banner = document.getElementById('banner');
    
        if (width <= 1229 && height <= 556) {
            banner.style.minHeight = '300px';
            /*console.log("over 150%");*/
        } else if (width >= 5760 && height >= 2733) {
            banner.style.maxHeight = '300px';
            /*console.log("under 30%");*/
        } else {
            banner.style.maxHeight = '300px'; // Default height
            /*console.log("under 150%");*/
        }
    }

});

console.log("Hiya! I see you're snooping about.");
console.log("Not sure what you're hoping to find...");
console.log("But whatever it is, feel free to message me and ask :)");
