var bubbles = [];
var bgimg;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  // let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1m6JrJ4Pl2BQu9JfLSHbSirUpJU-wpXzWbatjOMsQMjw'; // your key goes here
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  bgimg = loadImage("databg.png");
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].name, data[i].interactivity, data[i].disposition, data[i].sharing)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('lightgray');
  image(bgimg, 0, 0);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myInteractivity, myDisposition, mySharing) {
    this.name = myName;
    this.interactivity = myInteractivity;
    this.disposition = myDisposition;
    this.sharing = mySharing;
    this.pos = createVector(random(width), random(height));
    if (this.sharing == "Share")
      this.vel = createVector(random(3), random(-3)) ;
    if (this.sharing == "Self")
      this.vel = createVector(random(2), random(3)) ;


  }


  display() {
    if (this.disposition == "Serious") {
      if (this.sharing == "Share") fill('lightblue'); // colors for sharing (light blue if prefer to share, red if keeping to yourself)
      else fill('pink');
      rect(this.pos.x, this.pos.y, 50, 50);
    } else {
      if (this.sharing == "Share") fill('lightblue'); // colors for sharing (light blue if prefer to share, red if keeping to yourself)
      else fill('pink');
      ellipse(this.pos.x, this.pos.y, 50, 50);
    }

    fill('black');
    text(this.name, this.pos.x, this.pos.y);
    text(this.interactivity, this.pos.x, this.pos.y + 15);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = 600;
  }

}
