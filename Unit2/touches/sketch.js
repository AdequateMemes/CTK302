let numberOfTouches;
var one, two, three;

function setup() {
  createCanvas(windowWidth, windowHeight);
  one = loadImage("assets/1.png");
  two = loadImage("assets/2.png");
  three = loadImage("assets/3.png");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      text("Nary a finger to be found.", 5, 22);
      break;

    case 1:
      text("Oh, there's one.", 5, 22);
      image(one, width/2, height/2);
      break;

    case 2:
      text("And that makes two.", 5, 22);
      image(two, width/2, height/2);
      break;

    case 3:
      text("A third has joined.", 5, 22);
      image(three, width/2, height/2);
      break;


  }

}
