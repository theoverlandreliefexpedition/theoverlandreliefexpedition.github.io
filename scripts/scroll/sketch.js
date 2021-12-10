let pos = 0;

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(200,240,255,pos);
  rect(pos, windowHeight/2, pos, 3);
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta;
  //uncomment to block page scrolling
  //return false;
}