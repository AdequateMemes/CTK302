var f1, f2, f3; //create variables f1 and f2 for two fonts

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  f1 = loadFont("assets/KGALittleSpark.ttf"); //initialize font; processor intensive, try to use only once in setup
  f2 = loadFont("assets/AlmondCream.ttf");
  f3 = loadFont("assets/StayHome.otf");
}

function draw() {
background(100);

textFont(f1, 80);
text("hello", width/2, height/2);
textFont(f2, 40);
text("these are different fonts,", width/2, 360);
text("it just isn't immediately apparent.", width/2, 400);
textFont(f3, 60);
text("fonts", width/2, 100);
}
