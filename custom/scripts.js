// Function to load HTML file content
function loadHTML(file, element, replace = false) {
fetch(file)
    .then(response => response.text())
    .then(data => {
    const target = document.querySelector(element);
    if (replace) {
        target.outerHTML = data;
    } else {
        target.innerHTML = data;
    }
    })
    .catch(error => console.error('Error loading HTML:', error));
}

// Load head, header, and footer
loadHTML('html/header.html', '#header-placeholder');
loadHTML('html/footer.html', '#footer-placeholder');

AOS.init();

//const myHeading = document.querySelector("h1");
// myHeading.textContent = "Impact Canada";


document.addEventListener('DOMContentLoaded', function() {
    const teamCards = document.querySelectorAll('.card-team');
  
    teamCards.forEach(card => {
      card.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
  
        // Get the image element and its attributes from the clicked card
        const imgElement = card.querySelector('img.img-card-team');
        const imgSrc = imgElement.src; // Get the image source
        const bgColorClass = Array.from(imgElement.classList).find(cls => cls.startsWith('bg-')); // Get the background color class
  
        // Get the name and title directly from the card's HTML elements
        const name = card.querySelector('h3').innerText;
        const title = card.querySelector('p').innerText;
  
        // Update the modal content with the extracted information
        const popupImg = document.getElementById('popup-img');
        popupImg.src = imgSrc; // Update the modal image source
        popupImg.className = `img-responsive img-card-team-modal ${bgColorClass}`; // Apply the same background color class
  
        document.getElementById('popup-title').innerText = name; // Update the modal title
        document.getElementById('popup-bio').innerText = title; // Update the modal bio
  
        // Force the browser to repaint before opening the modal
        popupImg.offsetHeight; // Trigger reflow to ensure updates are applied
  
        // Open the modal using WET overlay after a slight delay to ensure content is updated
        setTimeout(() => {
          $('#centred-popup').removeClass('wb-inv').trigger('open.wb-lbx');
        }, 50);
      });
    });
  
    // Ensure the modal is hidden initially
    $('#centred-popup').addClass('wb-inv');
  });