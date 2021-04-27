// Declared variables and HTML elements for DOM manipulation
var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var container = document.querySelector("#container");
var secondsLeft = 60;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

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
        title: "What is an array?", 
        choices: ["An ordered list of values.", "An action performed on objects.", "A behaviour declaration", "The properties of all HTML elements."], 
        answer: "An ordered list of values."  
    },
    {
        title: "JavaScript is primarily used in the browser, enabling developers to manipulate webpage content through the ____?", 
        choices: ["Terminal", "Code Editor", "DOM", "Browser"], 
        answer: "DOM"   
    },
    {
        title: "A string, number, bigint, boolean, undefined, symbol, and null are what kind of data types?", 
        choices: ["Reference", "Comparisons", "Assignment", "Primitive"], 
        answer: "Primitive"   
    },
    {
        title: "The named values in JavaScript objects, are called ______?", 
        choices: ["Methods", "Properties", "Actions", "Constructors"], 
        answer: "Properties"   
    },
]; 
//console.log(questions[3].question);
///console.log(questions[3].answer);

// Function for triggering timer countdown on button click
timer.addEventListener("click", function () {
    if (holdInterval === 0) {
      holdInterval = setInterval(function () {
        secondsLeft--;
        currentTime.textContent = "Time: " + secondsLeft;
  
        if (secondsLeft <= 0) {
          clearInterval(holdInterval);
          quizEnd();
          currentTime.textContent = "Time's up!";
        }
      }, 1000);
    }
    render(questionIndex);
  });

// Function to generate the questions from the questions object/array
function render(questionIndex) {
    // Clears existing data
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // Loops through all questions in array
    for (var i = 0; i < questions.length; i++) {
      // Appends question title only
      var userQuestion = questions[questionIndex].title;
      var userChoices = questions[questionIndex].choices;
      questionsDiv.textContent = userQuestion;
    }
    // New 'forEach' implemented for question choices
    userChoices.forEach(function (newItem) {
      var listItem = document.createElement("li");
      listItem.textContent = newItem;
      questionsDiv.appendChild(ulCreate);
      ulCreate.appendChild(listItem);
      listItem.addEventListener("click", compare);
    });
  }

// Function to compare choices with answer/ alerts user if correct/incorrect
function compare(event) {
    var element = event.target;
  
    if (element.matches("li")) {
      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");
      // If correct condition
      if (element.textContent == questions[questionIndex].answer) {
        score++;
        alert("Correct!");
      } else {
        // Deducts -10 seconds off secondsLeft for incorrect answers
        secondsLeft = secondsLeft - penalty;
        alert("Wrong!");
      }
    }

// Question Index determines number question user is on
questionIndex++;

if (questionIndex >= questions.length) {
  // quizEnd will append last page with user stats
  quizEnd();
  createDiv.textContent = "Quiz Complete!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
} else {
  render(questionIndex);
}
questionsDiv.appendChild(createDiv);
}

// Function to append last page / Entails DOM manipulation to create and append data and user input requests
function quizEnd() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";
  
    // Creates new heading when quiz is complete
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent =
      "Great Job! Enter your initials below to save your score!";
  
    questionsDiv.appendChild(createH1);
  
    // Creates a new paragraph in quiz container when quiz is complete
    var createPar = document.createElement("p");
    createPar.setAttribute("id", "createPar");
  
    questionsDiv.appendChild(createPar);
  
    // Calculates time remaining and replaces it with the user score
    if (secondsLeft >= 0) {
      var timeRemaining = secondsLeft;
      var createPar2 = document.createElement("p");
      clearInterval(holdInterval);
      createPar.textContent = "Your final score is: " + timeRemaining;
  
      questionsDiv.appendChild(createPar2);
    }
  
    // Creates a label for 'enter your initials' to guide user toward actual input field
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";
  
    questionsDiv.appendChild(createLabel);
  
    // Created for user input and appending it accordingly
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";
  
    questionsDiv.appendChild(createInput);
  
    // Variable for creating a user submit button once all requested data is entered
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";
  
    questionsDiv.appendChild(createSubmit);
  
    // Event listener to capture initials and local storage for user initials and score
    createSubmit.addEventListener("click", function () {
      var initials = createInput.value;
  
      if (initials === null) {
        console.log("No value entered!");
      } else {
        var finalScore = {
          initials: initials,
          score: timeRemaining,
        };
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
          allScores = [];
        } else {
          allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        // Takes user to high score page
        window.location.replace("./highscores.html");
      }
    });
  }
