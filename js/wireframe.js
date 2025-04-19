// Wireframe toggle functionality

document.addEventListener('DOMContentLoaded', function() {
    // Create toggle button 
    const toggleButton = document.createElement('button');
    toggleButton.className = 'wireframe-toggle';
    toggleButton.textContent = 'Toggle Wireframe';
    document.body.appendChild(toggleButton);
    
    // Toggle wireframe visibility when button is clicked
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('wireframe-hidden');
        
        // Update button text
        if (document.body.classList.contains('wireframe-hidden')) {
            toggleButton.textContent = 'Show Wireframe';
        } else {
            toggleButton.textContent = 'Hide Wireframe';
        }
    });
    
    // Initialize as visible
    toggleButton.textContent = 'Hide Wireframe';
}); 