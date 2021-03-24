let cars = [];
let maxCars = 15;
let maxTimer = 5 * 60;
let timer = 0;
let frogPos;
let state = 0;
let dollar, bag, win, loss, instructions;



function setup() {
  //  createCanvas(windowWidth, windowHeight);
  createCanvas(800, 800);

  imageMode(CENTER);

  bag = loadImage("assets/bag.png"); // These commands
  dollar = loadImage("assets/dollar.png"); // load the images
  loss = loadImage("assets/loss.png");
  win = loadImage("assets/win.png");
  instructions = loadImage("assets/Instructions.png");

  // Spawn an object

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);

}

function draw() {
  textSize(24);

  switch (state) {
    case 0:
      background(150, 75, 75);
      fill('white');
      text('Arrow keys to move, collect counterfeit dollars.\nClick to start.', 100, 100);
      image(instructions, width/2, height/2 + height/8, 500, 500);
      break;

    case 1:
      game();
      timer++;
      if (timer >= 600){
        state = 3;
      }
      break;

    case 2:
      background(100, 100, 200);
      fill('white');
      text('You got them. But can you do it again?\nClick to restart.', 100, 100);
      image(win, width/2, height/2 + height/8, 500, 500);
      break;

    case 3:
      background(114, 199, 153);
      fill('black');
      text('In those 10 seconds,\nan unexplained gust of plot wind carries away your fake money.\nNothing of value was lost.\nExcept the game.\nYou lost that.\nClick to restart.', 100, 100);
      image(loss, width/2, height/2 + height/8, 500, 500);
      break;
  }
}

function mouseReleased() {
  switch(state){
    case 0:
    state = 1;
    break;

    case 2: // clicked during win state
    reset();
    state = 0;
    break;

    case 3: // clicked during loss state
    reset();
    state = 0;
    break;
  }
}

function reset()
{
  timer = 0;
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function game() {
  background(100);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  // check to see if array == 0
  if (cars.length == 0){
    state = 2;
  }

  // here is my frog
  checkForKeys();
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 75, 75);
  image(bag, frogPos.x, frogPos.y);
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 8;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 8;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 8;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 8;

  //  if (frogPos.x > width) frogPos.x = 0 ;
}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = 60;
    this.height = 30;
  }

  // methods

  display() {
    //fill(this.col);
    //rect(this.pos.x, this.pos.y, this.width, this.height);
    // textSize(this.width) ;
    // text("WOOHOO", this.pos.x, this.pos.y);
    image(dollar, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
