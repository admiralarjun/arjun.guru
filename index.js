document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank'); // Open in a new tab
    link.setAttribute('rel', 'noopener noreferrer'); // Improve security and performance
});