
//Initializing variables by their IDs

let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');
let strtBtn = document.getElementById('start');
let stpBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let count = 0;

let second = 00; // varible for seconds
let min = 00; // varible for minutes

//Event Handlings

// Start button event handling

strtBtn.addEventListener('click', function () {
    timer = true;
    startwatch();
});

// Stop button event hndling

stpBtn.addEventListener('click', function () {
    // if timer is false will stop  the clock;
    timer = false;
});

// Reset button event hndling
resetBtn.addEventListener('click', function () {
    // if timer is false it will start reseting the values
    timer = false;
    // setting the value to 00
    second = 00;
    min = 00;
    // displaying the values
    seconds.innerHTML = '0' + second;
    minutes.innerHTML = '0' + min;

});

//made this code
//startwatch function 

function startwatch() {
    // If timer is true then time will start
    if (timer) {

        // Incrementing the value by 1;
        second++;
        // if second reaches to 60 increment the min value by 1 and second to 0;
        if (second == 60) {
            min++;
            second = 0;
        }
        let minString = min;
        let secondString = second;

        // If min and second value is less than 10 still display the value in double digits;
        if (min < 10) {
            minString = '0' + minString;
        }
        if (second < 10) {
            secondString = '0' + secondString;
        }
        seconds.innerHTML = secondString;
        minutes.innerHTML = minString;
        // Using setTimout function to increment the value of second after 1000 miliseconds
        setTimeout(startwatch, 1000);
    }

}