/* Global variables */
const submit = document.querySelector('.submit');
const nameRequired = document.getElementById("name-required");
const titleRequired = document.getElementById("title-required");
const postRequired = document.getElementById("post-required")

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