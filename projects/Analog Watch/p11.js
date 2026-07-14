let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
let secHand = document.querySelector('.second-hand');

let digitalTime = document.getElementById("digital-time");
let date = document.getElementById("date");

function clock() {
    let time = new Date();

    let hrs = time.getHours();
    let mins = time.getMinutes();

    hrs = (((hrs * 60) / 12) * 6) + 90;
    hourHand.style.transform = `rotate(${hrs}deg)`;

    mins = (mins * 6) + 90;
    minHand.style.transform = `rotate(${mins}deg)`;

    let sec = time.getSeconds();
    sec = (sec * 6) + 90;
    secHand.style.transform = `rotate(${sec}deg)`;

    // Digital Time
    digitalTime.textContent = time.toLocaleTimeString();

    // Date
    date.textContent = time.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

setInterval(clock, 1000);
clock();
