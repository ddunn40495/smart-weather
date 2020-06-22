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

     $('#search-box-landing').on('keydown', (event) => {
       if (event.which == 13) {
         event.preventDefault()
        // currCityCode = $('#search-box-landing').val()
        // window.location.href = "/home/ddunn40495/ddunn40495.github.io/index.html"
       } else {
         
       }
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
      $('#forecast-results').html(`
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
      <h2> ${weathData.forecast.forecastday[0].date} </h2>
      <h3> ${weathData.forecast.forecastday[0].day.condition.text} </h3>
      <h3> ${weathData.forecast.forecastday[0].day.avgtemp_f} F </h3>
      <h3> Chance of Rain: ${weathData.forecast.forecastday[0].day.daily_chance_of_rain}%</h3>
      `)
      $('#three-day-forecast-two').html(`
      <h2> ${weathData.forecast.forecastday[1].date} </h2>
      <h3> ${weathData.forecast.forecastday[1].day.condition.text} </h3>
      <h3> ${weathData.forecast.forecastday[1].day.avgtemp_f} F </h3>
      <h3> Chance of Rain: ${weathData.forecast.forecastday[1].day.daily_chance_of_rain}% </h3>
      `)
      $('#three-day-forecast-three').html(`
      <h2> ${weathData.forecast.forecastday[2].date} </h2>
      <h3> ${weathData.forecast.forecastday[2].day.condition.text} </h3>
      <h3> ${weathData.forecast.forecastday[2].day.avgtemp_f} F </h3>
      <h3> Chance of Rain: ${weathData.forecast.forecastday[2].day.daily_chance_of_rain}% </h3>
      `)
    
      }, (error) => {
        console.error(error)
      })
    }

    // const getForecastLanding = () => {
    //   window.location.href = "/home/ddunn40495/ddunn40495.github.io/index.html"
    //   getForecast()
    // }




});



      


