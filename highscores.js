var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores on user button click
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retrieves data from local storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores); 

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to move user back to index.html page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});