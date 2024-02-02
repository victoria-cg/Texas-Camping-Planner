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