// collision-editor.js
// Collision editing and saving

// Initialize collision editor variables
let collisionEditor;

// Initialize collision editor
function initCollisionEditor() {
  collisionEditor = new CollisionEditor();
}

// Edit collision
function editCollision() {
  // Edit collision
  collisionEditor.edit();
}

// Save collision
function saveCollision() {
  // Save collision
  collisionEditor.save();
}
