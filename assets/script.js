var campurl = "https://developer.nps.gov/api/v1/campgrounds?stateCode=TX&limit=10&api_key=u5CiPtHmqSiAgcizRWaAZxplrNDN9wXMsKSPUC47"

async function campgrounds(){    
  const response = await fetch(campurl);
  var data = await response.json();
  console.log(data);
 
  //this is a function calling to every li with class of camp
  document.querySelectorAll('.camp').forEach(element =>{
    element.addEventListener('click', event =>{
      event.preventDefault();
      var camp1 = document.getElementById('camp1');
     if(element.id === 'camp1'){
      event.preventDefault();
      console.log('true');
      var camp1SitesNum = document.createElement('p');
      var camp1SitesEmail = document.createElement('p');
      var camp1SitesDes = document.createElement('p');
      var camp1SitesImg = document.createElement('img');

      camp1SitesNum.textContent = 'Number of campsites avaliable: ' +data.data[0].campsites.totalSites;
      camp1SitesEmail.textContent = 'Contact Email: ' + data.data[0].contacts.emailAddresses[0].emailAddress;
      camp1SitesDes.textContent = 'Description: ' + data.data[0].description;
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

     camp2SitesNum.textContent = 'Number of campsites avaliable: ' +data.data[1].campsites.totalSites;
     camp2SitesEmail.textContent ='Contact Email: ' + data.data[1].contacts.emailAddresses[0].emailAddress;
     camp2SitesDes.textContent = 'Description: ' +data.data[1].description;
     camp2SitesImg.innerHTML = data.data[1].images[1].url;

     camp2.appendChild(camp2SitesNum);
     camp2.appendChild(camp2SitesEmail);
     camp2.appendChild(camp2SitesDes);
     camp2.appendChild(camp2SitesImg);
    } 
//this is the information imput for Blue Creek
    var camp3 = document.getElementById('camp3');
    if(element.id === 'camp3'){
     console.log('true');
     var camp3SitesNum = document.createElement('p');
     var camp3SitesEmail = document.createElement('p');
     var camp3SitesDes = document.createElement('p');
     var camp3SitesImg = document.createElement('img');

     camp3SitesNum.textContent = 'Number of campsites avaliable: ' +data.data[2].campsites.totalSites;
     camp3SitesEmail.textContent = 'Contact Email: ' +data.data[2].contacts.emailAddresses[0].emailAddress;
     camp3SitesDes.textContent ='Description: ' + data.data[2].description;
     camp3SitesImg.innerHTML = data.data[2].images[0].url;

     camp3.appendChild(camp3SitesNum);
     camp3.appendChild(camp3SitesEmail);
     camp3.appendChild(camp3SitesDes);
     camp3.appendChild(camp3SitesImg);
    }
//this is the information for the blue ridge wilderness 
    var camp4 = document.getElementById('camp4');
    if(element.id === 'camp4'){
     console.log('true');
     var camp4SitesNum = document.createElement('p');
     var camp4SitesEmail = document.createElement('p');
     var camp4SitesDes = document.createElement('p');
     var camp4SitesImg = document.createElement('img');

     camp4SitesNum.textContent = 'Number of campsites avaliable: ' +data.data[3].campsites.totalSites;
     camp4SitesEmail.textContent = "No Email Avaliable";
     camp4SitesDes.textContent = 'Description: ' +data.data[3].description;
     camp4SitesImg.innerHTML = data.data[3].images[0].url;

     camp4.appendChild(camp4SitesNum);
     camp4.appendChild(camp4SitesEmail);
     camp4.appendChild(camp4SitesDes);
     camp4.appendChild(camp4SitesImg);
    }

    //this is the information for blue west
    var camp5 = document.getElementById('camp5');
    if(element.id === 'camp5'){
     console.log('true');
     var camp5SitesNum = document.createElement('p');
     var camp5SitesEmail = document.createElement('p');
     var camp5SitesDes = document.createElement('p');
     var camp5SitesImg = document.createElement('img');

     camp5SitesNum.textContent = 'Number of campsites avaliable: ' +data.data[4].campsites.totalSites;
     camp5SitesEmail.textContent = 'Contact Email: ' +data.data[4].contacts.emailAddresses[0].emailAddress;
     camp5SitesDes.textContent ='Description: ' + data.data[4].description;
     camp5SitesImg.innerHTML = data.data[4].images[0].url;

     camp5.appendChild(camp5SitesNum);
     camp5.appendChild(camp5SitesEmail);
     camp5.appendChild(camp5SitesDes);
     camp5.appendChild(camp5SitesImg);
    }

    var camp6 = document.getElementById('camp6');
    if(element.id === 'camp6'){
     console.log('true');
     var camp6SitesNum = document.createElement('p');
     var camp6SitesEmail = document.createElement('p');
     var camp6SitesDes = document.createElement('p');
     var camp6SitesImg = document.createElement('img');

     camp6SitesNum.textContent ='Number of campsites avaliable: ' + data.data[5].campsites.totalSites;
     camp6SitesEmail.textContent = 'Contact Email: ' +data.data[5].contacts.emailAddresses[0].emailAddress;
     camp6SitesDes.textContent = 'Description: ' +data.data[5].description;
     camp6SitesImg.innerHTML = data.data[5].images[0].url;

     camp6.appendChild(camp6SitesNum);
     camp6.appendChild(camp6SitesEmail);
     camp6.appendChild(camp6SitesDes);
     camp6.appendChild(camp6SitesImg);
    }
   

   var camp7 = document.getElementById('camp7');
   if(element.id === 'camp7'){
    console.log('true');
    var camp7SitesNum = document.createElement('p');
    var camp7SitesEmail = document.createElement('p');
    var camp7SitesDes = document.createElement('p');
    var camp7SitesImg = document.createElement('img');

    camp7SitesNum.textContent ='Number of campsites avaliable: ' + data.data[6].campsites.totalSites;
    camp7SitesEmail.textContent = "No Email Avaliable";
    camp7SitesDes.textContent ='Description: ' + data.data[6].description;
    camp7SitesImg.innerHTML = data.data[6].images[0].url;

    camp7.appendChild(camp7SitesNum);
    camp7.appendChild(camp7SitesEmail);
    camp7.appendChild(camp7SitesDes);
    camp7.appendChild(camp7SitesImg);
    }

   var camp8 = document.getElementById('camp8');
   if(element.id === 'camp8'){
    console.log('true');
    var camp8SitesNum = document.createElement('p');
    var camp8SitesEmail = document.createElement('p');
    var camp8SitesDes = document.createElement('p');
    var camp8SitesImg = document.createElement('img');

    camp8SitesNum.textContent = 'Number of campsites avaliable: ' +data.data[7].campsites.totalSites;
    camp8SitesEmail.textContent ='Contact Email: ' + data.data[7].contacts.emailAddresses[0].emailAddress;
    camp8SitesDes.textContent ='Description: ' + data.data[7].description;
    camp8SitesImg.innerHTML = data.data[7].images[0].url;

    camp8.appendChild(camp8SitesNum);
    camp8.appendChild(camp8SitesEmail);
    camp8.appendChild(camp8SitesDes);
    camp8.appendChild(camp8SitesImg);
   }

   var camp9 = document.getElementById('camp9');
   if(element.id === 'camp9'){
    console.log('true');
    var camp9SitesNum = document.createElement('p');
    var camp9SitesEmail = document.createElement('p');
    var camp9SitesDes = document.createElement('p');
    var camp9SitesImg = document.createElement('img');

    camp9SitesNum.textContent ='Number of campsites avaliable: '+  + data.data[8].campsites.totalSites;
    camp9SitesEmail.textContent = "No Email Avaliable";
    camp9SitesDes.textContent ='Description: ' + data.data[8].description;
    camp9SitesImg.innerHTML = data.data[8].images[0].url;

    camp9.appendChild(camp9SitesNum);
    camp9.appendChild(camp9SitesEmail);
    camp9.appendChild(camp9SitesDes);
    camp9.appendChild(camp9SitesImg);
   }

   var camp10 = document.getElementById('camp10');
   if(element.id === 'camp10'){
    console.log('true');
    var camp10SitesNum = document.createElement('p');
    var camp10SitesEmail = document.createElement('p');
    var camp10SitesDes = document.createElement('p');
    var camp10SitesImg = document.createElement('img');

    camp10SitesNum.textContent ='Number of campsites avaliable: ' + data.data[9].campsites.totalSites;
    camp10SitesEmail.textContent ='Contact Email: ' + data.data[9].contacts.emailAddresses[0].emailAddress;
    camp10SitesDes.textContent ='Description: ' + data.data[9].description;
    camp10SitesImg.innerHTML = data.data[9].images[0].url;

    camp10.appendChild(camp10SitesNum);
    camp10.appendChild(camp10SitesEmail);
    camp10.appendChild(camp10SitesDes);
    camp10.appendChild(camp10SitesImg);
   }
  })
})
}

campgrounds()
//these are arrays with each campsites lat[0] and long[1] so we can call to then when the user searches
var NorthCampground = ['29.512',"-100.98" ];
var BirdIsland = ['27.512','-97.313'];
var BlueCreek = ['35.723','-101.663'];
var BlueRidge = ['31.948','-104.871'];
var Bluewest = ['35.682','-101.628'];
var Bugbee = ['35.724','-101.5901'];
var Bush = ['31.926','-104.8766'];
var Cedar = ['35.795','-101.244'];
var Chimney = ['35.691','-101.6422'];
var Chisos = ['29.275','-103.022'];

 //this is a function that turns the json data into data we can use
 async function LatLongWeather(Lat, Long){ 
  let apiKey = '826bbb162ffd06dab609a97389a04db7';
  let queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + Lat + "&lon="+ Long +"&appid=" + apiKey +"&units=Imperial";
  
 const response = await fetch(queryURL);
 var data = await response.json();
 console.log(data);
 var campGround = searchCamp.value.trim()

 var nameDisplay = document.querySelector('#day1');
 var tempDisplay = document.querySelector('#temp1');
 var windDisplay = document.querySelector('#wind1');
 var descriptionDisplay = document.querySelector('#description1');
 
 var nameDisplay2 = document.querySelector('#day2');
 var tempDisplay2 = document.querySelector('#temp2');
 var windDisplay2 = document.querySelector('#wind2');
 var descriptionDisplay2 = document.querySelector('#description2');

 var nameDisplay3 = document.querySelector('#day3');
 var tempDisplay3 = document.querySelector('#temp3');
 var windDisplay3 = document.querySelector('#wind3');
 var descriptionDisplay3 = document.querySelector('#description3');

 var nameDisplay4 = document.querySelector('#day4');
 var tempDisplay4 = document.querySelector('#temp4');
 var windDisplay4 = document.querySelector('#wind4');
 var descriptionDisplay4 = document.querySelector('#description4');

 var nameDisplay5 = document.querySelector('#day5');
 var tempDisplay5 = document.querySelector('#temp5');
 var windDisplay5 = document.querySelector('#wind5');
 var descriptionDisplay5 = document.querySelector('#description5');
 
 nameDisplay.innerHTML = 'Campground: '+ campGround;
 tempDisplay.innerHTML =  'Temperature: ' +  Math.round(data.list[0].main.feels_like) + " °f" ;
 windDisplay.innerHTML = 'Wind: ' + Math.round(data.list[0].wind.speed);
 descriptionDisplay.innerHTML = data.list[0].weather[0].description;
 
 nameDisplay2.innerHTML = 'Campground: ' + campGround;
 tempDisplay2.innerHTML = 'Temperature: ' + Math.round(data.list[1].main.feels_like) + " °f" ;
 windDisplay2.innerHTML = 'Wind: ' + Math.round(data.list[1].wind.speed) + " mph";
 descriptionDisplay2.innerHTML = data.list[1].weather[0].description;

 nameDisplay3.innerHTML = 'Campground: ' + campGround;
 tempDisplay3.innerHTML = 'Temperature: ' + Math.round(data.list[2].main.feels_like) + " °f" ;
 windDisplay3.innerHTML = 'Wind: ' +  Math.round(data.list[2].wind.speed) + " mph";
 descriptionDisplay3.innerHTML = data.list[2].weather[0].description;

 nameDisplay4.innerHTML = 'Campground: '+ campGround;
 tempDisplay4.innerHTML = 'Temperature: ' + Math.round(data.list[3].main.feels_like) + " °f" ;
 windDisplay4.innerHTML = 'Wind: ' + Math.round(data.list[3].wind.speed) + " mph";
 descriptionDisplay4.innerHTML = data.list[3].weather[0].description;

 nameDisplay5.innerHTML = 'Campground: '+ campGround;
 tempDisplay5.innerHTML = 'Temperature: ' + Math.round(data.list[4].main.feels_like) + " °f" ;
 windDisplay5.innerHTML = 'Wind: ' +  Math.round(data.list[4].wind.speed) + " mph";
 descriptionDisplay5.innerHTML = data.list[1].weather[0].description;

 }

var searchCamp = document.querySelector('#camp-search')
var searchBtn = document.querySelector('#searchBtn')
var forecastDisplay = document.querySelector('.forecast');


searchBtn.addEventListener('click', ()=>{
  forecastDisplay.style.display = 'flex';
  var campGround = searchCamp.value.trim();

  if(campGround === 'North Campground'){
    Lat = NorthCampground[0];
    Long = NorthCampground[1];
    LatLongWeather(Lat,Long);
  }
  else if(campGround === 'Bird Island Basin Campground'){
    Lat = BirdIsland[0];
    Long = BirdIsland[1];
    LatLongWeather(Lat,Long);
  }
  else if(campGround === "Blue Creek"){
  Lat = BlueCreek[0];
  Long = BlueCreek[1];
  LatLongWeather(Lat,Long);
}
else if(campGround === "Blue Ridge Wilderness"){
Lat = BlueRidge[0];
Long = BlueRidge[1];
LatLongWeather(Lat,Long);
}
else if(campGround === "Blue West"){
  Lat = Bluewest[0];
  Long = Bluewest[1];
  LatLongWeather(Lat,Long);
  }
  else if(campGround === "Bugbee Canyon"){
    Lat = Bugbee[0];
    Long = Bugbee[1];
    LatLongWeather(Lat,Long);
    }
    else if(campGround === "Bush Mountain Wilderness"){
      Lat = Bush[0];
      Long = Bush[1];
      LatLongWeather(Lat,Long);
      }
    else if(campGround === "Cedar Canyon"){
        Lat = Cedar[0];
        Long = Cedar[1];
        LatLongWeather(Lat,Long);
        }
        else if(campGround === "Chimney Hollow"){
          Lat = Chimney[0];
          Long = Chimney[1];
          LatLongWeather(Lat,Long);
          }
          else if(campGround === "Chisos Basin"){
            Lat = Chisos[0];
            Long = Chisos[1];
            LatLongWeather(Lat,Long);
            }
  window.localStorage.setItem('Camp', JSON.stringify(campGround))

  })




//   function loadStorage(){
//     //parses string of camp names into an array of camp names
//     var savedCampgrounds = JSON.parse(localStorage.getItem('Camp'))
//     if (savedCampgrounds===null) {
//       localStorage.setItem('Camp', JSON.stringify([])) //creates array of camp names if there were none in storage to retrieve
//       return
//     }
//     console.log("saved camp logged below")
//     console.log(savedCampgrounds);
//   //iterate through the array and append information to the screen that you want to persist based on the saved camp names
//   for (var i = 0; i < savedCampgrounds.length; i++) {
//   console.log('processing'+ savedCampgrounds[i])
//   }
// }

// loadStorage();

LatLongWeather()

//functions and variables to open and close the modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}