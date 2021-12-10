let r = 0;
let g = 200;
let b = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
//  canvas = createCanvas(windowWidth, windowHeight);
//  canvas.style('z-index', '-100');
}

function draw() {
  background(r, g, b);
  b = map(mouseX, 0, 400, 0, 255);
  r = map(mouseY, 0, 400, 0, 255);

//  //cursor
//  noFill();
//  stroke(b, r, g);
//  strokeWeight(10)
//  ellipse(mouseX, mouseY,r)
//  noCursor();

}
