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


document.addEventListener("DOMContentLoaded", function() {
    const feedUrl = 'https://hacklido.substack.com/feed';
    const feedList = document.getElementById('feed-list');

    fetch(feedUrl)
      .then(response => response.text())
      .then(xml => {
        // Parse the RSS XML into a DOM object
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, 'text/xml');

        // Get the latest 3 items from the feed
        const items = xmlDoc.querySelectorAll('item');
        const latestFeeds = Array.from(items).slice(0, 3);

        // Render the latest 3 feeds
        latestFeeds.forEach(item => {
          const title = item.querySelector('title').textContent;
          const description = item.querySelector('description').textContent;
          const link = item.querySelector('link').textContent;

          // Create a feed item element
          const feedItem = document.createElement('div');
          feedItem.classList.add('feed-item');

          feedItem.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${link}" target="_blank">Read More</a>
          `;

          // Append the feed item to the container inside the news column
          feedList.appendChild(feedItem);
        });
      })
      .catch(error => console.error('Error fetching feed:', error));
  });