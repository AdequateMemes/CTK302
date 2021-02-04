function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {

  background(180,100,100);
  noStroke(); // stroke off
  // stroke('black'); stroke on
  // strokeWeight(10);

  //sunset
  fill('yellow');
  arc(479, 300, 280, 280, PI, TWO_PI);

  //mountain background, left
  stroke(150);
  fill(204);
  triangle(60, 260, 360, 260, 190, -50);

  //clouds
  noStroke();
  fill(240);
  ellipse(160,70,75,75);
  ellipse(190,50,75,75);
  ellipse(220,70,75,75);
  ellipse(250,50,75,75);
  ellipse(280,70,75,75);

  ellipse(480,70,75,75);
  ellipse(510,50,75,75);
  ellipse(540,70,75,75);
  ellipse(570,50,75,75);
  ellipse(600,70,75,75);


  //grass
  stroke(80, 180, 80);
  fill(60, 140, 60);
  rect(0, 260, width, 140);

  //path
  noStroke();
  fill(80);
  quad(430,400,580,400,540,260,500,260);

  //mountain background, right
  stroke(100);
  fill(180);
  triangle(600, 280, 800, 280, 700, -50);

  //house
  stroke('black');
  fill(140, 140, 200);
  rect(180, 180, 200, 150); //front
  fill(100, 100, 160);
  quad(380, 180, 380, 330, 420, 290, 420, 220); //side
  triangle(380, 180, 420, 220, 390, 160); //roof side
  fill(110,110,170);
  quad(180, 180, 380, 180, 390, 160, 190, 160); //roof front
  fill(140,100,170);
  rect(300,220,60,110); //door
  fill('black');
  ellipse(350,280,10,10); //knob
  fill(120,150,180);
  rect(200,220,60,60); //window
  fill(100, 130, 160);
  quad(390, 220, 390, 280, 415, 270, 415, 240); //side window

  /* tree */
  //tree trunk
  stroke('black');
  fill('brown');
  rect(90,160,50,200);

  fill('green');
  //triangle(18, 18, 18, 360, 81, 360); triangle example
  noStroke();
  ellipse(80,160,100,100);
  ellipse(150,160,100,100);
  ellipse(115,110,100,100);
  /* end tree */

  /*
  //cursor tracker text
  fill('black');
  text(mouseX + ", " + mouseY, 30, 30); */
}

function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
