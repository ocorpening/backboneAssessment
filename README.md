#Overview:

Create a single page JavaScript application to browse the weather for three major US cities (Austin, LA, & DC).
See the services folder for stub JSON data to use for the weather.

##Business Requirements:
- The user can see an overview of all three cities (Austin, LA, DC) with their current temperature.
- The user can click on a city to see a detail screen with information about that city (humidity, dew point, etc).
- The user can bookmark any city’s details in their browser.
- The user can access the site using modern versions IE, Firefox or Chrome.

##Technical Requirements:
- Should be implemented as a "single-page" JavaScript application.
- Should be covered with automated tests.
- Should consume the supplied JSON files as if they were service calls (using XHR).
- Should build the app in an extensible manner for future features

##Things we value (non-functional requirements):
- Simplicity
- Maintainability
- Clarity

##My Implementation:
It uses the index.html in the app directory, app/index.html.

To run the solution:
- after forking or otherwise aqcuiring the repo:
- npm install - there are a few dependencies, Npm, Yeoman, Bower, Grunt, Backbone, jQuery, Underscore, Jasmin, Sinon
- grunt build
- grunt serve

This will pop up a browser window to http://localhost:9000/.

There will be three tables displayed for the three cities. Clicking on one brings up the detail
for that city. Click the individual city table brings you back to the summary.

To run the Jasmine unit tests bring up the file test/SpecRunner.html in a browser.

