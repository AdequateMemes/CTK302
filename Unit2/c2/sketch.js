var mic;
var vol;
var state = -1;
var stopwatch = 0;
var timer = 0;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}


function draw() {
  background('gray');

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  // check how loud the input is
  // if the volume is LOUD?

  switch (state) {

    case -1:
      textSize(18);
      text("Click to get started.", 120, height / 2);
      break;

    case 0:
    textSize(18);
      background(120, 120, 255);
      fill('white');
      stopwatch++;
      text("Hush.", 160, height / 2);
      text("You have been quiet for: " + (stopwatch / 60).toFixed(0) + " seconds.", 50, height / 2 + 50);
      if (vol > 0.10) {
        timer = 120;
        state = 1;
      }
      break;

    case 1:
      background('red');
      fill('white');
      textSize(50);
      text("THAT\nIS NOT\nHUSHED.", 100, 100);
      textSize(14);
      text("Anger time remaining: " + (timer / 60).toFixed(2), 100, 350);
      stopwatch = 0;
      timer--;
      if (vol > 0.10) {
        timer = 120;
      }
      if (timer < 0) {
        state = 0;
      }
      break;
  }


  // extra stuff for debugging
  //textSize(18);
  //text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function mouseReleased() {
  if (state == -1) {
    state = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
