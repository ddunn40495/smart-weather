// create HTML CSS JS File
// create HTML structure
// create basic CSS style
// Create JS elements
$(()=> {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tsa-wait-times.p.rapidapi.com/airports/test?APIKEY=test",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tsa-wait-times.p.rapidapi.com",
            "x-rapidapi-key": "5a2ec78370msh595bb78bc5f9287p1c3ec1jsn60e709003213"
        }
    }


   
    $('#main-button').click(function() { 
        const airportVal = $('#search-box').val()
       
    })
    const getTimes = () => {
        $.ajax({
          url: settings.url,
          headers: settings.headers
        }).then((data) => {
          $('#waittime_headine').html(`
          <h3> ${getTimes.city} </h3>
          <h3> ${getTimes.code} </h3>
          <h3> ${getTimes.state} </h3>
          `)
        
          
        })
      }
      
      getTimes()




})