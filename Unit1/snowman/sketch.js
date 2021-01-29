function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('blue')
  fill('white');
  ellipse(width/2,400,150,150);
  ellipse(width/2,300,100,100);
  ellipse(width/2,225,75,75);
  fill('black');
  ellipse(width/2-10,225,5,5);
  ellipse(width/2+10,225,5,5);
}
