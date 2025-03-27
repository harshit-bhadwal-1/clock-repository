// script.js

// Get clock element and dropdown
const clockElement = document.getElementById("clock");
const countrySelect = document.getElementById("country");

// Function to update clock with selected timezone
function updateClockWithTimezone() {
    const selectedTimezone = countrySelect.value; // Get selected timezone
    const now = new Date();

    // Get time in the selected timezone
    const options = {
        timeZone: selectedTimezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // Enable AM/PM format
    };

    // Format time using Intl API
    const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
    clockElement.textContent = timeString;
}

// Update clock every second
setInterval(updateClockWithTimezone, 1000);
updateClockWithTimezone(); // Initial call to display time immediately
