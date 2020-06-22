// API variables
const baseURL = `http://api.weatherapi.com/v1/forecast.json?key=`
const apiKey = `7c70246dd148451ab10161808201906`

const extraCode = `&q=`
const queryURL = baseURL + apiKey + extraCode 
const extraDaysCode = `&days=`
const fiveForecastCode = 5

let params = new URLSearchParams(location.search);
let locZip = params.get('zip');

let currCityCode = locZip






$( () => {







 // Search Button Event Handler
 $('#search-button').on('click', (event) => {
      event.preventDefault()
      currCityCode = $('#search-box').val()
      getForecast()
      })

  $('#search-box').on('keydown', (event) => {
          if (event.which == 13) {
          event.preventDefault()
          currCityCode = $('#search-box').val()
          getForecast()
          } else {
            
          }
      
        })









// API Call Function Current and 3 Day Forecast
const getForecast = () => {
  console.log(currCityCode)
      $.ajax({
        url: queryURL + currCityCode + extraDaysCode + fiveForecastCode
      }).then((weathData) => {
      $('#forecast-results-main').html(`
      <h2 class="city-font animated slideInLeft"> ${weathData.location.name} </h2>
      <h3 class="animated slideInLeft"> ${weathData.location.region}   ${weathData.location.country} </h3>
      <h3 class="temp-font animated slideInLeft"> ${weathData.current.temp_f} F</h3>
      `)
      $('#forecast-results').html(`
      <h3 class="animated slideInLeft"> ${weathData.current.condition.text} </h3>
      <h3 class="animated slideInLeft"> Humidity:  ${weathData.current.humidity}% </h3>
      <h3 class="animated slideInLeft"> Feels like:  ${weathData.current.feelslike_f} </h3>
      <h3 class="animated slideInLeft"> Wind: ${weathData.current.wind_mph} MPH </h3>
      <h3 class="animated slideInLeft"> Chance of Rain Today/Tonight: ${weathData.forecast.forecastday[0].day.daily_chance_of_rain}% </h3>
      `) 
      $('#three-day-forecast-one').html(`
      <h2 class="animated slideInLeft"> ${weathData.forecast.forecastday[1].date} </h2>
      <h3 class="animated slideInLeft"> ${weathData.forecast.forecastday[1].day.condition.text} </h3>
      <h3 class="animated slideInLeft"> ${weathData.forecast.forecastday[1].day.avgtemp_f} F </h3>
      <h3 class="animated slideInLeft"> Chance of Rain: ${weathData.forecast.forecastday[1].day.daily_chance_of_rain}%</h3>
      `)
      $('#three-day-forecast-two').html(`
      <h2 class="animated slideInLeft"> ${weathData.forecast.forecastday[2].date} </h2>
      <h3 class="animated slideInLeft"> ${weathData.forecast.forecastday[2].day.condition.text} </h3>
      <h3 class="animated slideInLeft"> ${weathData.forecast.forecastday[2].day.avgtemp_f} F </h3>
      <h3 class="animated slideInLeft"> Chance of Rain: ${weathData.forecast.forecastday[2].day.daily_chance_of_rain}% </h3>
      `)
      $('#three-day-forecast-three').html(`
      <h2 class="animated slideInLeft"> ${weathData.forecast.forecastday[3].date} </h2>
      <h3 class="animated slideInLeft"> ${weathData.forecast.forecastday[3].day.condition.text} </h3>
      <h3 class="animated slideInLeft"> ${weathData.forecast.forecastday[3].day.avgtemp_f} F </h3>
      <h3 class="animated slideInLeft"> Chance of Rain: ${weathData.forecast.forecastday[3].day.daily_chance_of_rain}% </h3>
      `)
      $('#headline').html(`
      <h1 class="animated slideInLeft">Currently</h1> <h2 class="animated slideInLeft"> ${weathData.location.localtime} </h2>
      `)
      
      }, (error) => {
        console.error(error)
      })
    }

    if (params.has('zip') ) {
      getForecast()
    } 




});



      


