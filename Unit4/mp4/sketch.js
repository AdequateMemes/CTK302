// Note - you must change line 19 to your own APPID to get this to work!

var weather, forecast;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var cloud, thermometer, frame, lat, long, forecastbutton1, currentbutton1, pingbutton, cloudy, sunny, rainy, warmer, cooler;

var h = hour();
var m = minute();

function preload() {
  newFont = loadFont('assets/Fjalla.ttf');
  locationData = getCurrentPosition();
}

function setup() {
  createCanvas(600, 500);
  cloud = loadImage("assets/cloud.png");
  thermometer = loadImage("assets/thermometer2.png");
  frame = loadImage("assets/frame2.png");
  forecastbutton1 = loadImage("assets/forecast1.png");
  currentbutton1 = loadImage("assets/current1.png");
  pingbutton = loadImage("assets/refresh.png");
  cloudy = loadImage("assets/Clouds.png");
  sunny = loadImage("assets/Clear.png");
  rainy = loadImage("assets/Rain.png");
  warmer = loadImage("assets/warmer.png");
  cooler = loadImage("assets/cooler.png");
  lat = locationData.latitude;
  long = locationData.longitude;
  // HERE is the call to get the weather.

  //var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Champaign,IL,US&units=imperial&'; // City,state
  //var myCityString = 'https://api.openweathermap.org/data/2.5/weather?zip=60430,us&units=imperial&'; // Zipcode
  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=imperial&' // geo implementation
  var forecastCityString = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&units=imperial&exclude=current,minutely&' // geo imp.

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=7a32c0473ea1d54bed2cb2bb1ab841a9'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;
  var forecastString = forecastCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
  loadJSON(forecastString, gotData2);

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

function gotData2(data2) {
  forecast = data2;
  console.log(forecast);
  hr2temp = forecast.hourly[2].temp;
  hr4temp = forecast.hourly[4].temp;
  hr6temp = forecast.hourly[6].temp;
  hr8temp = forecast.hourly[8].temp;
  day1max = forecast.daily[1].temp.max;
  day1min = forecast.daily[1].temp.min;
  day1weather = forecast.daily[1].weather[0].description;
  day1main = forecast.daily[1].weather[0].main;
  day2max = forecast.daily[2].temp.max;
  day2min = forecast.daily[2].temp.min;
  day2weather = forecast.daily[2].weather[0].description;
  day2main = forecast.daily[2].weather[0].main;
  day3max = forecast.daily[3].temp.max;
  day3min = forecast.daily[3].temp.min;
  day3weather = forecast.daily[3].weather[0].description;
  day3main = forecast.daily[3].weather[0].main;
  day4max = forecast.daily[4].temp.max;
  day4min = forecast.daily[4].temp.min;
  day4weather = forecast.daily[4].weather[0].description;
  day4main = forecast.daily[4].weather[0].main;
  day5max = forecast.daily[5].temp.max;
  day5min = forecast.daily[5].temp.min;
  day5weather = forecast.daily[5].weather[0].description;
  day5main = forecast.daily[5].weather[0].main;
  day6max = forecast.daily[6].temp.max;
  day6min = forecast.daily[6].temp.min;
  day6weather = forecast.daily[6].weather[0].description;
  day6main = forecast.daily[6].weather[0].main;
  day7max = forecast.daily[7].temp.max;
  day7min = forecast.daily[7].temp.min;
  day7weather = forecast.daily[7].weather[0].description;
  day7main = forecast.daily[7].weather[0].main;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather && forecast) {
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
      //text("At " + h + ":" + m + ", it will be " + hr8temp + " F.", 20, 400);

      image(forecastbutton1, 50, 425);
      image(pingbutton, 300, 425);

      // cloud
      noStroke();
      image(cloud, x, 300);

      // move the cloud's x position
      x = x + (windspeed / 4);
      if (x > width) x = -250;

      // thermometer
      fill('red');

      //var t = map(temp, -10, 100, 0, height-10);
      var t = temp * 4;
      rect(536, 428, 34, -t);
      image(thermometer, 456, 8);

      image(frame, 0, 0);
      break;

    case 2:
      textFont(newFont);
      textSize(20);
      background(150, 150, 255);
      fill('black');
      text("Temp in 2 hours: " + hr2temp + " F.", 20, 50);
      if (hr2temp > temp)
        image(warmer, 235, 30);
      if (hr2temp < temp)
        image(cooler, 235, 30);
      text("Temp in 4 hours: " + hr4temp + " F.", 20, 75);
      if (hr4temp > hr2temp)
        image(warmer, 235, 55);
      if (hr4temp < hr2temp)
        image(cooler, 235, 55);
      text("Temp in 6 hours: " + hr6temp + " F.", 20, 100);
      if (hr6temp > hr4temp)
        image(warmer, 235, 80);
      if (hr6temp < hr4temp)
        image(cooler, 235, 80);
      text("Temp in 8 hours: " + hr8temp + " F.", 20, 125);
      if (hr8temp > hr6temp)
        image(warmer, 235, 105);
      if (hr8temp < hr6temp)
        image(cooler, 235, 105);
      text("Tomorrow: [Low: " + day1min + " F] [High: " + day1max + "F]" + " [" + day1weather + "]", 20, 175);
      if (day1main == "Clouds")
        image(cloudy, 550, 155);
      if (day1main == "Rain")
        image(rainy, 550, 155);
      if (day1main == "Clear")
        image(sunny, 550, 155);
      text("In 2 days: [Low: " + day2min + " F] [High: " + day2max + "F]" + " [" + day2weather + "]", 20, 200);
      if (day2main == "Clouds")
        image(cloudy, 550, 180);
      if (day2main == "Rain")
        image(rainy, 550, 180);
      if (day2main == "Clear")
        image(sunny, 550, 180);
      text("In 3 days: [Low: " + day3min + " F] [High: " + day3max + "F]" + " [" + day3weather + "]", 20, 225);
      if (day3main == "Clouds")
        image(cloudy, 550, 205);
      if (day3main == "Rain")
        image(rainy, 550, 205);
      if (day3main == "Clear")
        image(sunny, 550, 205);
      text("In 4 days: [Low: " + day4min + " F] [High: " + day4max + "F]" + " [" + day4weather + "]", 20, 250);
      if (day4main == "Clouds")
        image(cloudy, 550, 230);
      if (day4main == "Rain")
        image(rainy, 550, 230);
      if (day4main == "Clear")
        image(sunny, 550, 230);
      text("In 5 days: [Low: " + day5min + " F] [High: " + day5max + "F]" + " [" + day5weather + "]", 20, 275);
      if (day5main == "Clouds")
        image(cloudy, 550, 255);
      if (day5main == "Rain")
        image(rainy, 550, 255);
      if (day5main == "Clear")
        image(sunny, 550, 255);
      text("In 6 days: [Low: " + day6min + " F] [High: " + day6max + "F]" + " [" + day6weather + "]", 20, 300);
      if (day6main == "Clouds")
        image(cloudy, 550, 280);
      if (day6main == "Rain")
        image(rainy, 550, 280);
      if (day6main == "Clear")
        image(sunny, 550, 280);
      text("In 7 days: [Low: " + day7min + " F] [High: " + day7max + "F]" + " [" + day7weather + "]", 20, 325);
      if (day7main == "Clouds")
        image(cloudy, 550, 305);
      if (day7main == "Rain")
        image(rainy, 550, 305);
      if (day7main == "Clear")
        image(sunny, 550, 305);

      image(currentbutton1, 50, 425);
      image(pingbutton, 300, 425);

      image(frame, 0, 0);
      break;

  }
}

  function mouseReleased() {

    if ((mouseX > 50) && (mouseX < 250) && (mouseY > 425) && (mouseY < 475)) {
      myState++;
      if (myState > 2) {
        myState = 0;
      }
    }
    if ((mouseX > 300) && (mouseX < 400) && (mouseY > 425) && (mouseY < 475)){
      location.reload();
    }
  }
