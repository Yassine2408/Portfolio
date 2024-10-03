// Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(31, 31, 31, 0.9)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.padding = '1rem 0';
    }
});

// Form Submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
});

// Skill Progress Animation
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
    skillBars.forEach(skill => {
        const percentage = skill.getAttribute('data-percentage');
        skill.style.width = percentage;
    });
};

// Trigger skill animation when the skills section is in view
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateSkills();
    }
}, { threshold: 0.5 });

observer.observe(skillsSection);
