var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var returnHome = document.querySelector("#returnHome");

// Event listener to clear all high scores 
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

// Retrieves data from local storage and parses the data
var totalHighScores = localStorage.getItem("totalHighScores");
totalHighScores = JSON.parse(totalHighScores);

if (totalHighScores !== null) {
    for (var i = 0; i < totalHighScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = totalHighScores[i].initials + " " + totalHighScores[i].score;
        highScore.appendChild(createLi);
    }
}

// Even listener created to take user back to the index page when clicked
returnHome.addEventListener("click", function(){
    window.location.replace("./index.html");
})
