// game-over.js
// Game over logic and display

// Initialize game over variables
let gameOver = false;

// Check for game over
function checkGameOver() {
  // Check for game over
  if (spaceship.y + spaceship.height > 600) {
    gameOver = true;
  }
}

// Display game over
function displayGameOver() {
  // Display game over
  console.log('Game Over!');
}
