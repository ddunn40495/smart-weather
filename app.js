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

    const baseURL = `https://www.tsawaittimes.com/api/airports/`
    const apiKey = `uxXWAUUO0PGFyeyYn7btpURfmhQnr8Mf/`
    // const queryType = `t=`
    const format = JSON
    // let airCode = 'ATL'
    let airportsListURL = baseURL + apiKey + format 

  console.log(airportsListURL)



   
    $('#main-button').click(function() { 
        const airportVal = $('#search-box').val()
       console.log(airportVal)
       getTimes(airportVal)
    })
    const getTimes = () => {
        $.ajax({
          url: airportsListURL
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