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
    squareSize = CONTAINER_SIZE / size;

    // Create the total square numbers (size * size)
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Set the size in pixels
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
    }

    // Adds the squares in the container
    container.appendChild(square);
}