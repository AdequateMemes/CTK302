let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(48);
}

function draw() {
  switch(state){
    case 0:
    background('red');
    text("A guy walks into a bar,", width/2, height/2);
    break;

    case 1:
    background('green');
    text("and a passerby asks,\n \"Are you okay?\n That looked painful.\"", width/2, height/2);
    break;
  }
}

function mouseReleased() {
  state++ ;
  if (state > 1){
    state = 0;
  }
}
