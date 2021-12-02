// API key. Replace with your API key
const APIKEY = '02652ee1b5bce58eeb2ab7ffefc77085';
// City
const city = 'Cheney';
// Units for Farenheit
const units = 'imperial';
const humid = 'kilograms';
const tomtemp = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}&humid=${humid}&tomtemp=${tomtemp}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // check-check
  console.log( data );
  // console.log( data.name );
  // console.log( data.main.temp );
  
  // Get elements
  const city = document.querySelector('#city');
  const temp = document.querySelector('#temp'); 
  const humid = document.querySelector('#humid');
  const tomtemp = document.querySelector('#tomtemp');
  const icon = document.querySelector('img');  
  const iconId = data.weather[0].icon;
  
  // Set elements
  city.textContent = data.name;
  temp.textContent = data.main.temp;
  humid.textContent = data;
  tomtemp.textContent = data.main.temp;
  icon.src = `assets/unnamed.gif`;

});
