let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  //  canvas.style('z-index', '-100');
}

function draw() {
  //  background(0);


  stroke(200, 240, 255);

  noCursor();
  drawingContext.setLineDash([5, 5]);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mousePressed(){
    noFill();
  stroke(200, 240, 255);
  drawingContext.setLineDash([0, 0]);

  ellipse(mouseX, mouseY, 10);
}