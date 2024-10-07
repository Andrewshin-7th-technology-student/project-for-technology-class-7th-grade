// obstacle-generator.js
// Obstacle generation logic

// Initialize obstacle variables
let obstacles = [];

// Generate obstacles
function generateObstacles() {
  // Generate obstacles
  for (let i = 0; i < 10; i++) {
    obstacles.push({
      x: Math.random() * 800,
      y: Math.random() * 600,
      width: 50,
      height: 50
    });
  }
}

// Update obstacle positions
function updateObstaclePositions() {
  // Update obstacle positions
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].x += 10;
  }
}
