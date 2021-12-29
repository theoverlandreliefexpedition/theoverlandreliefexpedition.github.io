function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
//    background(0);

    
  noStroke();
  
  textSize(100);
  text('🦌', mouseX, mouseY);
  
    noCursor();

}

function mousePressed() {
  clear();
}