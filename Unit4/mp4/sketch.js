// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var cloud, thermometer, frame, lat, long;

function preload() {
  newFont = loadFont ('assets/Fjalla.ttf');
  locationData =  getCurrentPosition();
}

function setup() {
  createCanvas(600, 500);
  cloud = loadImage("assets/cloud.png");
  thermometer = loadImage("assets/thermometer2.png");
  frame = loadImage("assets/frame2.png");
  lat = locationData.latitude;
  long = locationData.longitude;
  // HERE is the call to get the weather.

  //var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Champaign,IL,US&units=imperial&'; // City,state
  //var myCityString = 'https://api.openweathermap.org/data/2.5/weather?zip=60430,us&units=imperial&'; // Zipcode
  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=imperial&' // Lat,long. time for geo?

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=7a32c0473ea1d54bed2cb2bb1ab841a9'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  feelslike = weather.main.feels_like;
  humid = weather.main.humidity;
  desc = weather.weather[0].description;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      textFont(newFont);
      textSize(24);
      background(150, 150, 255);
      fill('black');
      text("Why, hello.", 20, 50);
      text("Here in " + weather.name + ",", 20, 100);
      text("the current weather is: " + desc + ".", 20, 125);
      text("The temperature is " + temp + " F,", 20, 175);
      text("but it feels like " + feelslike + " F.", 20, 200);
      text("Current humidity: " + humid + "%", 20, 250);
      text("The windspeed is " + windspeed + " mph.", 20, 300);


      // cloud
      noStroke();
      image(cloud, x, 300);

      // move the cloud's x position
      x = x + (windspeed/4);
      if (x > width) x = -250;

      // thermometer
      fill('red');

      //var t = map(temp, -10, 100, 0, height-10);
      var t = temp*4;
      rect(536, 428, 34, -t);
      image(thermometer, 456, 8);
      image(frame, 0, 0);

      break;


  }
}
