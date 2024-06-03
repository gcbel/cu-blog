/* Global variables */
const submit = document.querySelector('.submit');
const nameRequired = document.querySelector("#name-required");
const titleRequired = document.querySelector("#title-required");
const postRequired = document.querySelector("#post-required");
const hl2 = document.querySelector('#hl2');
const hl3 = document.querySelector('#hl3');
const vl = document.querySelector('.vl');

/* Submitting the form */
submit.addEventListener('click', function(event) {
    event.preventDefault();

    // Fetch local data and revert to an array
    let stringOfEntries = localStorage.getItem("entries");
    let entries = [];

    // Check if entriesString is not null or empty
    if (stringOfEntries) {
        try {
            entries = JSON.parse(stringOfEntries);
        } catch (e) {
            console.log("Your first blog entry!");
        }
    }

    // Get user input
    let name = document.getElementById("name");
    const postTitle = document.getElementById("post-title");
    const postContent = document.getElementById("post-content");

    // Check to ensure all input areas have content
    let formCompleted = checkCompleted(name.value, postTitle.value, postContent.value);
    if (!formCompleted) {
        return;
    }

    // If form is completed, add user input and log to local storage
    const entry = {
        username: name.value,
        title: postTitle.value,
        content: postContent.value,
    };

    // Add to entries and clear values
    entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(entries));
    name.value = "";
    postTitle.value = "";
    postContent.value = "";

    // Navigate to blog
    window.location.href = "blog.html";
})

/* Check to ensure all input areas have content */
function checkCompleted (name, postTitle, postContent) {
    let formCompleted = true;
    if (name.length === 0) {
        nameRequired.style.display = 'inline';
        formCompleted = false;
    } else {
        nameRequired.style.display = 'none';
    }
    
    if (postTitle.length === 0) {
        titleRequired.style.display = 'inline';
        formCompleted = false;
    } else {
        titleRequired.style.display = 'none';
    }
    
    if (postContent.length === 0) {
        postRequired.style.display = 'inline';
        formCompleted = false;
    } else {
        postRequired.style.display = 'none';
    }
    return formCompleted;
}

/* Get correct vertical line height and full background */
function adjustVerticalLineHeight() {
    // Get height between horizontal lines to make length of vertical lines
    const hl2Height = hl2.getBoundingClientRect().bottom;
    const hl3Height = hl3.getBoundingClientRect().top;
    const height = hl3Height - hl2Height + 1;
    vl.style.height = height + 'px';
}

/* Adjust vertical line height on window load and resize */
window.onload = adjustVerticalLineHeight;
window.onresize = adjustVerticalLineHeight;