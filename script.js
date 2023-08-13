let clock = document.querySelector(".clock");
let arrImages = [
  "./images/0.gif",
  "./images/1.gif",
  "./images/2.gif",
  "./images/3.gif",
  "./images/4.gif",
  "./images/5.gif",
  "./images/6.gif",
  "./images/7.gif",
  "./images/8.gif",
  "./images/9.gif",
];

const firstNumberHours = document.getElementById("firstNumberHours");
const secondNumberHours = document.getElementById("secondNumberHours");
const firstNumberMinutes = document.getElementById("firstNumberMinutes");
const secondNumberMinutes = document.getElementById("secondNumberMinutes");
const firstNumberSeconds = document.getElementById("firstNumberSeconds");
const secondNumberSeconds = document.getElementById("secondNumberSeconds");

function currentTime() {
  let date = new Date();
  let hours =
    date.getHours() < 10
      ? ("0" + date.getHours()).split("")
      : date.getHours().toString().split("");
  let min =
    date.getMinutes() < 10
      ? ("0" + date.getMinutes()).split("")
      : date.getMinutes().toString().split("");
  let sec =
    date.getSeconds() < 10
      ? ("0" + date.getSeconds()).split("")
      : date.getSeconds().toString().split("");

  firstNumberHours.src = arrImages[+hours[0]]; //
  secondNumberHours.src = arrImages[+hours[1]]; //
  firstNumberMinutes.src = arrImages[+min[0]]; //
  secondNumberMinutes.src = arrImages[+min[1]]; //
  firstNumberSeconds.src = arrImages[+sec[0]]; //
  secondNumberSeconds.src = arrImages[+sec[1]]; //
}

setInterval(currentTime, 1000);
