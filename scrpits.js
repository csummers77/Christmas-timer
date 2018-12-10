// console.log('check')
title = "Countdown timer";
position = 0;
function scrolltitle() {
    document.title = title.substring(position, title.length) + title.substring(0, position); 
    position++;
    if (position > title.length) position = 0;
    titleScroll = window.setTimeout(scrolltitle,200);
}
scrolltitle();

function updateTimer(){
    var now = new Date();
    var nowAsTimestamp = now.getTime();
    var timeRemaining = endDate.getTime() - now.getTime();
    var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
	var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    // console.log(nowAsTimestamp);

    document.getElementsByClassName('weeks')[0].innerHTML = weeks;
	document.getElementsByClassName('days')[0].innerHTML = days;
	document.getElementsByClassName('hours')[0].innerHTML = hours;
	document.getElementsByClassName('minutes')[0].innerHTML = minutes;
	document.getElementsByClassName('seconds')[0].innerHTML = seconds;
}
var endDate = new Date("December 25, 2018");
console.log(endDate);
var timeStamp = endDate.getTime();
console.log(timeStamp)
// setInterval will call the function in arg1
// every arg2 milliseconds
setInterval(updateTimer, 1000);

var bodyObj = document.children[0].children[1]
function doomsday(){
    bodyObj.style.background = "url('https://cdn3.img.sputniknews.com/images/104926/47/1049264764.jpg') no-repeat center"
}

document.getElementById('button').addEventListener("click",doomsday);
if ("geolocation" in navigator) {
    /* geolocation is available */
} else {
    /* Geolocation is not available */
}

navigator.geolocation.getCurrentPosition(function(positon)  {
    do_something(positon.coords.latitude, positon.coords.longitude);
}); 

var watchID = navigator.geolocation.watchPosition(function(positon){
    do_something(positon.coords.latitude, positon.coords.longitude);
});

navigator.geolocation.clearWatch(watchID);

function geo_success(positon) {
    do_something(positon.coords.latitude, positon.coords.longitude);
}
function geo_error() {
    alert("sorry, no positon available ");
}
var geo_options = {
    enableHighAccuracy: true,
    maxiumAge: 30000,
    timeout: 27000
};
var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);

function errorCallback(error) {
    alert('ERROR(' + error.code + '):' + error.message);
};

function geoFindMe() {
    var output = document.getElementById("out");
    if (!navigator.geolocation){
        output.innerHTML = "<p>Geoloction is not supported by your browser</p>";
        return;
    }
    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
    
        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
        var img = new Image();
        // img.src = encodeURI("https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false");

        output.appendChild(img);
    }
    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }
    output.innerHTML = "<p> Locating.....</p>";
    navigator.geolocation.getCurrentPosition(success, error);
} 