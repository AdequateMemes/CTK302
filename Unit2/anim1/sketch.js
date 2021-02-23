let x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  rect(x,50,50,50);
  x += 5;

  if (x > width) {
    x = -200;
  }
}
