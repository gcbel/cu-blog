/* Light/Dark toggle */
const toggle = document.querySelector('.toggle');
const container = document.querySelector('.container');
const title = document.querySelector('.img')
let mode = "light"  // Light is default

toggle.addEventListener('click', function(event) {
    if (mode === "light") {
        mode = "dark";
        document.querySelector('img').src = "assets/images/mind-dark.png"
        document.querySelector('span').innerText = "☀️";
        console.log(document.querySelector('span'));
        container.setAttribute('class', 'dark');
    } else {
        mode = "light";
        document.querySelector('span').innerText = "🌒";
        document.querySelector('img').src = "assets/images/mind-light.png"
        container.setAttribute('class', 'light');
    }
})

/* Get correct vertical line height and full background */
const hl2 = document.getElementById('hl2');
const hl3 = document.getElementById('hl3');
const vl = document.querySelector('.vl');

function adjustVerticalLineHeight() {
    // Get height between horizontal lines to make length of vertical lines
    const hl2Height = hl2.getBoundingClientRect().bottom;
    const hl3Height = hl3.getBoundingClientRect().top;
    const height = hl3Height - hl2Height + 1;
    vl.style.height = height + 'px';
}

/* Adjust height on window load and resize */
window.onload = adjustVerticalLineHeight;
window.onresize = adjustVerticalLineHeight;