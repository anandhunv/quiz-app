const question=[
    {
        question:"What is the result of 2 + 2 in JavaScript?",
      
        answers: [
            {text: "3" ,correct:false},
            {text: "4" ,correct:true},
            {text: "5" ,correct:false},
            {text: "6" ,correct:false},
        ],
    },
    {
        question:"Which keyword is used to declare a constant variable in JavaScript?",
      
        answers: [
            {text: "var" ,correct:false},
            {text: "let" ,correct:false},
            {text: "const" ,correct:true},
            {text: "def" ,correct:false},
        ],

      },
      {
        question: "What does 'typeof' operator return for a function?",
        answers: [
            {text: "function" ,correct:true},
            {text: "object" ,correct:false},
            {text: "undefined" ,correct:false},
            {text: "array" ,correct:false},
        ],
      },
      {
        question: "Which array method adds one or more elements to the end of an array and returns the new length of the array?",
        answers: [
            {text: ".push()" ,correct:true},
            {text: ".contact()" ,correct:false},
            {text: ".slice()" ,correct:false},
            {text: ".pop" ,correct:false},
        ],
      
      },
    
]


const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nxtbtn=document.getElementById("nxtbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score =0 ;   // when we start quiz the score and question is 0
 nxtbtn.innerHTML="Next";
 showQuestion();
}


function showQuestion(){
    resetState();

let currentQuestion = question[currentQuestionIndex];
let questionNo =currentQuestionIndex + 1;
questionElement.innerHTML =questionNo + ". "+ currentQuestion.question;

currentQuestion.answers.forEach(answer =>{

    const button =document.createElement("button");
    button.innerHTML = answer.text;  
    button.classList.add('btn','btn-outline-dark');
    answerButtons.appendChild(button);

    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
});

}

function  resetState(){
 nxtbtn.style.display ="none"
 while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);

 }
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;  
    });
    nxtbtn.style.display="block";
}
function showScore(){
resetState();
questionElement.innerHTML =`You Scored ${score} out of${question.length}!`;
nxtbtn.innerHTML="play again";
nxtbtn.style.display="block";
}

function handlenxtbtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showQuestion();
    }
    else{
        showScore();
    }

}
nxtbtn.addEventListener("click",()=>{
    if(currentQuestionIndex<question.length){
        handlenxtbtn();
    }else{
        startQuiz();
    }
})

startQuiz();