//function to get data for SerpAPI Google Flights API. Currently using JSON placeholder API -VG
// async function getApi() {
//   var flightApiKey = '&api_key=c404903e1b82f634995e519657fdfc7cf3033f11612475935d15434eea93e161';
//     //sets variable to get the URL for the API -VG
//     var requestFlightUrl = 'https://serpapi.com/search.json?engine=google_flights&departure_id=PEK&arrival_id=AUS&outbound_date=2024-02-06&return_date=2024-02-12&currency=USD&hl=en' + flightApiKey;
//     // fetches the variable for the API URL -VG
//     var res = await fetch(requestFlightUrl, {
//       method: 'GET', 
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/json',
        
//       },
//     })
//     var data = await res.json();
//     console.log(data);
//     // //.then(res => res.json())
    // .then(data => console.log(data))
    // .catch(error=>console.log(error));//

//     }
//     //Then we need fucntions here to get the data from the API and append it to HTML elements so that it displays on the screen, see class activity 6.3 
// //calls the getApi function
// getApi();
// //These are variables so we can change the city the user looks for later in the project
let apiKey = '826bbb162ffd06dab609a97389a04db7';
let city = 'Houston';

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=Imperial";

//this is a function that turns the json data into data we can use
async function userCity(){    
  const response = await fetch(queryURL);
  var data = await response.json();
  console.log(data);
}
