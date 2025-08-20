/**
 * TABLEFORTWO DESIGN STUDIO
 * Main JavaScript File
 * 
 * Author: [Your Name]
 * Description: Interactive functionality for the TABLEFORTWO personal design studio website
 */

// ==========================================================================
// DOM Content Loaded Event
// ==========================================================================

/**
 * Initialize the website when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('TABLEFORTWO DESIGN STUDIO loaded successfully');
    
    // Initialize typewriter animation
    initializeTypewriter();
});

// ==========================================================================
// Typewriter Animation
// ==========================================================================

/**
 * Initialize the typewriter animation for coming soon text
 */
function initializeTypewriter() {
    const comingSoonElement = document.querySelector('.coming-soon');
    
    if (comingSoonElement) {
        const originalText = comingSoonElement.textContent;
        
        // Clear the element and wrap each character in a span
        comingSoonElement.innerHTML = '';
        
        // Create spans for each character
        for (let i = 0; i < originalText.length; i++) {
            const char = originalText[i];
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space
            span.className = 'typewriter-char';
            comingSoonElement.appendChild(span);
        }
        
        // Start the typewriter animation after a delay
        setTimeout(() => {
            startTypewriterReveal(comingSoonElement);
        }, 1000); // 1 second delay before starting
        
        console.log('Typewriter animation initialized');
    }
}

/**
 * Start revealing characters one by one
 * @param {Element} element - The element containing character spans
 */
function startTypewriterReveal(element) {
    const chars = element.querySelectorAll('.typewriter-char');
    let currentIndex = 0;
    
    function revealNextChar() {
        if (currentIndex < chars.length) {
            chars[currentIndex].classList.add('visible');
            currentIndex++;
            
            // Reveal next character after 150ms
            setTimeout(revealNextChar, 150);
        }
    }
    
    // Start revealing characters
    revealNextChar();
}

/**
 * Restart the typewriter animation (utility function)
 */
function restartTypewriter() {
    const comingSoonElement = document.querySelector('.coming-soon');
    
    if (comingSoonElement) {
        // Reset all characters to hidden
        const chars = comingSoonElement.querySelectorAll('.typewriter-char');
        chars.forEach(char => char.classList.remove('visible'));
        
        // Restart the animation
        setTimeout(() => {
            startTypewriterReveal(comingSoonElement);
        }, 100);
        
        console.log('Typewriter animation restarted');
    }
}

// ==========================================================================
