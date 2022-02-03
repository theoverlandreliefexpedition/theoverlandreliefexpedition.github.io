let r,g,b;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 150, 100);
  
  r = 0;
  g = 0;
  b = 0;
  
  r = map(mouseX, 0, windowWidth, 0, 255);
  g = map(mouseX, 0, windowWidth, 255, 0);
  b = map(mouseY, 0, windowHeight, 255, 0);
  
  noStroke();
  //fill(r,g,b);
  fill(255,r,0);
  
  ellipse(pmouseX,pmouseY,windowWidth/2);
  
  fill(r,g,b);
  ellipse(pmouseY,pmouseX,mouseX/2);

  
  //fill(b,r,g)
  //rectMode(CENTER);
  //rect(windowWidth/2,windowHeight/2,mouseX/2,mouseY/2);
  
}