// Timer variables
let countdownInterval;
let timeLeftInSeconds = 0;
let isPaused = true;

// Function to format time (MM:SS)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Start Timer
function startTimer() {
    const minutesInput = document.getElementById("minutes").value;

    if (isPaused && timeLeftInSeconds === 0) {
        if (!minutesInput || isNaN(minutesInput) || minutesInput <= 0) {
            alert("Please enter a valid number of minutes!");
            return;
        }
        timeLeftInSeconds = parseInt(minutesInput) * 60;
    }

    if (isPaused) {
        isPaused = false;
        countdownInterval = setInterval(() => {
            if (timeLeftInSeconds <= 0) {
                clearInterval(countdownInterval);
                document.getElementById("timer").textContent = "00:00";
                alert("Time's up! ⏰");
            } else {
                timeLeftInSeconds--;
                document.getElementById("timer").textContent = formatTime(timeLeftInSeconds);
            }
        }, 1000);
    }
}

// Pause Timer
function pauseTimer() {
    isPaused = true;
    clearInterval(countdownInterval);
}

// Reset Timer
function resetTimer() {
    pauseTimer();
    timeLeftInSeconds = 0;
    document.getElementById("timer").textContent = "00:00";
    document.getElementById("minutes").value = "";
}
