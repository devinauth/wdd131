// Dark Mode Toggle
const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Apply Dark Mode on Page Load
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// BMI Calculator
function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmi-result").innerText = `Your BMI is ${bmi}`;
}

// Testimonial Slider
let testimonials = ["Great advice!", "Helped my family a lot!", "Highly recommended!"];
let currentTestimonial = 0;

function showTestimonial() {
    document.getElementById("testimonial-text").innerText = testimonials[currentTestimonial];
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial();
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial();
}

showTestimonial();

// Feedback Form with Local Storage
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    localStorage.setItem("feedback", `${name}: ${message}`);
    document.getElementById("feedback-message").innerText = "Thank you for your feedback!";
});
