
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
 
  //this is a function calling to every li with class of camp
  document.querySelectorAll('.camp').forEach(element =>{
    element.addEventListener('click', event =>{
      var camp1 = document.getElementById('camp1');
     if(element.id === 'camp1'){
      console.log('true');
      var camp1SitesNum = document.createElement('p');
      var camp1SitesEmail = document.createElement('p');
      var camp1SitesDes = document.createElement('p');
      var camp1SitesImg = document.createElement('img');

      camp1SitesNum.textContent = data.data[0].campsites.totalSites;
      camp1SitesEmail.textContent = data.data[0].contacts.emailAddresses[0].emailAddress;
      camp1SitesDes.textContent = data.data[0].description;
      camp1SitesImg.innerHTML = data.data[0].images[1].url;

      camp1.appendChild(camp1SitesNum);
      camp1.appendChild(camp1SitesEmail);
      camp1.appendChild(camp1SitesDes);
      camp1.appendChild(camp1SitesImg);
     } 
    
//this is the start of the Bird Island Basin Campground
    var camp2 = document.getElementById('camp2');
    if(element.id === 'camp2'){
     console.log('true');
     var camp2SitesNum = document.createElement('p');
     var camp2SitesEmail = document.createElement('p');
     var camp2SitesDes = document.createElement('p');
     var camp2SitesImg = document.createElement('img');

     camp2SitesNum.textContent = data.data[1].campsites.totalSites;
     camp2SitesEmail.textContent = data.data[1].contacts.emailAddresses[0].emailAddress;
     camp2SitesDes.textContent = data.data[1].description;
     camp2SitesImg.innerHTML = data.data[1].images[1].url;

     camp2.appendChild(camp2SitesNum);
     camp2.appendChild(camp2SitesEmail);
     camp2.appendChild(camp2SitesDes);
     camp2.appendChild(camp2SitesImg);
    } 
   })

})
}

campgrounds()

