var r = 150;
var g = 150;
var b = 150;

var canvas;

//function windowResized() {
//  resizeCanvas(windowWidth, windowsHeight);
//}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  canvas.position(0,0);
//  canvas.style('z-index', '-2');
}

function draw() {
  

//  background(schwarz, transparenz 0-255);
  background(0, 10);

  b = map(mouseX*4, 0, windowWidth, 0, 255);
  r = map(mouseY*2, 0, windowHeight, 0, 255);
  

  
  //ellipsen
  
  noFill();
  stroke(b, r, g);
  
  //ellipse links

  strokeWeight(mouseY/5);
  //ellipse(mouseY, windowHeight/1.5, 5, 5);
  line(mouseX, mouseX, mouseX, mouseY)

  //ellipsen rechts

  
  strokeWeight(mouseX/10);
  //ellipse(windowWidth/1.5, windowHeight/1.5, mouseY, mouseX);
  ellipse(windowWidth/1.5, windowHeight/1.5, mouseY*3, mouseX*3);
  //ellipse(windowWidth/1.5, windowHeight/1.5, 5, 5);
  rectMode(CENTER);
  
    noCursor();

}

