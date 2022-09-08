var playerNameFormEl = document.querySelector('#name-form');
var submitButtonEl = document.querySelector('#name-submit');
var userNameInput = document.querySelector("input[name='player-name']").value;
var startButtonEl = document.querySelector('#start-button');
var info = [];
/* LOG NAME AND HIGH SCORE */
var logName = function() {

    localStorage.setItem("player", JSON.stringify(userNameInput));

}

/* WHO'S PLAYING? */

var userFormHandler = function(event) {

    if (userNameInput != null) {
        logName();
    }

    playerNameFormEl.reset();

    window.location.href="./index2.html"
 
}

var startQuiz = function(event) {

    window.location.href="./index3.html"
}


// /* NAME LOG */
// var logName = function(event) {

//     localStorage.setItem('name', userNameInput);
// }


/* EVENT LISTENERS */

submitButtonEl.addEventListener('click', userFormHandler);






