// Sample array of temples
const temples = [
    {
        name: "Panama Temple",
        location: "Panama City, Panama",
        dedicated: "November 20, 2000",
        area: 22500,
        image: "images/panama_temple.jpg"
    },
    {
        name: "Arequipa Peru Temple",
        location: "Arequipa, Peru",
        dedicated: "December 15, 2019",
        area: 23000,
        image: "images/arequipa_peru_temple.jpg"
    },
    {
        name: "Atlanta Temple",
        location: "Atlanta, Georgia",
        dedicated: "June 1, 1983",
        area: 27000,
        image: "images/atlanta_temple.jpg"
    },
    {
        name: "Bern Switzerland Temple",
        location: "Bern, Switzerland",
        dedicated: "October 6, 1955",
        area: 10000,
        image: "images/bern_switzerland_temple.jpg"
    },
    {
        name: "Billings Montana Temple",
        location: "Billings, Montana",
        dedicated: "May 26, 2012",
        area: 10000,
        image: "images/billings_temple.jpg"
    },
    {
        name: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "January 8, 1995",
        area: 12900,
        image: "images/bountiful_temple.jpg"
    },
    {
        name: "Campinas Brazil Temple",
        location: "Campinas, Brazil",
        dedicated: "October 13, 2002",
        area: 20000,
        image: "images/campinas_brazil_temple.jpg"
    },
    {
        name: "Brigham City Utah Temple",
        location: "Brigham City, Utah",
        dedicated: "October 23, 2012",
        area: 10900,
        image: "images/brigham_city_utah_temple.jpg"
    },
    {
        name: "Philippines Cebu Temple",
        location: "Cebu City, Philippines",
        dedicated: "June 13, 2010",
        area: 9000,
        image: "images/philippines_cebu_temple.jpg"
    }
    // Add more temples as needed
];

// Function to display temples
function displayTemples(templesArray) {
    const templeContainer = document.getElementById('temple-container');
    templeContainer.innerHTML = ''; // Clear current content
    
    templesArray.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');
        
        templeCard.innerHTML = `
            <h2>${temple.name}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq. ft.</p>
            <img src="${temple.image}" alt="Image of ${temple.name}" loading="lazy">
        `;
        
        templeContainer.appendChild(templeCard);
    });
}

// Function to filter temples based on criteria
function filterTemples(criteria) {
    let filteredTemples;
    
    switch (criteria) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples; // Show all temples
    }
    
    displayTemples(filteredTemples);
}

// Event Listeners for navigation menu
document.getElementById('home').addEventListener('click', () => displayTemples(temples));
document.getElementById('old-temples').addEventListener('click', () => filterTemples('old'));
document.getElementById('new-temples').addEventListener('click', () => filterTemples('new'));
document.getElementById('large-temples').addEventListener('click', () => filterTemples('large'));
document.getElementById('small-temples').addEventListener('click', () => filterTemples('small'));

// Update footer with last modified date
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = lastModifiedDate;

// Initial display of all temples
window.addEventListener('DOMContentLoaded', () => displayTemples(temples));

