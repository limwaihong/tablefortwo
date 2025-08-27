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

    // Tab handling for Notes subpage
    const tabLinks = document.querySelectorAll('.tab-link');
    const motionSection = document.getElementById('motion-graphics-resources');

    function showPanel(targetId) {
        const panels = document.querySelectorAll('.tab-panel');
        panels.forEach(panel => {
            if (panel.id === targetId) {
                panel.removeAttribute('hidden');
            } else {
                panel.setAttribute('hidden', '');
            }
        });

        tabLinks.forEach(link => {
            const isActive = link.getAttribute('data-target') === targetId;
            link.classList.toggle('active', isActive);
            link.setAttribute('aria-selected', String(isActive));
        });
    }

    // Only wire up if motion graphics section exists on the page
    if (motionSection) {
        tabLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Enable in-page navigation while also toggling panels
                e.preventDefault();
                const targetId = link.getAttribute('data-target');
                if (targetId) {
                    history.replaceState(null, '', `#${targetId}`);
                    showPanel(targetId);
                }
            });
        });

        // Deep-link support via hash
        const initialHash = (window.location.hash || '').replace('#', '');
        if (initialHash && document.getElementById(initialHash)) {
            showPanel(initialHash);
        } else {
            // Default to Motion Graphics Resources
            showPanel('motion-graphics-resources');
        }
    }
});

// ==========================================================================
// Additional functionality can be added here
// ==========================================================================
