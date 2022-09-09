var quizButtonEl = document.querySelector('#quiz-start');
var startButtonEl = document.querySelector('#start-button');
var welcomeQbox = document.querySelector('#welcome-qbox');
var qBox = document.querySelector('#qbox');
var timer = document.querySelector('#timer');
var questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "Which of the following is the current HTML standard?",
    answer: "HTML 5",
    options: [
      "HTML 4",
      "HTML 5",
      "HTML 3",
      "HTML 2"
    ]
  },
    {
    numb: 4,
    question: "The CSS property used to control the element’s font-size is...",
    answer: "font-size",
    options: [
      "text-size",
      "text-style",
      "font-size",
      "font-style"
    ]
  },
    {
    numb: 5,
    question: "The HTML attribute used to define the internal stylesheet is...",
    answer: "<style>",
    options: [
      "style",
      "<style>",
      "<link>",
      "<script>"
    ]
  },
    {
    numb: 6,
    question: "Which of the following CSS property is used to set the background image of an element?",
    answer: "background-image",
    options: [
      "background-image",
      "background-color",
      "background-attachment",
      "background-view"
    ]
  },
    {
    numb: 7,
    question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
    answer: "a {text-decoration : none;}",
    options: [
      "a {decoration : no-underline;}",
      "a {text-decoration : underline;}",
      "a {text-decoration : none;}",
      "a {text-decoration : underline-no;}"
    ]
  },
    {
    numb: 8,
    question: "Which of the following property is used as the shorthand property for the padding properties?",
    answer: "padding",
    options: [
      "padding-right",
      "padding-left",
      "padding",
      "padding-bottom"
    ]
  },
    {
    numb: 9,
    question: "How do you select an element with the class name 'example'?",
    answer: ".example",
    options: [
      ".example",
      "$example",
      "#example",
      "class=example"
    ]
  },
    {
    numb: 10,
    question: "The CSS property used to make the text bold is",
    answer: "font-weight : bold",
    options: [
      "weight: bold",
      "style: bold",
      "font: bold",
      "font-weight : bold"
    ]
  }
];
var question = questions.question;
var questionNum = questions.numb;
var questionChoices = questions.options;
var questionAnswer = questions.answer;

/* timer function */
function startCountdown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
        console.log(counter);
        counter--;
          
        if (counter < 0 ) {
          clearInterval(interval);
          console.log('Ding!');
        }
      }, 1000);
    }


/* start button */

var startButton = function(event) {
    welcomeQbox.remove();
    
    prefaceQuiz();
}

/* QUIZ PREFACE */
var prefaceQuiz = function(event) {

    var rulesDiv = document.createElement('div')
    rulesDiv.setAttribute('id', 'rules-div')
    qBox.appendChild(rulesDiv);

    var readyQuestion = document.createElement('h1');
    readyQuestion.textContent = "Rules";
    rulesDiv.appendChild(readyQuestion);

    var readyRules = document.createElement('ul');
    rulesDiv.appendChild(readyRules);

    var readyRulesList = document.createElement('p');
    readyRulesList.textContent = "The quiz is 10 questions long. You will have 1 minute to complete this quiz. Each time you answer a question incorrectly, 5 seconds will be deducted from the timer. Click the button whenever you are ready!"
    rulesDiv.appendChild(readyRulesList);

    var readyDiv = document.createElement('div')
    readyDiv.setAttribute('id', 'ready-div');
    rulesDiv.appendChild(readyDiv);

    var quizReady = document.createElement('button')
    quizReady.setAttribute('id', 'start-button')
    quizReady.setAttribute('onclick', 'startQuiz()')
    quizReady.textContent = "Ready";
    readyDiv.appendChild(quizReady);

}

/* Start quiz */

var startQuiz = function(event) {

    var rulesDiv = document.getElementById('rules-div');
    rulesDiv.remove();
    
    startCountdown(60);

    var theQuestionBox = document.createElement('div');
    theQuestionBox.setAttribute('id', 'question-box');
    qBox.appendChild(theQuestionBox);

    var theQuestion = document.createElement('h1');
    theQuestion.setAttribute('class', 'the-question');
    theQuestion.innerHTML = 'What does HTML stand for?';
    theQuestionBox.appendChild(theQuestion);

    var optionsBox = document.createElement('div')
    optionsBox.setAttribute('class', 'options-box');
    theQuestionBox.appendChild(optionsBox);

    var option1 = document.createElement('button')
    option1.setAttribute('class', 'false')
    option1.innerHTML = 'Hyper Text Preprocessor'
    optionsBox.appendChild(option1);
    var option2 = document.createElement('button')
    option2.setAttribute('class', 'true')
    option2.innerHTML = 'Hyper Text Markup Language'
    optionsBox.appendChild(option2);
    var option3 = document.createElement('button')
    option3.setAttribute('class', 'false')
    option3.innerHTML = 'Hyper Text Multiple Language'
    optionsBox.appendChild(option3);
    var option4 = document.createElement('button')
    option4.setAttribute('class', 'false')
    option4.innerHTML = 'Hyper Tool Multi Language'
    optionsBox.appendChild(option4);
}


/* EVENT LISTENERS */






