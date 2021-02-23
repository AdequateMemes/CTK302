let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0:
      background('white');
      text("case 0", 250, 250);
      break;
    case 1:
      background('grey');
      text("case 1", 250, 250);
      break;
    case 2:
      background('pink');
      text("case 2", 250, 250);
      break;
  }

  rect(200, 400, 100, 50);
}

function mouseReleased() { 

  if ((mouseX > 200) && (mouseX < 300) && (mouseY > 400) && (mouseY < 450)) {
    state++;
    if (state > 2) {
      state = 0;
    }
  }
}
