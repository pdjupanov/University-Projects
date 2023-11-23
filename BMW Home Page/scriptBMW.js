

var header = document.getElementById("header");
var m3 = document.getElementById("3series");
var m4 = document.getElementById("4series");
var m5 = document.getElementById("5series");
var m8 = document.getElementById("8series");
var speed = document.getElementById("speed");
var topSpeed = document.getElementById("topSpeed");
var hp = document.getElementById("hp");

m3.onclick = function() {
    header.style.backgroundImage = "url(images/m3.jpg)"
    speed.innerHTML = "3.5 s";
    topSpeed.innerHTML = "293 kmh";
    hp.innerHTML = "473 hp";
}
m4.onclick = function() {
    header.style.backgroundImage = "url(images/m4.jpg)"
    speed.innerHTML = "3.8 s";
    topSpeed.innerHTML = "290 kmh";
    hp.innerHTML = "473 hp";
}
m5.onclick = function() {
    header.style.backgroundImage = "url(images/m5.webp)"
    speed.innerHTML = "3.1 s";
    topSpeed.innerHTML = "305 kmh";
    hp.innerHTML = "617 hp";
}
m8.onclick = function() {
    header.style.backgroundImage = "url(images/m8.jpg)"
    speed.innerHTML = "3.0 s";
    topSpeed.innerHTML = "310 kmh";
    hp.innerHTML = "600 hp";
}