function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  rectMode(CENTER);
  stroke(200,240,255);
  strokeWeight(1);
  fill(255);
  rect(windowWidth/2,windowHeight/2, mouseX, mouseX/2);
  
}