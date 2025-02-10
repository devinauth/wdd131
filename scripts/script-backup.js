// Product Array (Simulating data from an external source)
const products = [
    { id: "p1", name: "Smartphone" },
    { id: "p2", name: "Laptop" },
    { id: "p3", name: "Tablet" },
    { id: "p4", name: "Smartwatch" },
    { id: "p5", name: "Headphones" }
];

// Populate Product Dropdown
const productSelect = document.getElementById("product");
products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// LocalStorage: Track Review Submissions
if (localStorage.getItem("reviewCount") === null) {
    localStorage.setItem("reviewCount", 0);
}

document.querySelector("form").addEventListener("submit", () => {
    let count = parseInt(localStorage.getItem("reviewCount"));
    localStorage.setItem("reviewCount", count + 1);
});

// Show Last Modification Date in Footer
document.getElementById("last-modified").textContent = document.lastModified;
