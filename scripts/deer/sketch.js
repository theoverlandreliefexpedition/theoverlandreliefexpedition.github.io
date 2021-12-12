function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    
  textSize(50);
  textFont('Georgia');
  text('🦌', mouseY, mouseX);
  text('🔪', mouseX, mouseY);
}