// Variables
var startButton = document.querySelector("#start-button");
var startTimer = 60;
var timer = document.querySelector("#timer");
var questions;
var questionCount = 0;
var userInput;
var answerCorrect;
var score = 0;
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var highScores;
var answers = document.querySelector("")

const questions = [
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

var score = 0;
var questionArray = 0;

var timer = document.querySelector("#timer");
var startButton = document.querySelector("#start-button");
var questionArray = document.querySelector("questionArray");
var wrapper = document.querySelector("wrapper");


// Variables set to hold high scores locally
let highScoreArray = [];
// Show the high score if it exists/hasn't been cleared out by user.
(localStorage.getItem("highScoreArray")) ? highScoreArray = JSON.parse(localStorage.getItem("highScoreArray")): highScoreArray = [];

function init() {
    startButton.addEventListener('click', event => {
        event.preventDefault()
        displayQuestionPage()
      
  })
    answers.addEventListener