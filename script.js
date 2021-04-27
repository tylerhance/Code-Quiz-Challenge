// HTML elements gathered for DOM manipulation
var quizEl = document.getElementById("quiz");
var resultsEl = document.getElementById("results");
var finalScoreEl = document.getElementById("final-score");
var quizCompleteEl = document.getElementById("quizComplete");
var timer = document.getElementById("currentTime");
var startButtonEl = document.getElementById("start-button");
var welcomePageEl = document.getElementById("welcome-page");
var highScoreContainerEl = document.getElementById("hsContainer");
var highScoresEl = document.getElementById("highScores");
var highScoreBtn = document.getElementById("#hs-button");
var userHighScoreInput = document.getElementById("initials");
var highScoreDisplayName = document.getElementById("hs-initials");
var endQuizButton = document.getElementById("endQuizButton");
var submitScoreButton = document.getElementById("submitScore");
var displayHighScore = document.getElementById("userHighScore");
var questionsEl = document.getElementById("questions");
var buttonA = document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");
var buttonD = document.getElementById("D");
var checkAnswer = document.querySelectorAll(".checkAnswer");
//var replayQuiz = document.querySelectorAll(".replayQuiz");
var clearScore = document.querySelectorAll(".clearScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");

// Global variables
var currentQuestionIndex = 0;
var timeLeft = 30;
var timerInterval;
var score = 0;
var correct;
var penalty = 10;

// Quiz question object/array
var questions = [
    {
        question: "What is an array?", 
        choices: ["An ordered list of values.", "An action performed on objects.", "A behaviour declaration", "The properties of all HTML elements."], 
        answer: "An ordered list of values."  
    },
    {
        question: "JavaScript is primarily used in the browser, enabling developers to manipulate webpage content through the ____?", 
        choices: ["Terminal", "Code Editor", "DOM", "Browser"], 
        answer: "DOM"   
    },
    {
        question: "A string, number, bigint, boolean, undefined, symbol, and null are what kind of data types?", 
        choices: ["Reference", "Comparisons", "Assignment", "Primitive"], 
        answer: "Primitive"   
    },
    {
        question: "The named values in JavaScript objects, are called ______?", 
        choices: ["Methods", "Properties", "Actions", "Constructors"], 
        answer: "Properties"   
    },
]; 
//console.log(questions[3].question);
///console.log(questions[3].answer);

// Function for moving through the questions array and generate the questions and answers.
function generateQuizQuestion(){
    quizCompleteEl.style.display = "none";
    if (currentQuestionIndex === questions.length){
        return showScore();
    }
    console.log(questions[currentQuestionIndex])
    //quizCompleteEl.style.display = "none";
    questionsEl.innerHTML = "<p>" + questions[currentQuestionIndex].question + "</p>"
    buttonA.innerHTML = questions[currentQuestionIndex].choices[0];
    buttonB.innerHTML = questions[currentQuestionIndex].choices[2];
    buttonC.innerHTML = questions[currentQuestionIndex].choices[3];
    buttonD.innerHTML = questions[currentQuestionIndex].choices[1];
    };

// Function to start quiz and starts timer. Once clicked, the start button is hidden and the first question is displayed.
function startQuiz() {
    quizCompleteEl.style.display = "none";
    startButtonEl.style.display = "none";
    generateQuizQuestion();

    // Timer function
    timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
        }, 1000);
        quizEl.style.display = "block";
    }

    // Function for end of quiz displaying score and asking user to enter initials
    function showScore(){
        quizEl.style.display = "none";
        quizCompleteEl.style.display = "flex";
        clearInterval(timerInterval);
        userHighScoreInput.value = "";
        finalScoreEl.innerHTML = "That's it, you got " + score + " out of " + questions.length + " correct!";
    }

    // The submit button runs the function to save high scores and stringifies the high score arrays saved in local storage.
    submitScoreButton.addEventListener("click", function highscore(){

        if (userHighScoreInput.value === "") {
        alert("Initials can't be blank.");
        return false;
    } else {
        var savedHighScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
        var currentUser = userHighScoreInput.value.trim();
        var currentHighScore = {
            name : currentUser,
            score : score
        };
    // Saves the user input for initials and their high score into local storage, then projects the high scores.    
        quizCompleteEl.style.display = "none";
        highScoreContainerEl.style.display = "flex";
        endQuizButton.style.display = "flex";

        savedHighScores.push(currentHighScore);
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
        generateHighScores();
    }
});

// Function for clearing previous high scores and refreshes a new list
function generateHighScores(){
    highScoreDisplayName.innerHTML = "";
    displayHighScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
    for (i = 0; i < highscores.length; i++){
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
        displayHighScore.appendChild(newScore);
        highScoreDisplayName.appendChild(newName);
    }
}

// Function shows high score page while hiding other pages.
function showHighScore(){
    welcomePageEl.style.display = "none";
    quizCompleteEl.style.display = "none";
    highScoreContainerEl.style.display = "flex";
    highScoresEl.style.display = "block";
    endQuizButton.style.display = "flex";
}

// Function clears the local storage of high scores and user input from score board
function clearScore(){
    window.localStorage.clear();
    highScoreDisplayName.textContent = "";
    displayHighScore.textContent = "";
}

// Function for replaying quiz/ button will reset all variables
function replayQuiz() {
    hsContainer.style.display = "none";
    quizCompleteEl.style.display = "none";
    welcomePageEl.style.display = "flex";
    timeLeft = 75;
    score = 0;
    currentQuestionIndex = 0;
}

// Function for verifying answer
function verifyAnswer(answer){
    correct = questions[currentQuestionIndex].answer;
    if (answer === correct && currentQuestionIndex !== questions.length){
        score++;
        alert("Correct!");
        currentQuestionIndex++;
        console.log(currentQuestionIndex)
        generateQuizQuestion();
    } else if (answer !== correct && currentQuestionIndex !== questions.length){
        alert("Wrong!");
        currentQuestionIndex++
        generateQuizQuestion();
    } else {
        showScore();
    }
}

// Button to start quiz
startButtonEl.addEventListener("click", startQuiz)


checkAnswer.forEach(function (answer){
    answer.addEventListener("click", function(event){
        event.preventDefault();
        var answerText = event.target.textContent
        verifyAnswer(answerText);
    });
})


