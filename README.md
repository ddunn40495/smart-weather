# ddunn40495.github.io

## About This Program

I made a website that takes in information from weatherapi.com. It takes a zip code or city name, and inserts that value into the url of the AJAX call. The AJAX call returns a string of data, and I entered that data into the HTML using JQuery. The website can take any zipcode from USA, Canada, or United Kingdom and return weather results for that day and the next 3 days. 

## Technologies Used
For this website I used 
HTML
CSS 
Bootstrap 
Material Design Bootstrap
JavaScript
J Query 
AJAX
Popper.JS
Weather API
Chrome Developer Tools

## Method

I came up with a wire frame design, however I realized that the API was giving me so much information and that I just needed to find a way to get it on the page.
The first thing I did was set up some HTML. I wanted to originally go with a two column layout, but when I realize I could get more information things changed. 
Once I got two divs set up, I wanted to set up my AJAX Call in my JavaScript file.
 I added a input box and button. 
My main goal at this point was to get the AJAX call working first, so I set up the ajax call with the constant value (same atlanta zip code).  I set a query URL variable  for base URL and API key and then variable for our value (zip code)  were going to get from the user. In the AJAX call I combine the Query URL with the value (zip code) we get from user and that inserted as a parameter in the AJAX call.
Then after I got that working I worked on setting up an event handler for my search button. When the user clicks the button it will grab value from input box and pass it as parameter in AJAX call.
After that I felt to got the core JS functions I need for the site to run so I worked on CSS.  I started looking at my page thinking I could put more information on the page. My Weather API has different options, at first I just wanted to get the current forecast, but if I became a premium user I could get the next 4 days forecast as well and so I did that. I used Flexbox to organize the divs on the results page. 
After I did that I had to go back to my AJAX call and insert more information from the JSON response into my new divs. So instead of the getting the current forecast from JSON, im getting the next 3 days and inserting them into my new divs. 

I went back to CSS and started doing more. I realized with bootstrap I could do a little more, and it also works with flex-box. I used Bootstrap and MDB bootstrap. With bootstrap I used these things called card. It’s a solid colored background for your divs. I think it helped my page a lot. Added Fonts. 

Then I had an epiphany. My page can look really good after I enter a value and the results pop up, but before that its just a bunch of empty divs. It looks sad. I realized that there is no reason to be on that page with no results, if I have a pretty landing page where they can enter their zip code, then it can redirect to the results page and automatically make the AJAX call with that value. It was a great idea. It was a lot more to it than I thought. 

So I created a landing page, I wanted to get a background image. But I really like landing pages with the background video. I thought since its related to weather, I could find a nice video with raindrops. I ended up finding a bad ass stock video. It is on street level in Seoul and theyre are raindrops falling close up. 
Had to look up CSS properties to get it to cover the whole screen. The predefined bootstrap class didn’t do it for me. I then put a header and input box on top. I had to set up an event hander for the input box. Wasn’t able to get it to work but I would come back to it. The results page needed some work. I put a background image in. I rearranged the layout. I removed the div card for that div. I wanted the location and temperature results to be on top of the background image, the background had clouds. I added class to the results when they are inserted into the DOM. Those classes made all the results slide in. They also made the Temperature and Location Font Sizes bigger than the other results. 


## Issues Overcome

It was hard to get the video to cover the full page. I don’t know how it got done. I just opened developer tools and started throwing things at the wall and see what would stick, then commit immediately after. 
Used Developer Tools a lot to get my Divs set up
Took awhile to learn bootstrap and flex, But I got it done. Results page its super responsive. But it isn’t terrible.  
The biggest issue I had was linking up the landing page and the results page. Getting to the results page wasn’t an issue but grabbing the value and taking it to the next page and then running the AJAX call kept me up all night. However with Deja and James help I was able to get it going. The first problem I had is the I was trying to use the same JS file for 2 different HTML files. So I created another JS file for the landing page. So in that JS file we make a function that takes the zip code from the input box and inserts it that value as a parameter in the url(results page). it then redirects us to that page and our parameter is in that URL. In the input box event handler we grabbed the value from the box, stored it in a variable, and that variable gets added on to the URL when the function is called. This function just grabs the value out of the event handler and redirects us to the next page. Our value is stored in the URL. When we get to the results page, we have another function in that JS file to run the AJAX call function. When the page loads and it sees there is  a zip code parameter in the URL, it will immediately run the AJAX and pass that parameter value (zip code) into the AJAX call.  


## Unsolved Problems

The API has icons that go along with the forecast but I wasn’t able to use the data properly.
Landing Page isn’t responsive. Looks best Full Screen Only.
On github pages it is just going to the results page not the landing page.
Isnt responsive on phone or tablet
Links to API and my github repo
Wanted to make function to change background image if it was day or night

## Sources

Background Video Credit: “Stock footage provided by Videvo, downloaded from www.videvo.net”
Background Image Credit: https://unsplash.com/photos/d4feocYfzAM Photographer: Damiano Baschiera Twitter: @damiano_baschiera
Got pieces of code from: Glenn Brown, James Godfrey-Kittle, Deja Baker, Fatima, CSS Properties, Stack OverFlow

https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage
// similar behavior as clicking on a link
window.location.href = "http://stackoverflow.com";


https://css-tricks.com/fun-viewport-units/
https://css-tricks.com/full-page-background-video-styles/
video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

https://api.jquery.com/keydown/
$( "#target" ).keydown(function() {
  alert( "Handler for .keydown() called." );
});
