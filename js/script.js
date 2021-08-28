/*The code to make the hamburgermenu toggle when you press it. */ 

$("#menuButton").click(function() {
    $(".menu").slideToggle('slow');
});

/***************** UpButton script ********************/

//Knappen hämtas.
var myBtn = document.getElementById("upButton");

// När man skrollar ner 20 px från toppen av sidan, visas knappen.
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

// När man sen klickar på knappen, skickas man längst upp på sidan.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/***********The script for the weather applikation ****************/

function weatherApplication( cityId ) {
  let key = '470d187d05aa469bd63be36c5f51e2cb';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&appid=' + key)
  .then(function(resp) {return resp.json() })
  .then(function(data) {
    getWeather(data);

  }) 
  .catch(function() {

  });
}

window.onload = function() {
  weatherApplication( 2718991 );
}

function getWeather( d ) {
  let celcius = Math.round(parseFloat(d.main.temp)-273.15);

  document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('icon').innerHTML = GetIcon(d); 
  document.getElementById('temperature').innerHTML = celcius + '&deg;c';
  document.getElementById('location').innerHTML = d.name;
}

/* Gets the right icon and returns it.. */
function GetIcon(d) {
  let icon = d.weather[0].icon;

  return "<img src='http://openweathermap.org/img/wn/" + icon + ".png'/>"
}