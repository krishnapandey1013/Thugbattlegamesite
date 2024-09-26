// Hide Loading Screen
window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
        loadingScreen.classList.add("hidden");
    } else {
        console.error("Loading screen element not found.");
    }
});

// Smooth Scroll Effect
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 60; // Adjust for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.error(`Target element with ID ${targetId} not found.`);
        }
    });
});

// Responsive Navigation Menu
const navLinks = document.getElementById('nav-links');
const burgerMenu = document.getElementById('burger-menu');

if (burgerMenu && navLinks) {
    burgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        burgerMenu.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
            navLinks.classList.remove('open');
            burgerMenu.classList.remove('open');
        }
    });
} else {
    console.error("Burger menu or navigation links not found.");
}

// Change Navbar style on scroll
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
} else {
    console.error("Navbar element not found.");
}

// Countdown Timer for Special Event
const countdownElement = document.getElementById('countdown');

if (countdownElement) {
    function startCountdown(endTime) {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance < 0) {
                clearInterval(timer);
                countdownElement.innerHTML = "Event Started!";
                triggerEvent();
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }

    function triggerEvent() {
        alert("The special event has started! Check the Special Event section for details.");
        // Add additional actions here, such as modifying the page or launching specific features
    }

    // Set the date for the countdown (e.g., Dec 31, 2024 23:59:59)
    const eventDate = new Date("Dec 31, 2024 23:59:59").getTime();
    startCountdown(eventDate);
} else {
    console.error("Countdown element not found.");
}

// Animations on Scroll
const faders = document.querySelectorAll('.fade-in');
if (faders.length > 0) {
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
} else {
    console.error("Fade-in elements not found.");
}
