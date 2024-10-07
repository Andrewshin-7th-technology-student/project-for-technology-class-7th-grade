// spaceship.js
// Spaceship movement and collision detection

// Initialize spaceship variables
let spaceship;

// Initialize spaceship position
function initSpaceshipPosition() {
  spaceship = {
    x: 100,
    y: 100,
    width: 50,
    height: 50
  };
}

// Update spaceship position
function updateSpaceshipPosition() {
  // Update spaceship position
  spaceship.y += 10;
}

// Check for collisions
function checkCollisions() {
  // Check for collisions between spaceship and obstacles
  for (let i = 0 ; i < obstacles.length; i++) {
    if (spaceship.x + spaceship.width > obstacles[i].x &&
        spaceship.x < obstacles[i].x + obstacles[i].width &&
        spaceship.y + spaceship.height > obstacles[i].y &&
        spaceship.y < obstacles[i].y + obstacles[i].height) {
      // Collision detected
      console.log('Collision detected!');
    }
  }
}
