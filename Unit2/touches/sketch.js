let numberOfTouches ;
var one, two, three;

function setup() {
  createCanvas(windowWidth, windowHeight);
  one = loadImage("assets/onefinger.jpg");
  two = loadImage("assets/twofingers.jpg");
  three = loadImage("assets/threefingers.jpg");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("Nary a finger to be found.", 5, 22) ;
      break ;

      case 1:
       text("Oh, there's one.", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("And that makes two.", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("A third has joined.", 5, 22) ;
            // put a picture here
      break ;


  }

}
