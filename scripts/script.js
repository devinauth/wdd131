// Product Array
const products = [
    { id: "product1", name: "Smartphone" },
    { id: "product2", name: "Laptop" },
    { id: "product3", name: "Tablet" },
    { id: "product4", name: "Smartwatch" }
];

// Populate Product Dropdown
const productSelect = document.getElementById("product");
if (productSelect) {
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Update Last Modified Date
document.getElementById("last-modified").textContent = document.lastModified;

// Review Counter
if (window.location.pathname.includes("review.html")) {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("review-count").textContent = count;
}
