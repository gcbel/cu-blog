/* Global variables */
const articles = document.querySelector('main');
const back = document.querySelector(".back");

/* Populate page with user entries */
function loadEntries () {
    const entries = JSON.parse(localStorage.getItem("entries"))

    /* Create a post for each user entry */
    for (const index in entries) {
        let entry = entries[index]
        let article = document.createElement("article");
        article.innerHTML = `<h2>${entry.content}</h2> <p>${entry.title}</p> <h3>Posted by:  ${entry.username}</h3>`
        articles.appendChild(article);
    }
}

/* Navigate to main page */
back.addEventListener ("click", function(event) {
    window.location.href = "index.html";
});

window.onload = loadEntries;