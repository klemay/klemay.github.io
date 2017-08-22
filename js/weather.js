/ Using plugin from http://simpleweatherjs.com

/*Check if browser suppots geolocation */

if ("geolocation" in navigator) {
 loadLocal();
} 
else {
  $('.js-geolocation').hide();
}
/* load local weather*/
function loadLocal() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
}


function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
            city = weather.city;
            region = weather.region;
            country = weather.country;
            temp = weather.temp;
            units = weather.units.temp;
            celsius = weather.alt.temp;
            altUnits = weather.alt.unit;
            description = weather.currently;
iconCode = '<img class="weather-img" src="http://www.katelynlemay.com/images/weather/icon-'+weather.code+'.svg">';
 
      if(weather.temp > 99) {
        $('body').addClass('red');
      } else if (weather.temp > 79) {
         $('body').addClass('orange');
      } else if (weather.temp > 49) {
        $('body').addClass('green');
      } else {    
        $('body').addClass(blue); 
    
      };
            $("#localTemp").append('<p id="degF">' + temp + '&deg;' + ' ' + units + '</p>');
$("#celsiusTemp").append('<p id="degC">' + celsius + '&deg;' + ' ' + altUnits + '</p>');
      $('#switch').click(function() {
        $('.tempDisplay').toggle();
      });
      
      $("#icon").append(iconCode);
      
            
      $('#weatherDescription').append(description);
  
    $("#currentCity").append(city + ', ' + region);     
$('#loading').hide();    
$('#switch').show();
    },  

    error: function(error) {
      $("#error").html('<p>'+error+'</p>');
    }
  });
}
