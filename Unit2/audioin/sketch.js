var mic;
var vol;
var x = 200;
var timer = 30;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn();  // what does "new" mean?
  mic.start();
}


function draw() {
  background('green');
  rect(x,300,75,20);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

// check how loud the input is
  if (vol > 0.10) { // if the volume is LOUD?
    // do something
  timer = 0;
  }

  if (timer < 30) {
    timer++;
    x += 5;
  }

  if (x > width) {
    x = -100;
  }

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
