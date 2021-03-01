var state = 0;
var timer = 0;
var score = 0;
var button1 = 0;
var button2 = 0;
var difficulty = 0; // a growing modifier up to a maximum value of 3 seconds (180 value), which will be subtracted from round timers.
var img; // replace with specific names as needed

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  textAlign(CENTER);
  imageMode(CENTER);
  img = loadImage("Stopwatch.png"); // These commands
}

function draw() {
  background(210, 210, 255);
  // button frames
  textSize(18);
  fill('white');
  // row 1
  rect(100, 100, 100, 100); // remember: x, y, width, height. // Possibly replace with a button graphic?
  rect(200, 100, 100, 100);
  rect(300, 100, 100, 100);
  rect(400, 100, 100, 100);
  // row 2
  rect(100, 200, 100, 100);
  rect(200, 200, 100, 100);
  rect(300, 200, 100, 100);
  rect(400, 200, 100, 100);
  // row 3
  rect(100, 300, 100, 100);
  rect(200, 300, 100, 100);
  rect(300, 300, 100, 100);
  rect(400, 300, 100, 100);
  // row 4
  rect(100, 400, 100, 100);
  rect(200, 400, 100, 100);
  rect(300, 400, 100, 100);
  rect(400, 400, 100, 100);

  switch (state) {
    case 0: // title screen
      score = 0;
      fill('black');
      text("Grid Clicker", width / 2, 20);
      text("After a few seconds, tiles will turn red.\nClick tiles fast enough to gain points.\nThe game ends when time is up and the red tiles are not clicked.", width / 2, 540);
      fill('green');
      rect(200, 275, 200, 50);
      fill('white')
      text("Start", width / 2, 305);
      break;
    case 1: // ready phase
      fill('black');
      image(img, 550, 290, 86, 115); // stopwatch
      fill('green')
      arc(550, 305, 78, 78, -timer*2, TWO_PI);
      fill('black');
      text("Next activation in: " + (timer / 60).toFixed(2), width / 2, 20);
      text("Score: " + score, width / 2, 540);
      timer--;
      if (timer == 0) {
        state++;
      }
      break;
    case 2: // generating active buttons
      text("Generating...", width / 2, 20);
      button1 = Math.round(random(1, 12));
      button2 = Math.round(random(1, 12));
      if (button2 == button1) {
        button2 = Math.round(random(1, 12));
      }
      timer = 300 - difficulty;
      state++;
      break;
    case 3: // active game phase
      fill('red');
      text("Click red buttons!: " + (timer / 60).toFixed(2), width / 2, 20);
      text("b1: " + button1 + "/ b2: " + button2, width / 2, 60);
      // row 1
      if (button1 == 1 || button2 == 1) rect(100, 100, 100, 100);
      if (button1 == 2 || button2 == 2) rect(200, 100, 100, 100);
      if (button1 == 3 || button2 == 3) rect(300, 100, 100, 100);
      if (button1 == 4 || button2 == 4) rect(400, 100, 100, 100);
      // row 2
      if (button1 == 5 || button2 == 5) rect(100, 200, 100, 100);
      if (button1 == 6 || button2 == 6) rect(200, 200, 100, 100);
      if (button1 == 7 || button2 == 7) rect(300, 200, 100, 100);
      if (button1 == 8 || button2 == 8) rect(400, 200, 100, 100);
      // row 3
      if (button1 == 9 || button2 == 9) rect(100, 300, 100, 100);
      if (button1 == 10 || button2 == 10) rect(200, 300, 100, 100);
      if (button1 == 11 || button2 == 11) rect(300, 300, 100, 100);
      if (button1 == 12 || button2 == 12) rect(400, 300, 100, 100);
      // row 4
      if (button1 == 13 || button2 == 13) rect(100, 400, 100, 100);
      if (button1 == 14 || button2 == 14) rect(200, 400, 100, 100);
      if (button1 == 15 || button2 == 15) rect(300, 400, 100, 100);
      if (button1 == 16 || button2 == 16) rect(400, 400, 100, 100);

      fill('black');
      text("Score: " + score, width / 2, 540);

      timer--;
      if ((button1 == 0) && (button2 == 0)) {
        if (difficulty != 180) {
          difficulty += 30;
        }
        timer = 180;
        state = 1;
      }
      if (timer < 0) {
        state++;
      }
      break;
    case 4: // results screen
      fill('black');
      text("Time's up!\nYou clicked: " + score + " red buttons.", width / 2, 20);
      break;
  }
}

// MODIFY THIS. It was only pasted in.
function mouseReleased() {

  if ((state == 0) && (mouseX > 200) && (mouseX < 400) && (mouseY > 275) && (mouseY < 325)) {
    timer = 180;
    state++;
  }


  // this is going to be a bit ugly, but:
  // button click checks
  if (state == 3) {
    // [BUTTON 1]
    // row 1
    if ((button1 == 1) && (mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 2) && (mouseX > 200) && (mouseX < 300) && (mouseY > 100) && (mouseY < 200)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 3) && (mouseX > 300) && (mouseX < 400) && (mouseY > 100) && (mouseY < 200)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 4) && (mouseX > 400) && (mouseX < 500) && (mouseY > 100) && (mouseY < 200)) {
      button1 = 0;
      score++;
    }
    // row 2
    if ((button1 == 5) && (mouseX > 100) && (mouseX < 200) && (mouseY > 200) && (mouseY < 300)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 6) && (mouseX > 200) && (mouseX < 300) && (mouseY > 200) && (mouseY < 300)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 7) && (mouseX > 300) && (mouseX < 400) && (mouseY > 200) && (mouseY < 300)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 8) && (mouseX > 400) && (mouseX < 500) && (mouseY > 200) && (mouseY < 300)) {
      button1 = 0;
      score++;
    }
    // row 3
    if ((button1 == 9) && (mouseX > 100) && (mouseX < 200) && (mouseY > 300) && (mouseY < 400)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 10) && (mouseX > 200) && (mouseX < 300) && (mouseY > 300) && (mouseY < 400)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 11) && (mouseX > 300) && (mouseX < 400) && (mouseY > 300) && (mouseY < 400)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 12) && (mouseX > 400) && (mouseX < 500) && (mouseY > 300) && (mouseY < 400)) {
      button1 = 0;
      score++;
    }
    // row 4
    if ((button1 == 13) && (mouseX > 100) && (mouseX < 200) && (mouseY > 400) && (mouseY < 500)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 14) && (mouseX > 200) && (mouseX < 300) && (mouseY > 400) && (mouseY < 500)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 15) && (mouseX > 300) && (mouseX < 400) && (mouseY > 400) && (mouseY < 500)) {
      button1 = 0;
      score++;
    }
    if ((button1 == 16) && (mouseX > 400) && (mouseX < 500) && (mouseY > 400) && (mouseY < 500)) {
      button1 = 0;
      score++;
    }

    // [BUTTON 2]
    // row 1
    if ((button2 == 1) && (mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 2) && (mouseX > 200) && (mouseX < 300) && (mouseY > 100) && (mouseY < 200)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 3) && (mouseX > 300) && (mouseX < 400) && (mouseY > 100) && (mouseY < 200)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 4) && (mouseX > 400) && (mouseX < 500) && (mouseY > 100) && (mouseY < 200)) {
      button2 = 0;
      score++;
    }
    // row 2
    if ((button2 == 5) && (mouseX > 100) && (mouseX < 200) && (mouseY > 200) && (mouseY < 300)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 6) && (mouseX > 200) && (mouseX < 300) && (mouseY > 200) && (mouseY < 300)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 7) && (mouseX > 300) && (mouseX < 400) && (mouseY > 200) && (mouseY < 300)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 8) && (mouseX > 400) && (mouseX < 500) && (mouseY > 200) && (mouseY < 300)) {
      button2 = 0;
      score++;
    }
    // row 3
    if ((button2 == 9) && (mouseX > 100) && (mouseX < 200) && (mouseY > 300) && (mouseY < 400)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 10) && (mouseX > 200) && (mouseX < 300) && (mouseY > 300) && (mouseY < 400)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 11) && (mouseX > 300) && (mouseX < 400) && (mouseY > 300) && (mouseY < 400)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 12) && (mouseX > 400) && (mouseX < 500) && (mouseY > 300) && (mouseY < 400)) {
      button2 = 0;
      score++;
    }
    // row 4
    if ((button2 == 13) && (mouseX > 100) && (mouseX < 200) && (mouseY > 400) && (mouseY < 500)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 14) && (mouseX > 200) && (mouseX < 300) && (mouseY > 400) && (mouseY < 500)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 15) && (mouseX > 300) && (mouseX < 400) && (mouseY > 400) && (mouseY < 500)) {
      button2 = 0;
      score++;
    }
    if ((button2 == 16) && (mouseX > 400) && (mouseX < 500) && (mouseY > 400) && (mouseY < 500)) {
      button2 = 0;
      score++;
    }
  } // this is entirely so i can condense 140 lines into one in atom. lmao. https://i.imgur.com/4Qevbnn.png

}
