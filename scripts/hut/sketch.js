function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  rectMode(CENTER);
//stroke(200, 240, 255);
//strokeWeight(5);
  noStroke();
  fill(255);
  ellipse(windowWidth/2,windowHeight/2, windowWidth-mouseX*2);
  
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  mouseX += event.delta;
  //uncomment to block page scrolling
  //return false;
}