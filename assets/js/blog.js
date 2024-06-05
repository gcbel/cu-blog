/* VARIABLES */
const articles = document.querySelector('main');
const back = document.querySelector(".back");

/* FUNCTION */
/* Populate page with user entries */
function loadEntries () {
    const entries = JSON.parse(localStorage.getItem("entries"))

    /* Create a post for each user entry */
    for (const index in entries) {
        let entry = entries[index]
        let article = document.createElement("article");
        article.innerHTML = `<h2>${entry.title}</h2> <p>${entry.content}</p> <h3>Posted by:  ${entry.username}</h3>`
        articles.appendChild(article);
    }
}

/* EVENT LISTENERS */
/* Navigate to main page */
back.addEventListener ("click", function(event) {
    window.location.href = "index.html";
});

window.onload = loadEntries;