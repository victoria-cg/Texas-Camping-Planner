//function to get data for SerpAPI Google Flights API. Currently using JSON placeholder API -VG
function getApi() {
    //sets variable to get the URL for the API -VG
    var requestFlightUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    // fetches the variable for the API URL, stores its response in JSON? -VG
    fetch(requestFlightUrl)
    .then(function (response) {
      return response.json();
    })

    //Then we need fucntions here to get the data from the API and append it to HTML elements so that it displays on the screen, see class activity 6.3 -VG
}
//calls the getApi function
getApi();
console.log(getApi);

//These are variables so we can change the city the user looks for later in the project
let apiKey = '826bbb162ffd06dab609a97389a04db7';
let city = 'Houston';

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=Imperial";

//this is a function that turns the json data into data we can use
async function userCity(){    
  const response = await fetch(queryURL);
  var data = await response.json();
  console.log(data);
}
