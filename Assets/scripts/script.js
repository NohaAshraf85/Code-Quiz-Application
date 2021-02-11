// getting items from the html using queryselector and adding them into a variable
var startBtn = document.querySelector(".startButton");
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector(".questions");
var answersEl = document.querySelector(".answer");

var resultEl = document.querySelector(".resul");
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");
var currentQuestion=0;
console.log(startBtn);

// Other variables in the solution
var timer;
var timerCount;
var correctAnswersCounter = 0;
var wrongAnswersCounter = 0;


// Arrays for the Questions
var questionsArray = [
   {
        question:"What does HTML stand for?",
        answerArr: ["Hyper Active Person","Hyper Text Markup Language","Hyper Text Markup Lullabi","Hyperventilation"],
        correctAnswer:1
    }
    , 
    {
        question:"What does CSS stand for?",
        answerArr: ["Coco Melon","Caligraphy some some","Cascading Style Sheet","Something"],
        correctAnswer:2
    },
    {
        question:"What is the extension of a javascript file?",
        answerArr: ["Hyper Active Person","Hyper Text Markup Language","Hyper Text Markup Lullabi","Hyperventilation"],
        correctAnswer:1
    },
    {
        question:"What is a string?",
        answerArr: ["Hyper Active Person","Hyper Text Markup Language","Hyper Text Markup Lullabi","Hyperventilation"],
        correctAnswer:1
    },
    {
        question:"What is a boolean?",
        answerArr: ["Hyper Active Person","Hyper Text Markup Language","Hyper Text Markup Lullabi","Hyperventilation"],
        correctAnswer:1
    },
    {
        question:"What is concatination?",
        answerArr: ["Hyper Active Person","Hyper Text Markup Language","Hyper Text Markup Lullabi","Hyperventilation"],
        correctAnswer:1
    },
    {
        question:"What is an array?",
        answerArr: ["Hyper Active Person","Hyper Text Markup Language","Hyper Text Markup Lullabi","Hyperventilation"],
        correctAnswer:1
    }];
    

function startQuiz(){
    
    timerCount = 150;
    timerEl.innerHTML="Time remaining: "+timerCount;
 
    displayQuestion();
    
    
};

startBtn.addEventListener("click", startQuiz);



function questionAnswered(event){
    if(questionsArray[currentQuestion].correctAnswer==event.srcElement.id)
    {
        correctAnswersCounter++;
        correct.innerHTML=correctAnswersCounter;
        wrong.innerHTML=wrongAnswersCounter;
        currentQuestion++;
        displayQuestion();
        
    }
    else
    {
        wrongAnswersCounter++;
        correct.innerHTML=correctAnswersCounter;
    wrong.innerHTML=wrongAnswersCounter;
    }
    

}
function displayQuestion(){
    questionsEl.innerHTML=questionsArray[currentQuestion].question;
    answersEl.innerHTML="";
    for(var j=0;j<questionsArray[currentQuestion].answerArr.length;j++)
    {
        answersEl.innerHTML+= " <div class='col-12 '> <button class='answerbtn' id='" + j + "'>"+questionsArray[currentQuestion].answerArr[j]+"</button>         </div>";
  
    }
    
    var answerBtnEl= document.querySelectorAll(".answerbtn");
    for (let i = 0; i < answerBtnEl.length; i++) {
        answerBtnEl[i].addEventListener("click", questionAnswered);
    }
}

function startTimer(){

}