// Function to create and display a countdown timer
function createTimer(duration, elementId) {
    // Set the initial remaining time (in seconds)
    let remainingTime = duration;

    // Get the DOM element by ID where the timer will be displayed
    const element = document.getElementById(elementId);

    // Function to update the timer every second
    const updateTimer = () => {
        // If there is still time remaining
        if (remainingTime > 0) {
            // Update the text content of the element with the remaining time
            element.textContent = `Time remaining: ${remainingTime} seconds`;
            remainingTime--; // Decrease remaining time by 1 second
        } else {
            // If time's up, display "Time's up!" message
            element.textContent = "Time's up!";
            console.log("Timer reached zero."); // Log message in console when timer hits zero
            clearInterval(timerInterval); // Stop the interval (timer)
        }
    };

    // Set an interval to update the timer every second (1000 ms)
    const timerInterval = setInterval(updateTimer, 1000);
}

// Call the createTimer function with a 10-second duration and the ID of the element to update
createTimer(10, 'timerId');
