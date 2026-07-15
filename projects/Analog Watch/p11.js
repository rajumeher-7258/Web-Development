let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
let secHand = document.querySelector('.second-hand');
let digitalTime = document.getElementById('digital-time');
let digitalDate = document.getElementById('digital-date');
let calendarInput = document.getElementById('calendar');

function clock(){
    let time = new Date();
    
    // Analog Clock
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let hrsDeg = (((hrs*60)/12)*6)+90;   
    hourHand.style.transform = `rotate(${hrsDeg}deg)`;
    
    let minsDeg=(mins*6)+90;
    minHand.style.transform = `rotate(${minsDeg}deg)`;

    let sec = time.getSeconds();
    let secDeg = (sec*6)+90;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    
    // Digital Time and Date
    if (digitalTime) {
        digitalTime.textContent = time.toLocaleTimeString();
    }
    if (digitalDate) {
        digitalDate.textContent = time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    
    // Calendar initial value
    if (calendarInput && !calendarInput.value) {
        let isoDate = new Date(time.getTime() - (time.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
        calendarInput.value = isoDate;
    }
}
setInterval(clock,1000);
clock();
