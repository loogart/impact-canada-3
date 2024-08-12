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
  // Load JSON data
  fetch('custom/teamData.json') // Ensure this path is correct
    .then(response => response.json())
    .then(data => {
      // Generate HTML for each team member
      const container = document.getElementById('team-container');
      data.forEach((member, index) => {
        const card = document.createElement('div');
        card.className = 'col-xs-6 col-sm-4 col-md-3 mrgn-bttm-lg';

        card.innerHTML = `
          <a href="#centred-popup" class="card-team wb-lbx" data-index="${index}">
            <img src="${member.photo}" class="img-card-team ${member.bgColorClass}" alt="${member.name}">
            <h3 class="h4 mrgn-tp-md text-navy">${member.name}</h3>    
            <p class="small">${member.position}</p>
          </a>
        `;
        container.appendChild(card);
      });

      // Add event listeners to the dynamically created cards
      const teamCards = document.querySelectorAll('.card-team');

      teamCards.forEach(card => {
        card.addEventListener('click', function(event) {
          event.preventDefault();

          const index = card.getAttribute('data-index');
          const memberData = data[index];

          // Update the modal content with the extracted information
          const popupImg = document.getElementById('popup-img');
          popupImg.src = memberData.photo;
          popupImg.className = `img-responsive img-card-team-modal ${memberData.bgColorClass}`;

          document.getElementById('popup-title').innerText = memberData.name;
          document.getElementById('popup-bio').innerText = memberData.bio;

          // Use WET's overlay method to open the modal
          $('#centred-popup').removeClass('wb-inv').trigger('open.wb-lbx');
        });
      });
    })
    .catch(error => console.error('Error loading team data:', error));

  // Ensure the modal is hidden initially
  $('#centred-popup').addClass('wb-inv');
});