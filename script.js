// Variables
var startButton = document.querySelector(".start-button");
var timer;
var timerCountEl = document.querySelector(".timer-count");
var questions;
var userInput;
var answerCorrect;
var score;
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");

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

