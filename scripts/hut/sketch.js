function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  rectMode(CENTER);
  noStroke();
  fill(255);
  rect(windowWidth/2,windowHeight/2, windowWidth-mouseX*2);
  
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  mouseX += event.delta;
  //uncomment to block page scrolling
  //return false;
}