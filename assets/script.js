
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
userCity()

var campurl = "https://developer.nps.gov/api/v1/campgrounds?stateCode=TX&limit=10&api_key=u5CiPtHmqSiAgcizRWaAZxplrNDN9wXMsKSPUC47"

async function campgrounds(){    
  const response = await fetch(campurl);
  var data = await response.json();
  console.log(data);
}
campgrounds()