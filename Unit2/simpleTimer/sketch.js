let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  timer++;
  if (timer > 5*60) {
    timer = 0;
    print("beep");
  }
}
