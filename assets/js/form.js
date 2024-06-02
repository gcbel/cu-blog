
/* Submitting the form */
const submit = document.querySelector('.submit');
submit.addEventListener('click', function(event) {
    event.preventDefault();

    // Fetch local data and revert to an array
    let stringOfEntries = localStorage.getItem("entries");
    console.log(stringOfEntries)
    let entries = [];

    // Check if entriesString is not null or empty
    if (stringOfEntries) {
        try {
            entries = JSON.parse(entriesString);
        } catch (e) {
            console.log("Your first blog entry!");
        }
    }

    // Get user input
    const name = document.getElementById("name").value;
    const postTitle = document.getElementById("post-title").value;
    const postContent = document.getElementById("post-content").value;

    // Check to ensure all input areas have content
    let formCompleted = checkCompleted(name, postTitle, postContent);
    if (!formCompleted) {
        return;
    }

    // If form is completed, add user input and log to local storage
    const entry = {
        username: name,
        title: postTitle,
        content: postContent,
    };

    console.log(entry);
    entries.push(entry);
    console.log(entries);
    console.log(JSON.stringify(entries));
    localStorage.setItem("entries", JSON.stringify(entries));
    console.log(localStorage.getItem("entries"));
})

/* Check to ensure all input areas have content */
function checkCompleted (name, postTitle, postContent) {
    let formCompleted = true;
    if (name.length === 0) {
        document.getElementById("name-required").style.display = 'inline';
        formCompleted = false;
    } else {
        document.getElementById("name-required").style.display = 'none';
    }
    
    if (postTitle.length === 0) {
        document.getElementById("title-required").style.display = 'inline';
        formCompleted = false;
    } else {
        document.getElementById("title-required").style.display = 'none';
    }
    
    if (postContent.length === 0) {
        document.getElementById("post-required").style.display = 'inline';
        formCompleted = false;
    } else {
        document.getElementById("post-required").style.display = 'none';
    }
    return formCompleted;
}