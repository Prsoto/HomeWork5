# 05 Third-Party APIs: Work Day Scheduler

Repo for HomeWork Activity 5

## Task of the HomeWork 

The assigment for this week is to create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

It is required to use the [Moment.js](https://momentjs.com/) library to work with date and time. 

## Mock-Up
The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](05-third-party-apis-homework-demo.gif)

Also there is a html and CCS file to work with as a start

## Guidance

  In order to generate the code I focused on the following premises
  
  1. First created the script.js and develop  the function to present the current time in header and add some style using momentjs.com also using setinterval function to      keep the information updated 
  2. Edit the HTML for the header to display the proper Date/Time information and add some style
  3. Link the JS file and other libraries from the html
  4. Edit the HTML to create the activity TaskBoxes as a calendar and the textareas for input, also include classes and buttom for the hours range of the day
  5. Define the variables in the JS file and arrays to be used for interactive cycles for storing in coming functions
  6. addign and link the classes to display the styling.
  7. Define classes to set colors on the textareas background to be used in a function based on the current time vs the time set for each textarea to apply specific      classes that would chamge the colors based on present / past / future background color
  8. Create a for to set the inputs of the textareas to be store in the local storage for persisant storage
  9. enable evenlisteners for SAVE buttons so it can trigger the storage of the inputs into local storage
  10. Create rutines and link it with variables to get Items into the local storage to display and maintain the activity    reflected in the textarea in the timeframe assigned
  11. As optional or extra created a Clear All button to erase what is in the localstorage and reload the page upon request with an alert 
 
  

### Links 

     **Repository Link**:   https://github.com/Prsoto/HomeWork5
     
     **Live Link**:         https://prsoto.github.io/HomeWork5/



