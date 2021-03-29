Goal
Create application that is able to add, store and display Chuck Norris facts using 
https://api.chucknorris.io/ API. 

Pages 

The app should have two pages:

1.	Landing page 
At the top of the page there should be search form which so you can search for Chuck Norris facts by specific keyword using https://api.chucknorris.io/jokes/search?query={query} endpoint.
Bellow that form should be the list of previous searches (max last 10). 
If the list (previous searches) is empty show random fact using https://api.chucknorris.io/jokes/random endpoint 
2.	Single fact page 
This page should display single fact details (icon & text). Since API response has ID of each fact, route should use that ID as router parameter e.g. “details/ S-oNfHo3wb5g“ 

Instructions

•	You are free to choose some framework, library or you can write everything in vanilla JS
•	As we didn’t provide you with designs, try to make UI as best as you can and be free to make it on your 
