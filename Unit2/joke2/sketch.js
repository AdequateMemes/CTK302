let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(48);
}

function draw() {
  switch (state) {
    case 0:
      background('grey');
      text("I wanted to write a\nchemistry joke,", width / 2, height / 2);
      break;

    case 1:
      background('yellow');
      text("but all of the\ngood ones Argon.", width / 2, height / 2);
      break;
  }

  timer++;
  if (timer > 3 * 60) {
    state++;
    timer = 0;
    if (state > 1) {
      state = 0;
    }
  }

}
