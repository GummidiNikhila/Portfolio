// Typed.js initialization for home section text animation
var typed = new Typed(".text", {
    strings: ["Web Designer", "Web Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// DOM Content Loaded - Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation and section management
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionHeadline = document.getElementById('section-headline');
    
    const sectionTitles = {
        home: 'Home',
        about: 'About Me',
        skills: 'My Skills',
        projects: 'My Projects',
        experience: 'My Experience',
        contact: 'Contact Me'
    };

    /**
     * Updates the section headline with smooth animation
     * @param {string} section - The section name to display
     */
    function showHeadline(section) {
        if (sectionHeadline) {
            sectionHeadline.textContent = sectionTitles[section] || '';
            sectionHeadline.classList.remove('visible');
            setTimeout(() => sectionHeadline.classList.add('visible'), 50);
        }
    }

    /**
     * Handles smooth scrolling to sections
     * @param {string} section - The section to scroll to
     */
    function scrollToSection(section) {
        let sectionId = section;
        // Handle special case for skills section
        if (section === 'skills') sectionId = 'skills';
        
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            
            // Update active navigation state
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
            
            // Update headline and scroll to section
            showHeadline(section);
            scrollToSection(section);
        });
    });

    // Show Home headline by default
    showHeadline('home');

    /**
     * Reveals elements when they scroll into view
     */
    function revealOnScroll() {
        const fadeElements = document.querySelectorAll(
            '.fade-in, .about-skill-card, .exp-item, .contact-item, .skill-card'
        );
        const windowHeight = window.innerHeight;
        
        fadeElements.forEach(element => {
            const elementRect = element.getBoundingClientRect();
            const revealPoint = windowHeight - 60;
            
            if (elementRect.top < revealPoint) {
                element.classList.add('fade-in');
            }
        });
    }

    // Scroll event listeners
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('DOMContentLoaded', revealOnScroll);

    // Initial call to reveal any elements already in view
    revealOnScroll();

    // Resume upload functionality (if elements exist)
    const resumeLink = document.getElementById('resume-link');
    const resumeUpload = document.getElementById('resume-upload');
    
    if (resumeLink && resumeUpload) {
        resumeLink.addEventListener('click', function(e) {
            if (e.target === resumeUpload) return;
            e.preventDefault();
            resumeUpload.click();
        });

        resumeUpload.addEventListener('change', function() {
            if (resumeUpload.files.length > 0) {
                alert('Resume selected: ' + resumeUpload.files[0].name);
                // Additional upload logic can be added here
            }
        });
    }
});