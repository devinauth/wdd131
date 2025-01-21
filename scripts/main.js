// Display Current Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Display Last Modified Date in Footer
document.getElementById("last-modified").textContent = document.lastModified;

// Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Static Weather Data
const temperature = 28; // °C
const windSpeed = 15; // km/h

// Check if Wind Chill Calculation is Viable
let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

// Update Wind Chill in DOM
document.getElementById("wind-chill").textContent = windChill;
