let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
//  canvas.style('z-index', '-100');
}

function draw() {
  background(0);
  
  noFill();
  stroke(200,240,255);
  
  noCursor();
  line(pmouseX, pmouseY, mouseX, mouseY);  
  ellipse(pmouseX,pmouseY, 10);
}