function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
//  background(0)

  noStroke();
  
  let starX = random(width);
  let starY = random(height);
  let gr = random(1, 15)
  
//  ellipse(starX, starY, starX/2)
  ellipse(starX, starY, gr)

}