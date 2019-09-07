// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.


// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

var triviaQuestions = [{
    question: "who was the butler on the 'fresh prince of bel air'?",
    answerList: ['Carlton', 'Geoffrey', 'Bertram'],
    answer: 1
}, {
    question: "On the 'Saved by the Bell' episode in which Jessie freaked out on drugs, what was she taking?",
    answerList: ['ecstasy', 'sleeping pills', 'caffeine'],
    answer: 1
}, {
    question: "On which kids' show did the character Pierre Escargot appear?",
    answerList: ['All That', 'The Mickey Mouse Club', 'The Ren & Stimp Show'],
    answer: 1
}];

$('#start').on('click', function() {
    for (let i = 0; i < triviaQuestions.length; i++) {
        var questions = $('<h6>');
        questions.text(triviaQuestions[i].question);
        $('#questions').append(questions);
    }
    console.log("startbuttonclick")
})