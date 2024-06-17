document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('moveButton');
    
    button.addEventListener('click', function() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        const maxX = viewportWidth - buttonWidth;
        const maxY = viewportHeight - buttonHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });
});