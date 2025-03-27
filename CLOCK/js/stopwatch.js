// stopwatch.js

let timerInterval;
let elapsedTime = 0;
let isRunning = false;

// Get stopwatch element
const stopwatchElement = document.getElementById("stopwatch");

// Start stopwatch
function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        let startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            stopwatchElement.textContent = formatTime(elapsedTime);
        }, 10);
    }
}

// Stop stopwatch
function stopStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

// Reset stopwatch
function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    stopwatchElement.textContent = "00:00:00";
}

// Format time into MM:SS:MS
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);
    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0") +
        ":" +
        String(milliseconds).padStart(2, "0")
    );
}
