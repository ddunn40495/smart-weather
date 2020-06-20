$( () => {

 // Search Button Event Handler
 $('#search-button').on('click', (event) => {
      event.preventDefault()
      currCityCode = $('#search-box').val()
      getForecast()
      })

// API variables
const baseURL = `http://api.weatherapi.com/v1/current.json?key=`
const apiKey = `7c70246dd148451ab10161808201906`
let currCityCode = 30039
const extraCode = `&q=`
const queryURL = baseURL + apiKey + extraCode 



// API Call Function
const getForecast = () => {
      $.ajax({
        url: queryURL + currCityCode
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
      const $img = $('<img>').attr('src', weathData.current.condition.icon).attr('alt', weathData.current.condition.text)
      $('.forecast-results').append($img)
      }, (error) => {
        console.error(error)
      })
    }
      
});



      


