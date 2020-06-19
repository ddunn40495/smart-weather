// create HTML CSS JS File
// create HTML structure
// create basic CSS style
// Create JS elements
$(()=> {
    // const settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://tsa-wait-times.p.rapidapi.com/airports/test?APIKEY=test",
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "tsa-wait-times.p.rapidapi.com",
    //         "x-rapidapi-key": "5a2ec78370msh595bb78bc5f9287p1c3ec1jsn60e709003213"
    //     }
    // }

    const baseURL = `https://www.tsawaittimes.com/`
    const apiKey = `uxXWAUUO0PGFyeyYn7btpURfmhQnr8Mf`
    const queryType = `t=`
    let titleQuery = 'eraserhead'
    let queryURL = baseURL + apiKey + '&' + queryType + titleQuery





   
    $('#main-button').click(function() { 
        const airportVal = $('#search-box').val()
       console.log(airportVal)
       getTimes(airportVal)
    })
    const getTimes = () => {
        $.ajax({
          url: settings.url,
          headers: settings.headers
        }).then((data) => {
          console.log(data)
          $('#waittime_headine').html(`
          <h3> ${getTimes.city} </h3>
          <h3> ${getTimes.code} </h3>
          <h3> ${getTimes.state} </h3>
          `)
        
          
        })
      }
      
      




})