// Variables
var startButton = document.querySelector("#start-button");
var startTimer = 60;
var timer = document.querySelector("#timer");
var questionCount = 0;
var answerCorrect;
var score = 0;
var highScores;
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#start-button");
var questionArray = document.querySelector("questionArray");
var wrapper = document.querySelector("wrapper");
var answer;


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
console.log(questions[3].question);
console.log(questions[3].answer);


// Global variables
var score = 0;
var questionIndex = 0;
var TimeRemain = 60;
var timerInterval;
var answerCorrect;
var penalty = 10;

/*// Variables set to hold high scores locally
let highScoreArray = [];
// Show the high score if it exists/hasn't been cleared out by user.
(localStorage.getItem("highScoreArray")) ? highScoreArray = JSON.parse(localStorage.getItem("highScoreArray")): highScoreArray = [];
*/

// Function goes through array of objects to populate quiz questions
function startQuiz() {
    isWin = false;
    timerCount = 60;
    startTimer()
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
    
  // Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);

// Calls init() so that it fires when page opened
//init();