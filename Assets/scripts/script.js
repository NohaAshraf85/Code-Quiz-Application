// define the variables to grab from the html
var startButton = document.getElementById("startQuizBtn");
var timerEl = document.getElementById("timer");
var questionEl = document.querySelector(".questions");
var answersEl = document.querySelector(".answers");
var rulesEl = document.getElementById("rulesArea");
var questionsandAnswersRowEl = document.getElementById("questionsandAnswersRow");
var correctEl = document.querySelector(".correct");
var wrongEl = document.querySelector(".wrong");
var scoreEl = document.querySelector("#scoreMessage");
var correctAnswer = document.querySelector("#correcrAnswer");
var wrongAnswer = document.querySelector("#wrongAnswer");
var outcome = document.querySelector("#outcome");
var score = document.querySelector("#scoreBoard");
var submitBtn = document.querySelector("#submitScoreBtn");
var feedbackColor = document.querySelector(".result");
var scoreResult = document.querySelector("#scoreResult");
var playerName = document.querySelector("#name");
var emailEl = document.querySelector("#email");
var playerNameInputEl = document.querySelector("#nameInput");
var emailInputEl = document.querySelector("#emailInput");
var highScores=[];
var scorePage = document.querySelector(".highScoreDisplay");
var clearScoreBtn = document.querySelector("#clearScoreBtn");
var goBack = document.querySelector("#GoBack");


// Quiz variables
var timer = 100;
var correct = 0;
var wrong = 0;
var i = 0;
var timerInterval;


// questions, multiple choice answers and correct answer object array
var questionsChoices = [
  {
  question:"What does HTML stand for?",
  answerArray: ["Hyper Text Markup Language", "Website bones", "Hyper Tool Markup Language", "All the above"],
  correctAnswer: 0
  },

  {
    question:"What does CSS stand for?",
    answerArray: ["Custom Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "All the above"],
    correctAnswer: 1
    },

  {
    question:"Which tag represents the largest text in HTML",
    answerArray: ["&lt;h6&gt;", "&lt;h4&gt", "&lt;h2&gt", "&lt;h1&gt"],
    correctAnswer: 3
    },

  {
    question:"Which element does the document method queryselector() retuen within the document that matches the specified selector, or group of selectors?",
    answerArray: ["Last element", "First element", "Last element assigned to the var", "undefined"],
    correctAnswer: 1
    },
  
  {
    question:"What does typeof operator return",
    answerArray: ["String", "Number", "the type of the unevaluated operand", "Boolean"],
    correctAnswer: 2
    },
  
  {
    question:"What does the .class selector do?",
    answerArray: ["selects elements assigned to .class", "Selects elements with a specific class attribute", "defines a string into a specific class", "All the above"],
    correctAnswer: 1
    },

  {
    question:"How do you select an element with a specific id?",
    answerArray: [".", "$", "&lt;&gt;", "#"],
    correctAnswer: 3
    },

  {
    question:"What is an API",
    answerArray: ["Application Programming Indicator", "Application Performance Indicator", "Application Programming Interface", "All the above"],
    correctAnswer: 2
    },
  
  {
    question:"What is the DOM",
    answerArray: ["Document Object Model", "Document Objec Momory", "Drive Object Model", "All the above"],
    correctAnswer: 0
    },

  {
    question:"What does javascript help developers do?",
    answerArray: ["Create dymanic web applications", "Design the User Interface of a website", "Read complex data", "All the above"],
    correctAnswer: 0
    }
  ];

// functions
// start Quiz, includes the starting timer, timeinterval and to start displaying questions
function startQuiz(){
  timer = 100;
  setTime();
  init();
  displayQuestionAndAnswer();
  startButton.disabled=true; 
}

// set time function, create a time function that takes a setinterval, when the times is equal to 0, clear the timer and then show the score, 
function setTime() {
     timerInterval = setInterval(function() {
      timer--;
      if(timer === 0 ) {
        clearInterval(timerInterval);
        displayScoreEndGame();
      }
        timerEl.innerHTML="Seconds left: " + timer;
    }, 1000);
  }

  // display the questions in order and then displaying all the answer options related, 
  // answers are in the form of buttons when the correct answer is clicked (identified in the array object), another question is displayed
  function displayQuestionAndAnswer(){
    rulesEl.setAttribute("style", "display: none");
    questionsandAnswersRowEl.setAttribute("style", "display: block");
    questionEl.innerHTML = questionsChoices[i].question;
    answersEl.innerHTML="";
    for (var j=0; j < questionsChoices[i].answerArray.length; j++){
      answersEl.innerHTML +="<button class='answerbtn' id='"+ j +"' onclick='questionAnswered(this);'>"+ questionsChoices[i].answerArray[j]+"</button>";
    }
  }
  
  function displayResult(button){
  scoreEl.setAttribute("style", "display: block");
    if (button.id == questionsChoices[i].correctAnswer)
    {
      scoreEl.innerHTML = "Correct &#x2713";
      correct++;
      feedbackColor.setAttribute("style", "background-color:#32CD32");
    }
    else{
      scoreEl.innerHTML = "Wrong &#10006";
      wrong++;
      feedbackColor.setAttribute("style", "background-color:red; color:white");
    }
    
  }


function questionAnswered(button)
{
  console.log(button.id);
    displayResult(button);
  if (button.id != questionsChoices[i].correctAnswer)
  {
    timer -=5;
  } 
  
  i++;

  if(i===10)
  {
    
    displayScoreEndGame();

  }
  else
  {

    displayQuestionAndAnswer();
  }

}

function displayScoreEndGame(){
{
  questionsandAnswersRowEl.setAttribute("style", "display: none");
  questionsandAnswersRowEl.setAttribute("style", "display: none");
  score.setAttribute("style", "display: block");
  scoreResult.innerHTML = "All Done your final score is:" + correct + "/" + i;
  clearInterval(timerInterval);
  //renderMessage();
} 
}

// event listeners
startButton.addEventListener("click", startQuiz);

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var playerInformation = {
    playerNameInputEl: nameInput.value,
    emailInputEl: emailInputEl.value,
    scoreResult:  correct 
  };
  highScores.push(playerInformation);
  highScores= highScores.sort(
    function(p1,p2){
      return p2.scoreResult-p1.scoreResult;
    }
  );
  localStorage.setItem("playersInformation", JSON.stringify(highScores));
  renderMessage();

});

function renderMessage() {
  score.setAttribute("style", "display: none");

  var storedHighscores = JSON.parse(localStorage.getItem("playersInformation"));
  if (storedHighscores !== null) {
    document.querySelector("#highscoreul").innerHTML="";
    for(var k=0;k<5 && k<storedHighscores.length;k++)
    {
      document.querySelector("#highscoreul").innerHTML +="<li>"+storedHighscores[k]. playerNameInputEl +" Scored: "+storedHighscores[k].scoreResult+"</li>";
    }
    score.setAttribute("style", "display: none");
    document.querySelector("#highscore").setAttribute("style", "display: block");
    
  }
  startButton.disabled=false; 
}

function init() {
  i=0;
  correct=0;
  wrong=0;
  scoreEl.setAttribute("style", "display: none");
  document.querySelector("#highscore").setAttribute("style", "display: none");
  var storedHighscores = JSON.parse(localStorage.getItem("playersInformation"));

  if (storedHighscores !== null) {
    highScores = storedHighscores;
  }

}

clearScoreBtn.addEventListener("click", clearScore);

function clearScore(){
    highScores=[];
    localStorage.setItem("playersInformation", JSON.stringify(highScores));
    renderMessage();
}

goBack.addEventListener("click", startQuiz);
