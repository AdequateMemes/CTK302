let cars = [];
let stars;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stars = loadImage("stars.jpg");
  imageMode(CENTER);

  // Spawn an object

  /*for (let i = 0; i < 30; i++) {
    cars.push(new Car());
  }*/

}

function draw() {
  background('black');
  image(stars, width/2, height/2, windowWidth, windowHeight);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0){
      cars.splice(i, 1);
    }
  }

}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(width/2, height/2 - height/8 * 3);
    this.vel = createVector(random(-5, 5), random(5, 15));
    this.r = random(100, 255);
    this.g = random(100, 255);
    this.b = random(100, 255);
    this.a = random(200, 255);
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    text("Egg", this.pos.x, this.pos.y, 50, 25);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
  }
}
