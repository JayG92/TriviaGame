// questions/choices/answers array

const quizQuestions = [{
    question: 'Are you programmer?',
    choices: ["a. Maybe.", "b. Heck Yeah!", "c. I think so...", "d. all of the above"],
    correctAnswers: "b. Heck Yeah!"
},

{
    question: 'Who are you?',
    choices: ["a. a man has no name", "b. a girl has no name", "c. i have no name", "d. this answer has no name"],
    correctAnswers: "b. a girl has no name"
},

{
    question: 'Who has the best burger?',
    choices: ["a. In and Out", "b. 5 guys", "c. Culvers", "d. Freddys"],
    correctAnswers: "a. In and Out"
},

{
    question: 'Chick-fila or Canes?',
    choices: ['a. Chick-fila', 'b. Canes', 'c. Both'],
    correctAnswers: 'c. Both'
},
{
    question: 'How long is New Zealands Ninety Mile Beach?',
    choices: ["a. 50 miles", "b. 90 miles", "c. Ninety miles", "d. 55 miles"],
    correctAnswers: "d. 55 miles"
}];

console.log(quizQuestions);

// global variables
let counter = 15;
let currentQuestions = 0;
let Correct = 0;
let Wrong = 0;
let timer;

// this code moves to next Q
function nextQ() {
    // this code alerts us when questions array has reached its end
    const questionsDone = quizQuestions.length - 1 === currentQuestions;

    // if questions reach the end, ALERT   
    if (questionsDone) {
        alert("Game Over");
    }
    else {
        // otherwise continue
        currentQuestions++;
        startQuestions();
    }
}


// resets timer once it hits 0
function resetTimer() {
    clearInterval(timer);
    // if timer runs out add point to loss
    Wrong++
    // if timer runs out, move to next Q?
    nextQ();

}


// this functions start the timer countdown
function countDown() {
    counter--;
    $('#time').html('Timer: ' + counter);
    if (counter === 0) {
        resetTimer();
        alert("times up")
    }
}


// this function loads the questions on page
function startQuestions() {
    // starts timer when this function runs
    counter =15;
    timer = setInterval(countDown, 1000);


    const question = quizQuestions[currentQuestions].question;

    const choices = quizQuestions[currentQuestions].choices;


    // this allows T/Q/C/A show up on page
    $('#time').html('Timer: ' + counter);
    $('#game').html(`
            <h4>${question}<h4>
            ${showChoices(choices)}
        `);

}
// this for loop shows all of the choices on page.
function showChoices(choices) {
    let result = "";

    for (let i = 0; i < choices.length; i++) {
        // data value holds all choices/answers
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;
}
// this code allows user to select choices on screen
$(document).on('click', '.choice', function () {
    clearInterval(timer);

    const userPick = $(this).attr('data-answer');
    console.log('test', userPick);
    let correctAnswers = quizQuestions[currentQuestions].correctAnswers;
    // if user gets right choice, all these codes run.
    if (correctAnswers === userPick) {
        Correct++;
        console.log("correct")
        nextQ()
        $("#Correct").html("Correct: " + Correct);
        alert("Correct!!!")
        // if not, run this.
    } else {
        Wrong++
        console.log("wrong")
        nextQ()
        $("#Wrong").html("Wrong: " + Wrong)
        alert("wrong, correct answer is: " + correctAnswers)
    }
});;



startQuestions();














