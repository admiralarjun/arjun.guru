// Number the captions dynamically
document.addEventListener('DOMContentLoaded', function() {
    const captions = document.querySelectorAll('.caption'); // Select all divs with class 'caption'
    let figureNumber = 1; // Start the numbering from 1

    captions.forEach((caption) => {
        // Update each caption text with the figure number
        caption.textContent = `Figure ${figureNumber}: ${caption.textContent}`;
        figureNumber++; // Increment the figure number for the next caption
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a'); // Selects all anchor elements

    links.forEach((link) => {
        // Set target="_blank" attribute to open link in a new tab
        link.setAttribute('target', '_blank');

        // Check if the parent element is not a <div>
        if (link.parentElement.tagName.toLowerCase() !== 'div') {
            // Create the external link icon
            const icon = document.createElement('span');
            icon.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i>';
            icon.style.fontSize = '100%';
            icon.style.marginLeft = '5px';
            icon.style.color = 'gray';

            // Append the icon to the link
            link.appendChild(icon);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Check if the screen width is less than or equal to 768px (mobile view)
    if (window.innerWidth <= 768) {
        let scrollTimeout;

        // Function to show the overlay
        const showOverlay = () => {
            // Create the overlay element
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.bottom = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '10%'; // Bottom 25% of the screen
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Dark shade with some transparency
            overlay.style.color = '#fff';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.textAlign = 'center';
            overlay.style.fontSize = '1.5rem';
            overlay.style.zIndex = '9999';
            overlay.style.cursor = 'pointer';
            overlay.style.padding = '10px';
            overlay.style.transition = 'opacity 0.5s';

            // Add the scroll prompt text and arrow
            overlay.innerHTML = `
                <div>
                    <span>There's More</span>
                    <div style="font-size: 2rem;">&#8595;</div>
                </div>
            `;

            // Append the overlay to the body
            document.body.appendChild(overlay);

            // Remove the overlay when the user scrolls
            const removeOverlay = () => {
                overlay.style.opacity = '0'; // Fade out the overlay
                setTimeout(() => {
                    document.body.removeChild(overlay); // Remove the overlay after fade-out
                }, 500);  // Wait for opacity transition to finish
                window.removeEventListener('scroll', removeOverlay);
            };

            // Listen for the scroll event to remove the overlay
            window.addEventListener('scroll', removeOverlay);

            // Optionally, remove the overlay after 5 seconds if the user hasn't scrolled
            setTimeout(removeOverlay, 5000);  // Timeout after 5 seconds
        };

        // Start the timer to show the overlay after 3 seconds if the user hasn't scrolled
        scrollTimeout = setTimeout(showOverlay, 5000);

        // Reset the timer if the user scrolls before the 3 seconds
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout); // Clear the timeout if user scrolls
        });
    }
});
