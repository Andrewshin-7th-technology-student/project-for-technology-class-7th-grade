// image-loader.js
// Image loading and caching

// Initialize image loader variables
let images = [];

// Load images
function loadImage() {
  // Load images
  for (let i = 0; i < 10; i++) {
    images.push(new Image());
    images[i].src = 'image-' + i + '.png';
  }
}

// Cache images
function cacheImages() {
  // Cache images
  for (let i = 0; i < images.length; i++) {
    images[i].onload = function() {
      console.log('Image loaded!');
    };
  }
}
