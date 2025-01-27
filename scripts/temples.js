// Temple data array with 12 entries (7 original + 5 new)
const temples = [
    {
        name: "Panama Temple",
        location: "Panama City, Panama",
        dedicationDate: "November 20, 2005",
        area: 17000,
        image: "images/panama_temple.jpg",
    },
    {
        name: "Arequipa Peru Temple",
        location: "Arequipa, Peru",
        dedicationDate: "December 15, 2019",
        area: 28000,
        image: "images/arequipa_peru_temple.jpg",
    },
    {
        name: "Atlanta Temple",
        location: "Atlanta, Georgia, USA",
        dedicationDate: "June 1, 1983",
        area: 25000,
        image: "images/atlanta_temple.jpg",
    },
    {
        name: "Bern Switzerland Temple",
        location: "Bern, Switzerland",
        dedicationDate: "October 11, 1955",
        area: 15000,
        image: "images/bern_switzerland_temple.jpg",
    },
    {
        name: "Billings Montana Temple",
        location: "Billings, Montana, USA",
        dedicationDate: "May 19, 2008",
        area: 10500,
        image: "images/billings_temple.jpg",
    },
    {
        name: "Bountiful Utah Temple",
        location: "Bountiful, Utah, USA",
        dedicationDate: "June 22, 1995",
        area: 10000,
        image: "images/bountiful_temple.jpg",
    },
    {
        name: "Campinas Brazil Temple",
        location: "Campinas, Brazil",
        dedicationDate: "October 27, 2002",
        area: 22000,
        image: "images/campinas_brazil_temple.jpg",
    },
    {
        name: "Brigham City Utah Temple",
        location: "Brigham City, Utah, USA",
        dedicationDate: "September 23, 2012",
        area: 22000,
        image: "images/brigham_city_utah_temple.jpg",
    },
    {
        name: "Philippines Cebu Temple",
        location: "Cebu City, Philippines",
        dedicationDate: "June 13, 2010",
        area: 9000,
        image: "images/philippines_cebu_temple.jpg",
    },
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicationDate: "May 21, 1893",
        area: 105000,
        image: "images/salt_lake_temple.jpg", // Replace with the correct image path
    },
    {
        name: "Kirtland Temple",
        location: "Kirtland, Ohio, USA",
        dedicationDate: "March 27, 1836",
        area: 12000,
        image: "images/kirtland_temple.jpg", // Replace with the correct image path
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii, USA",
        dedicationDate: "November 27, 1919",
        area: 93000,
        image: "images/laie_hawaii_temple.jpg", // Replace with the correct image path
    },
    {
        name: "Los Angeles California Temple",
        location: "Los Angeles, California, USA",
        dedicationDate: "January 27, 1955",
        area: 120000,
        image: "images/los_angeles_temple.jpg", // Replace with the correct image path
    },
    {
        name: "London England Temple",
        location: "London, England, UK",
        dedicationDate: "September 7, 1958",
        area: 89000,
        image: "images/london_england_temple.jpg", // Replace with the correct image path
    }
];

// Function to create temple cards dynamically
function createTempleCards(templeArray) {
    const gallery = document.getElementById('temple-container');
    gallery.innerHTML = ''; // Clear existing content
    templeArray.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');
        
        card.innerHTML = `
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
            <h2>${temple.name}</h2>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicationDate}</p>
            <p>Area: ${temple.area} sq ft</p>
        `;
        
        gallery.appendChild(card);
    });
}

// Filter Functions
function filterOldTemples() {
    const oldTemples = temples.filter(temple => new Date(temple.dedicationDate).getFullYear() < 1900);
    createTempleCards(oldTemples);
}

function filterNewTemples() {
    const newTemples = temples.filter(temple => new Date(temple.dedicationDate).getFullYear() > 2000);
    createTempleCards(newTemples);
}

function filterLargeTemples() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCards(largeTemples);
}

function filterSmallTemples() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCards(smallTemples);
}

function showAllTemples() {
    createTempleCards(temples);
}

// Event Listeners for Filters
document.getElementById('old-filter').addEventListener('click', filterOldTemples);
document.getElementById('new-filter').addEventListener('click', filterNewTemples);
document.getElementById('large-filter').addEventListener('click', filterLargeTemples);
document.getElementById('small-filter').addEventListener('click', filterSmallTemples);
document.getElementById('home-filter').addEventListener('click', showAllTemples);

// Initial Render
createTempleCards(temples);

