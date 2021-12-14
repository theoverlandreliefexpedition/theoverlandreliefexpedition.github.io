////RAINBOW BACKGROUND
//
//let sketch1 = function (p) {
//  let r = 0;
//  let g = 200;
//  let b = 200;
//
//  p.setup = function () {
//    p.createCanvas(p.windowWidth, p.windowHeight);
//  };
//
//  p.draw = function () {
//    p.background(r, g, b);
//    b = p.map(p.mouseX, 0, 400, 0, 255);
//    r = p.map(p.mouseY, 0, 400, 0, 255);
//
//    //cursor
//    p.noFill();
//    p.stroke(b, r, g);
//    p.strokeWeight(10);
//    p.ellipse(p.mouseX, p.mouseY, r);
//    p.noCursor();
//  };
//};
//
//let myp5_1 = new p5(sketch1, 'sketch-container')

////RANDOM DOTS
//
//let sketch2 = function (p) {
//
//  p.setup = function () {
//    p.createCanvas(300,300);
//  };
//
//  p.draw = function () {
//    p.background(0);
//    
//    p.ellipse(10,10,20,20);
//    
//  };
//};
//
//let myp5_2 = new p5(sketch2, 'sketch-container-2')

