document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    
    // Change the icon based on the theme
    this.textContent = newTheme === 'light' ? '🌙' : '☀️';  
});
