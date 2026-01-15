// Select the container and button
const container = document.querySelector('.container');
const newGridBtn = document.querySelector('#newGridBtn');

// Sketch pad measurements total in pixels
const CONTAINER_SIZE = 560;

// Starting size
let currentSize = 16;


function createGrid(size) {
    // Remove everything from container
    container.innerHTML = '';

    // Calculate each square size
    let squareSize = CONTAINER_SIZE / size;

    // Create the total square numbers (size * size)
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Set the size in pixels
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';

        // Hover effect
        square.addEventListener('mouseover', function() {
        // Random color
        const randomColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
        square.style.backgroundColor = randomColor;
        });

        // Adds the squares in the container
        container.appendChild(square);
    }
}

createGrid(currentSize);


// New grid button prompt for a new size
newGridBtn.addEventListener('click', function() {
    let newSize = prompt('How many squares per side for the new grid? (1-100)');

    // Convert to number
    newSize = parseInt(newSize);

    // Protects from lower or higher number
    if(newSize < 1 || newSize > 100) {
        alert('Please enter a number between 1 and 100!');
        return;
    }
    currentSize = newSize;
    createGrid(newSize);
})