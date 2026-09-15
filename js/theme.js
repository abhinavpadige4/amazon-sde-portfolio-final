// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
        htmlElement.classList.add('light-theme');
        updateThemeIcon(true);
    } else {
        htmlElement.classList.remove('light-theme');
        updateThemeIcon(false);
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
        const isLightTheme = htmlElement.classList.toggle('light-theme');
        localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
        updateThemeIcon(isLightTheme);
        
        // Optional: Trigger CSS transition event for smoother experience
        htmlElement.dispatchEvent(new CustomEvent('theme-change', {
            detail: { theme: isLightTheme ? 'light' : 'dark' }
        }));
    });
    
    function updateThemeIcon(isLightTheme) {
        const icon = themeToggle.querySelector('i');
        if (isLightTheme) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            themeToggle.setAttribute('aria-label', 'Switch to dark theme');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            themeToggle.setAttribute('aria-label', 'Switch to light theme');
        }
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            const isDark = e.matches;
            htmlElement.classList.toggle('light-theme', !isDark);
            updateThemeIcon(!isDark);
        }
    });
});