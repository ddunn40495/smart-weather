$( () => {

 // Search Button Event Handler
 $('#search-button').on('click', (event) => {
      event.preventDefault()
      currCityCode = $('#search-box').val()
      getForecast()
      })

// API variables
const baseURL = `http://api.weatherapi.com/v1/forecast.json?key=`
const apiKey = `7c70246dd148451ab10161808201906`
let currCityCode = 30039
const extraCode = `&q=`
const queryURL = baseURL + apiKey + extraCode 
const extraDaysCode = `&days=`
const fiveForecastCode = 3


// API Call Function Current and 3 Day Forecast
const getForecast = () => {
      $.ajax({
        url: queryURL + currCityCode + extraDaysCode + fiveForecastCode
      }).then((weathData) => {
      $('.forecast-results').html(`
      <h2> ${weathData.location.name} </h2>
      <h3> ${weathData.location.region}   ${weathData.location.country} </h3>
      <h3> ${weathData.current.temp_f} F</h3>
      <h3> ${weathData.current.condition.text} </h3>
      <h3> Precipitation ${weathData.current.precip_in} inches </h3>
      <h3> Humidity:  ${weathData.current.humidity} </h3>
      <h3> Feels like:  ${weathData.current.feelslike_f} </h3>
      <h3> Wind: ${weathData.current.wind_mph} </h3>
      `) 
      $('#three-day-forecast-one').html(`
      <h3> ${weathData.forecast.forecastday[0].day.avgtemp_f} </h3>
      `)
      }, (error) => {
        console.error(error)
      })
    }





});



      


