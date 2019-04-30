var countDownDate = new Date ("Oct 31, 2019 00:00:00").getTime();

var countDownFunction = setInterval (function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("count").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

if ( distance < 0 ) {
    clearInterval(countDownFunction);
    document.getElementById("count").innerHTML = "Enjoy Season 10";
}
}, 1000)