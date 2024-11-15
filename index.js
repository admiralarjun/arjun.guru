// Select modal elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementsByClassName("close")[0];

// Function to handle image clicks
document.querySelectorAll('.clickable-image').forEach(image => {
    image.onclick = function () {
        modal.style.display = "block";
        modalImage.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

// Function to close the modal
closeModal.onclick = function () {
    modal.style.display = "none";
};

// Close the modal when clicking outside the image
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let figureCount = 1; // Initialize figure number counter
    document.querySelectorAll("img").forEach(img => {
        if (img.alt) {
            const caption = document.createElement("figcaption");
            
            // Create the figure part with bold text for "Fig X."
            const figureText = document.createElement("span");
            figureText.textContent = `Fig ${figureCount}.`;
            figureText.style.fontWeight = "bold"; // Make "Fig X." bold
            
            // Create the rest of the caption
            const captionText = document.createElement("span");
            captionText.textContent = img.alt;
            
            caption.appendChild(figureText);
            caption.appendChild(captionText);
            caption.classList.add("newspaper-caption");

            // Wrap the image and caption in a figure element
            const figure = document.createElement("figure");
            img.parentNode.insertBefore(figure, img);
            figure.appendChild(img);
            figure.appendChild(caption);

            // Increment figure number
            figureCount++;
        }
    });
});