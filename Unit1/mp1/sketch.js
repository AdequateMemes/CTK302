function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}

// This took 5 hours.

function draw() {

  background(80,40,40);
  textSize(25);

  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    stroke('black');
    background(60,60,90);
    fill(20);
    quad(0,400, 1000,400, 1000,800, 0,800);
    fill(80);
    // FRONT
    quad(250,600, 750,600, 625,400, 375,400);
    // LEFT SIDE
    quad(250,600, 300,450, 400,325, 375,400);
    // RIGHT SIDE
    quad(750,600, 700,450, 600,325, 625,400);
    // TOP
    quad(375,400, 625,400, 600,325, 400,325);

    fill(90);
    // front panel / leg
    quad(475,575, 525,575, 520,525, 480,525); // panel
    quad(475,575, 525,575, 525,675, 475,675); // bottom of leg extension
    quad(520,525, 480,525, 480,625, 520,625); // top of leg
    quad(475,675, 480,625, 480,525, 475,575); // left of leg
    quad(525,675, 520,625, 520,525, 525,575); // right of leg
    fill(60);
    quad(475,675, 525,675, 520,625, 480,625); // front of leg / knee
    quad(475,675, 525,675, 510,750, 490,750); // leg claw
    // left panel
    fill(90);
    quad(290,510, 320,460, 325,445, 300,480); // base
    quad(290,510, 190,510, 220,460, 320,460); // side
    quad(220,460, 225,445, 325,445, 320,460); // top
    fill(60);
    quad(190,510, 220,460, 225,445, 200,480); // extended
    quad(190,510, 190,560, 200,560, 220,510); // claw
    // right panel
    fill(90);
    quad(710,510, 680,460, 675,445, 700,480); // base
    quad(710,510, 810,510, 780,460, 680,460); // side
    quad(780,460, 775,445, 675,445, 680,460); // top
    fill(60);
    quad(810,510, 780,460, 775,445, 800,480); // extended
    quad(810,510, 810,560, 800,560, 780,510); // claw
    // top panel
    fill(0);
    quad(425,380, 575,380, 570,340, 430,340);
    fill(0,100,255);
    noStroke();
    ellipse(450,375, 10, 10); // left eye
    ellipse(550,375, 10, 10); // right eye
    stroke('black');
    fill(70);
    quad(425,360, 575,360, 570,320, 430,320);
    quad(425,360, 575,360, 575,370, 425,370);

    fill(255);
    noStroke();
    text("Only when eyes are not upon it does it reveal the answer.", 20, 40);
    text("It is a repurposed custodial drone, searching for salvagable components for electronics.", 20, 80);
    text("With scant resources to be dredged and most factories silent,", 20, 120);
    text("these drones are invaluable to survivors to ensure their continued livelihoods.",20, 160);
    text("It is for that reason that the drones continue their work.", 20, 200);
    text("For those who yet remain and those who might yet be saved.", 20, 240);

  } else {
    stroke('black');
    // when the mouse isn't pressed!
    fill(20);
    quad(0,400, 1000,400, 1000,800, 0,800);
    fill(80);
    // FRONT
    quad(250,600, 750,600, 625,400, 375,400);
    // LEFT SIDE
    quad(250,600, 300,450, 400,325, 375,400);
    // RIGHT SIDE
    quad(750,600, 700,450, 600,325, 625,400);
    // TOP
    quad(375,400, 625,400, 600,325, 400,325);

    fill(60);
    // front panel
    quad(475,575, 525,575, 520,525, 480,525);
    // left panel
    quad(290,510, 320,460, 325,445, 300,480);
    // right panel
    quad(710,510, 680,460, 675,445, 700,480);
    // top panel
    fill(70);
    quad(425,380, 575,380, 570,340, 430,340);

    fill(255);
    noStroke();
    text("In the ruins of technologically advanced civilizations,", 20, 40);
    text("an unknown metal apparatus is periodically found.", 20, 80);
    text("Its sightings often lead to concern, as none are sure", 20, 120);
    text("how it appears or where it has come from.", 20, 160);
  }



  // this shows mouse location - comment it out when you're done!
  //fill(0);
  //text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
//function mouseReleased() {
//  print(mouseX + ", " + mouseY);
}
