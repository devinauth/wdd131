// Dynamic Year and Last Modified
document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});
