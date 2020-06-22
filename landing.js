

    let landVal = 30039
    let addOne = '?'
    
    


    $('#search-box-landing').on('keydown', (event) => {
        if (event.which == 13) {
            landVal = $('#search-box-landing').val();
            getForecastLanding();

        } else {
            
        }
        

    });

    const getForecastLanding = () => {
        let addTwo = 'zip=' + landVal
        mainURL = "index.html" + addOne + addTwo
        window.location.href = mainURL
    
    
    };
    


