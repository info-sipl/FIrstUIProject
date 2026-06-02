// JavaScript for interactive functionality

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');
    initializeEventListeners();
});

// Initialize Event Listeners
function initializeEventListeners() {
    // Get Started Button
    const getStartedBtn = document.querySelector('.btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', handleGetStarted);
    }

    // Navigation Links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
}

// Handle Get Started Button Click
function handleGetStarted() {
    alert('Welcome! Let\'s start building amazing things together!');
    console.log('Get Started button clicked');
}

// Handle Navigation
function handleNavigation(event) {
    event.preventDefault();
    const section = event.target.textContent;
    console.log('Navigated to:', section);
}

// Utility function to log messages
function logMessage(message) {
    console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
}

// Example: Log page load time
window.addEventListener('load', function() {
    logMessage('Page fully loaded');
});