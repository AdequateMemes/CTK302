let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
      background('grey');
      text("state 0", 100, 100);
      pattern(25, 5);
      break;

    case 1:
      background('green');
      text("state 1", 100, 100);
      pattern(10, 50);
      break;

    case 2:
      background(100, 220, 0); //yellow green
      text("state 2", 100, 100);
      pattern(5, 5);
      break;

    case 3:
      background('yellow');
      text("state 3", 100, 100);
      pattern(15, 30);
      break;

    case 4:
      background('orange');
      text("state 4", 100, 100);
      pattern(45, 20);
      break;

    case 5:
      background('red');
      text("state 5", 100, 100);
      pattern(5, 25);
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 5) {
    state = 0;
  }
}

function pattern(p1, p2) {
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 20; i++) {
      rect(i * 50 + 10, j * 50 + 10, p1, p2);
    }
  }
}
