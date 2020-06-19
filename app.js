$( () => {

$('#search-button').click(function() { 
       const locationVal = $('#search-box').val()
      
 })

const baseURL = `http://api.weatherapi.com/v1/current.json?key=`
const apiKey = `7c70246dd148451ab10161808201906`
let currCityCode = 30039
const extraCode = `&q=`
const queryURL = baseURL + apiKey + extraCode 
// console.log(queryURL)

const getForecast = () => {
      $.ajax({
        url: queryURL + currCityCode
      }).then((weathData) => {
            // console.log(weathData)
      $(".forecast-results").html(`
      <h2> ${weathData.location} </h2>
      <h3> ${weathData.current} </h3>
      `)
      }, (error) => {
        console.error(error)
      })
    }
      
    getForecast()




});



      


