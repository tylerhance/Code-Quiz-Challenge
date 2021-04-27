var highScore = document.querySelector("#highScore");
var clearScores = document.querySelector("#clear");
var returnHome = document.querySelector("#returnHome");

// Event listener to clear scores on user button click
clearScores.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retrieves data from local storage and creates new list item to display score and initials
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores); 

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to move user back to the home page
returnHome.addEventListener("click", function () {
    window.location.replace("./index.html");
});