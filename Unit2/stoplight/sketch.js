let state = 0;
let timer = 0;
let x = 0;
let velocity = 0;

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {

  background(100);
  fill('yellow');
  rect(width / 2, height / 2, 200, 550);
  fill('black');
  ellipse(width / 2, height / 2 - 170, 150, 150); //top
  ellipse(width / 2, height / 2, 150, 150); //middle
  ellipse(width / 2, height / 2 + 170, 150, 150); //bottom

  timer++;
  if (timer > 300){
    timer = 0;
  }

  if (timer > 0 && timer < 120) {
    state = 0;
  }
  if (timer > 120 && timer < 210) {
    state = 1;
  }
  if (timer > 210 && timer < 300) {
    state = 2;
  }

  //car
  fill('blue');
  rect(x, 750, 75, 20);
  x = x + velocity
  if (x > 900){ // a bit more than width for a smooth transition
    x = -100;
  }

  switch (state) {


    case 0: //red
    fill('red');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      velocity = 0;
      break;

    case 1: //green
    fill('green');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 6;
      break;

    case 2: //yellow
    fill('yellow');
      ellipse(width / 2, height / 2, 150, 150);
      velocity = 3;
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
