// Variables definitons *//
// this variable is used to convert time format into a value 
var hourNow = parseInt (moment().format("H"));
// Variables use to assign class to the text area in calendar for the text area activity Block
var classes = [".8AM", ".9AM", ".10AM", ".11AM", ".12PM", ".1PM", ".2PM", ".3PM", ".4PM", ".5PM", ".6PM", ".7PM"];
var time = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
var classIndex = time.indexOf(hourNow);



// Definition of the function to present the current time in header and add some style
function currentTime(){
    var today = moment();
    $("#currentDay").text(today.format('[Today is] MMMM Do YYYY, h:mm a'));
    $("#currentDay").css("font-size","2rem");
    $("#currentDay").css("color","darkblue");
};

// Using Set interval to refresh the time eve
setInterval(currentTime,1000);



// Routine run when page is load to validate based on the currentTime
if (hourNow <8) {
    allFuture();
} else if (hourNow >18) {
    allPast();
} else {
    formatTimes()
}

console.log(hourNow)
// Functions to format Colors of TextArea of calendars

function allFuture() {
    for (i = 0; i < classes.length; i++) {
        $(classes[i]).addClass("future");
    }
    $(classes[0]).addClass("present");
}

function allPast() {
    for (i = 0; i < classes.length - 1; i++) {
        $(classes[i]).addClass("past");
    }
    $(classes[time.length -1]).addClass("present");
}

function formatTimes() {
    $(classes[classIndex]).addClass("present");
    for (i = 0; i < classIndex; i++) {
        $(classes[i]).addClass("past");
    }
    for (i = classIndex + 1; i < classes.length; i++) {
        $(classes[i]).addClass("future");
    }
}


//Section for getting items from local storage to show upon refresh once is persistent in the local storage
document.getElementById("taskText1").innerHTML = localStorage.getItem("save1");
document.getElementById("taskText2").innerHTML = localStorage.getItem("save2");
document.getElementById("taskText3").innerHTML = localStorage.getItem("save3");
document.getElementById("taskText4").innerHTML = localStorage.getItem("save4");
document.getElementById("taskText5").innerHTML = localStorage.getItem("save5");
document.getElementById("taskText6").innerHTML = localStorage.getItem("save6");
document.getElementById("taskText7").innerHTML = localStorage.getItem("save7");
document.getElementById("taskText8").innerHTML = localStorage.getItem("save8");
document.getElementById("taskText9").innerHTML = localStorage.getItem("save9");
document.getElementById("taskText10").innerHTML = localStorage.getItem("save10");
document.getElementById("taskText11").innerHTML = localStorage.getItem("save11");

// This var will be used to collect actions for button pressing when storing  data
var saveAll = document.getElementsByTagName("button")

// This  -for -  is used to storage the activities coming from the textarea in the calendar display in the html 
for (let i = 0; i < saveAll.length; i++) {
    saveAll[i].addEventListener("click",function(){
        var blockValue = document.querySelectorAll(".row textarea ");
        console.log(blockValue)
        localStorage.setItem(this.id,blockValue[i].value);
      
    })
}

// Optional - Created a bottom to clear the persistent  data and reload the page

$(".clear").on("click", function(){ 
    cleardata()
})

//  Function to cleardata with an alert

function cleardata() {
    var confirmDelete = confirm("Are you sure you want to delete all data from local Storage & reload page?");
    if (confirmDelete == true) {
        localStorage.clear();
        location.reload();
    }
    
}
