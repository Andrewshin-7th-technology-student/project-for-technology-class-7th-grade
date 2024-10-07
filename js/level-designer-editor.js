// level-designer-editor.js
// Level designer editing and saving

// Initialize level designer editor variables
let levelDesignerEditor;

// Initialize level designer editor
function initLevelDesignerEditor() {
  levelDesignerEditor = new LevelDesignerEditor();
}

// Edit level designer
function editLevelDesigner() {
  // Edit level designer
  levelDesignerEditor.edit();
}

// Save level designer
function saveLevelDesigner() {
  // Save level designer
  levelDesignerEditor.save();
}
