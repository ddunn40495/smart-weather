
    //Variables to grab zip code from input box then insert as parameter in URL
    let landVal = 30039
    let addOne = '?'
    
    //Event Handler for Landing Page Input Box
    //Grabs Value from box then runs function to get us to results page
    $('#search-box-landing').on('keydown', (event) => {
        if (event.which == 13) {
            landVal = $('#search-box-landing').val();
            getForecastLanding();
        } else {
            
        }
        
    });
    //Takes value from input box and inserts into redirect page URL as parameter
    //Then it redirects us to that page and URL has our value as a parameter
    //The AJAX call function getForecast() in app.js takes that value out parameter and inserts that value in AJAX call
    const getForecastLanding = () => {
        let addTwo = 'zip=' + landVal
        mainURL = "results.html" + addOne + addTwo
        window.location.href = mainURL
    };
    


