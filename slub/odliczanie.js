const date = new Date(2025,8,27,14,30,0);
const countdownDate = date.getTime();
//document.getElementById("date").innerHTML = date.toLocaleTimeString() + " | " + date.toLocaleDateString();

let x = setInterval(function() {

    let now = new Date().getTime();

    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    document.getElementById("time").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Ślub";
    }

}, 1000);

