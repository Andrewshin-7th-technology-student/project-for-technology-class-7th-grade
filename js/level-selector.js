// level-selector.js
// Level selection and loading

// Initialize level selector variables
let levelSelector;

// Initialize level selector
function initLevelSelector() {
  levelSelector = new LevelSelector();
}

// Select level
function selectLevel() {
  // Select level
  levelSelector.select();
}

// Load level
function loadLevel() {
  // Load level
  levelSelector.load();
}
