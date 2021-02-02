let song1; //declare variable

function preload() {
  song1 = loadSound("assets/sparkwood.mp3");
}

function setup() {
  createCanvas(500, 500);
  song1.loop(); // For the love of all that is good, do NOT put this in draw lmao
  // unless you're trying to erase someone's ears ( ͡° ͜ʖ ͡°)
  song1.setVolume(.1);                      
}

function draw() {
background(100);
}

function mouseReleased(){
  if (song1.isPlaying()){
    song1.pause();
  } else {
    song1.loop();
  }
}
