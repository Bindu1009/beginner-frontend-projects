// Get a reference to the button by its ID
const button = document.getElementById('colorChangeButton');

// Define an array of colors to cycle through
const colors = ['#4CAF50', '#007bff', '#ffc107', '#dc3545', '#6f42c1']; // Green, Blue, Yellow, Red, Purple
let currentColorIndex = 0; // Keep track of the current color

// Add an event listener to the button
button.addEventListener('click', function() {
    // Increment the color index
    currentColorIndex = (currentColorIndex + 1) % colors.length;

    // Set the button's background color to the next color in the array
    button.style.backgroundColor = colors[currentColorIndex];
});