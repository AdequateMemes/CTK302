// tl;dr: background starts red and then cycles
// the values of red, blue & green.

let state = 0;
let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(r, g, b);

  switch (state) {

    case 0: // This *should* only run once.
      r++;
      break;

    case 1:
      r++;
      b--;
      break;

    case 2:
      g++;
      r--;
      break;

    case 3:
      b++;
      g--;
      break;
  }

  if (r == 255) {
    state = 2;
  }
  if (g == 255) {
    state = 3;
  }
  if (b == 255) {
    state = 1;
  }
}
