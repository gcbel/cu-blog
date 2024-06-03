/* Light/Dark toggle */
const toggle = document.querySelector('.toggle');
const container = document.querySelector('.container');
const title = document.querySelector('.img')
let mode = "dark"  // Dark is default

toggle.addEventListener('click', function(event) {
    if (mode === "light") {
        mode = "dark";
        if (document.querySelector('img')) {
            document.querySelector('img').src = "assets/images/mind-dark.png"
        }
        document.querySelector('span').innerText = "☀️";
        console.log(document.querySelector('span'));
        container.setAttribute('class', 'dark');
    } else {
        mode = "light";
        if (document.querySelector('img')) {
        document.querySelector('img').src = "assets/images/mind-light.png"
        }
        document.querySelector('span').innerText = "🌒";
        container.setAttribute('class', 'light');
    }
})