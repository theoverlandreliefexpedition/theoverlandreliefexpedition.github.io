let pos = 0;

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
//  background(255);
  fill(200,240,255);
  stroke(200,240,255);

  rect(pos, windowHeight/2, pos, 2);
  
  noFill();
  ellipse(0, windowHeight/2, pos*2);

}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta;
  //uncomment to block page scrolling
  //return false;
}
