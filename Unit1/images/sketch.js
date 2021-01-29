var drg, xiv, mns, zr; //declares the aforementioned as variables
//'let' also works in place of 'var'

function setup() {
  createCanvas(800, 800);
  drg = loadImage("assets/DRGlogo.jpg"); // These commands
  xiv = loadImage("assets/FFXIVlogo.png"); // load the images
  mns = loadImage("assets/MNSlogo.png"); // into the program
  zr = loadImage("assets/ZRlogo.jpg"); // for another command to call

  imageMode(CENTER);
  /* Remove comment if these are needed later.
  rectMode(CENTER);
  textAlign(CENTER);
  */
}

function draw() {
background(200,200,235);
image(drg, width/2, height/2, 332, 200);
image(xiv, width/2, height/2 - 200, 302, 200);
image(mns, width/2, height/2 + 200, 346, 200);
}
