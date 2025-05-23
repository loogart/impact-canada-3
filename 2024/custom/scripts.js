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


// prototyping for dynamic topics 

function saveTitle(title) {
  sessionStorage.setItem('pageTitle', title);
}

// Retrieve the title from sessionStorage
const title = sessionStorage.getItem('pageTitle');

// If there is a title stored, update the H1 tag
if (title) {
  document.getElementById('page-title').innerText = title;
}

//table prototype
let table = new DataTable('#myTable');