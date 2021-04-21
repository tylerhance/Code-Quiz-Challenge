// Variables
var startButton = document.getElementById("#start-button");
var startTimer = 75;
var timer = document.getElementById("#timer");
var questionCount = 0;
var answerCorrect;
var score = 0;
var highScores;
var timerEl = document.getElementById("#timer");
var startButton = document.getElementById("#start-button");
var questionIndex = document.getElementById("#questionIndex");
var wrapper = document.getElementById("wrapper");
var answer;
var startQuiz;
var highScoreArray = document.getElementById("highScoreArray")

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

// create eventlistener for all the questions with the target for all the buttons
// Global variables
var score = 0;
var questionIndex = 0;
var TimeRemain = 75;
var timerInterval;
var answerCorrect;
var penalty = 10;

function startTimer() {
    displayQuestions();
    let timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "";
      timer.textContent = "Time: " + secondsLeft;
      if (secondsLeft <= 0 || questionCount === questions.length) {
        clearInterval(timerInterval);
        captureUserScore();
      } 
    }, 1000);
  }



  startButton.addEventListener("click", startQuiz);