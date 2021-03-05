let state = 0;
let song1, song2, song3; //declare variable

function preload() {
  song1 = loadSound("assets/Field.mp3");
  song2 = loadSound("assets/FATE.mp3");
  song3 = loadSound("assets/safe.mp3");

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  switch (state) {

    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      background(150, 200, 255);
      text("La Noscean Field", 100, 100);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      background(255, 175, 100);
      text("Hard To Miss", 100, 100);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      background(110, 100, 255);
      text("Rest", 100, 100);
      break;

  }
}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();

  state++;
  if (state > 5) state = 0;

}
