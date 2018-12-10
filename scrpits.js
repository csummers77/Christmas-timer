// console.log('check')

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