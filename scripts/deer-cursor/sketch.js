function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
//    background(0);

    
  noStroke();
  
  textSize(100);
  text('🦌', mouseX-20, mouseY+70);
  
    noCursor();
  
}

function mousePressed() {
  clear();
}