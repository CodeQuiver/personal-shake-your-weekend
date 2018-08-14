// configuration
require("./api_access/dotenv").config();

// setting up keys file and accessing
var keys = require("./api_access/keys");

var darksky = new DarkSky(keys.darksky);
//creates object to pull keys from and saves in darksky variable

// setting up request node package for api request- NOTE- could use request package here, or could change to coding the http request in vanilla javascript
var request = require('request');

//EXAMPLE CODE for request via node package:
/* // Request to the OMDB API with the movie specified
           request(queryURL, function(error, response, body) {

               // If the request is successful (i.e. if the response status code is 200)
               if (!error && response.statusCode === 200) {
       
                   // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
                   prettyOmdb = JSON.parse(body); //sets the variable to the pretty-print JSON object so before passing it
                   omdbPrint(prettyOmdb); // calls the printing function using the pretty-print JSON object
               }
           });
*/

// TODO- re-do this section using the Dark Sky API's Time Machine function which will return answers for future dates, not only the current weather


//TEST VALUES
// var latitude = "-77.070503";
// var longtitude= "38.930176";


    function searchArea(latitude, longitude) {
    // Delete the previous result prior to adding new entry
    // $("#weather-div").empty();


     var queryURL="https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=imperial&APPID=bc4a3d5136b4a9ebf72b912efcb3349a";
     var weatherOutput = $("<div id='weather-div'>");
     $.ajax({
         url: queryURL,
        method: "GET"
        // After data comes back from the request
                }).then(function(response) {
                // get each value and store in variable
                // response = {
                //    main: 
                //      {
                //          temp: <some_num>,
                //          temp_max: <some_num>,
                //          temp_min: <some_num>
                //      }
                //    weather: 
                //      [
                //        {
                //          description: "...",
                //          icon: "...",
                //        },
                //      ]
                // }

                var weathDescrip = "Unknown";
                var weathIcon = "Unknown";
                var lowTemp = "Unknown";
                var highTemp = "Unknown";

                if (response.weather.length > 0) {
                  var weathDescrip = response.weather[0].description;
                  console.log(response);
                  console.log(weathDescrip);
                  console.log('test............');

                  var weathIcon = response.weather[0].icon;
                  console.log(weathIcon);

                  var lowTemp = response.main.temp_min;
                  console.log(lowTemp);

                  var highTemp = response.main.temp_max;
                  console.log(highTemp);
                }


                //add each item to a new html element and name element as a variable
                var weatherDescription = $("<div style='font-size: 20px;text-transform: uppercase;'>").text(weathDescrip);

                // var weatherIcon = $("<img>").attr('src',weathIcon);

                var minTemp = $("<span>").append("<span style='font-weight:bold;'>Low: </span>" + lowTemp + " &#x2109; | ");

                var maxTemp =  $("<span>").append("<span style='font-weight:bold;'>High: </span>" + highTemp + " &#x2109; <br />");

                //append all elements to the #weather-div

                //weatherOutput.append(weatherIcon);
                weatherOutput.append(weatherDescription);
                weatherOutput.append(minTemp);
                weatherOutput.append(maxTemp);

                //return weatherOutput;

                  }
  );
  console.log("z stuff ----------------------------------------------");
  console.log(weatherOutput);
  return weatherOutput;
}

// // Event handler for user clicking the weather button
// $("#select-weather").on("click", function(event) {
//     // Preventing the button from trying to submit the form
//     event.preventDefault();
//     // Storing the weather
//     var weather = $("#weather-input").val().trim();

//     // Running the searchBandsInTown function (passing in the artist as an argument)
//     searchArea(weather);

//     //empty search box
//     $("#weather-input").val("");
  // });

