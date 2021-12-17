function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
//  background(0)

  noStroke();
  
  let starX = random(mouseX-200, mouseX+200);
  let starY = random(mouseY-200, mouseY+200);
  let gr = random(5, 20)
  
//  ellipse(starX, starY, starX/2)
  ellipse(starX, starY, gr)

}