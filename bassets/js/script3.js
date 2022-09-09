// VARIABLES //
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
var timer = document.querySelector("#timer");
i = 60;


function theTimer() {
  document.getElementById('timer').innerHTML = i;
  i--;
  if (i < 0) {
    alert("Time's up!");
  }
  else {
    setTimeout(onTimer, 1000);
  }
}

var showQuestion = function () {
  
}

var nextQuestion = function () {


}

