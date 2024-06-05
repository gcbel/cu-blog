/* VARIABLES */
const toggle = document.querySelector('.toggle');
const container = document.querySelector('.container');
const title = document.querySelector('.img');

/* FUNCTIONS */
/* Set theme upon switching from main and blog pages according to last mode */
function setTheme () {
    if (mode === "light") {
        if (document.querySelector('img')) {
            document.querySelector('img').src = "assets/images/mind-light.png";
        }
        document.documentElement.style.backgroundColor = 'var(--primary-light)'
        // document.documentElement.style.setProperty('--primary-dark', 'var(--primary-light)');
        document.querySelector('#toggle-icon').innerText = "🌒";
        container.setAttribute('class', 'light');
    } else {
        if (document.querySelector('img')) {
            document.querySelector('img').src = "assets/images/mind-dark.png";
        }
        document.documentElement.style.backgroundColor = 'var(--primary-dark)'
        //document.documentElement.style.setProperty('--primary-light', 'var(--primary-dark)');
        document.querySelector('#toggle-icon').innerText = "☀️";
        container.setAttribute('class', 'dark');
    }
}

/* Change theme from light to dark or vice versa */
function changeTheme (event) {
    if (mode === "light") {
        mode = "dark";
        localStorage.setItem("mode", mode);
    } else {
        mode = "light";
        localStorage.setItem("mode", mode);
    }
    setTheme();
}

/* INITIALIZE THEME */
/* Get user default light/dark mode and move to local storage*/
let mode = localStorage.getItem("mode");
if (mode !== null) {
    setTheme();
} else if (window.matchMedia && window.matchMedia("prefers-color-scheme: dark").matches) {
    mode = "dark";
    localStorage.setItem("mode", mode);
} else {
    mode = "light";
    localStorage.setItem("mode", mode);
}

/* EVENT LISTENER */
/* Theme toggle event listener */
toggle.addEventListener('click', changeTheme); 