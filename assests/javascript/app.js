// You'll create a trivia form with multiple choice or true/false options (your choice).
var secondsLeft = 70;

var intervalId;

var correctAnswers = 0;

var incorrectAnswers = 0;

var unanswered = 0;

var triviaQuestions = [{
    question: "Who was the butler on the 'Fresh Prince of Bel Air'?",
    answerList: ["Carlton", "Geoffrey", "Bertram"],
    answer: 1
}, {
    question: "On the 'Saved by the Bell' episode in which Jessie freaked out on drugs, what was she taking?",
    answerList: ["ecstasy", "sleeping pills", "caffeine"],
    answer: 2
}, {
    question: "On which kids' show did the character Pierre Escargot appear?",
    answerList: ["All That", "The Mickey Mouse Club", "The Ren & Stimp Show"],
    answer: 0
}, {
    question: "What's the first book in R.L. Stine's 'Goosebumps' series?",
    answerList: ["Welcome to Dead House", "The Girl Who Cried Monster", "Say Cheese and Die!"],
    answer: 0
}, {
    question: "What's the name of Carmen Sandiego's criminal organization?",
    answerList: ["L.I.V.E", "E.V.I.L", "V.I.L.E"],
    answer: 2
}, {
    question: "Which TV character was so popular in the '90s that he got his own cereal?",
    answerList: ["Mr. T", "Urkel", "Pee-Wee Herman"],
    answer: 1
}, {
    question: "What is Bart Simpson's full name?",
    answerList: ["Bartemius Crouch Simpson", "Bartholomew JoJo Simpson", "Bart Simpson"],
    answer: 1
}, {
    question: "What game came packaged with a Game Boy?",
    answerList: ["Tetris", "Super Mario Bros.", "Donkey Kong"],
    answer: 0
}, {
    question: "Which '90s boy band featured Nick, Drew, Justin and Jeff?",
    answerList: ["Backstreet Boys", "NSYNC", "98 Degrees"],
    answer: 2
}, {
    question: "Which '90s song was ranked the 'No. 1 greatest one-hit wonder of all time' by VH1?",
    answerList: ["Macarena", "Ice Ice Baby", "I'm Too Sexy"],
    answer: 0
}];

// The player will have a limited amount of time to finish the quiz. 


// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.


// Don't let the player pick more than one answer per question.



$('#start').on('click', function() {

    $(this).hide();

    $('#time').html("<h3>Time Remaining:70 </h3>" + "<br>");

    run();


    $('#question1').html("<h4>" + triviaQuestions[0].question + "</h4>");

    $('#answer1').html(
        "<input type='radio' name='answer1' value='0'>" + triviaQuestions[0].answerList[0] +
        "<br>" +
        "<input type='radio' name='answer1' value='1'>" + triviaQuestions[0].answerList[1] +
        "<br>" +
        "<input type='radio' name='answer1' value='2'>" + triviaQuestions[0].answerList[2] +
        "<br><br>"
    );


    $('#question2').html("<h4>" + triviaQuestions[1].question + "</h4>");

    $('#answer2').html(
        "<input type='radio' name='answer2' value='0'>" + triviaQuestions[1].answerList[0] +
        "<br>" +
        "<input type='radio' name='answer2' value='1'>" + triviaQuestions[1].answerList[1] +
        "<br>" +
        "<input type='radio' name='answer2' value='2'>" + triviaQuestions[1].answerList[2] +
        "<br><br>"
    );


    $('#question3').html("<h4>" + triviaQuestions[2].question + "</h4>");

    $('#answer3').html(
        "<input type='radio' name='answer3' value='0'>" + triviaQuestions[2].answerList[0] +
        "<br>" +
        "<input type='radio' name='answer3' value='1'>" + triviaQuestions[2].answerList[1] +
        "<br>" +
        "<input type='radio' name='answer3' value='2'>" + triviaQuestions[2].answerList[2] +
        "<br><br>"
    );


    $('#question4').html("<h4>" + triviaQuestions[3].question + "</h4>");

    $('#answer4').html(
        "<input type='radio' name='answer4' value='0'>" + triviaQuestions[3].answerList[0] +
        "<br>" +
        "<input type='radio' name='answer4' value='1'>" + triviaQuestions[3].answerList[1] +
        "<br>" +
        "<input type='radio' name='answer4' value='2'>" + triviaQuestions[3].answerList[2] +
        "<br><br>"
    );


    $('#question5').html("<h4>" + triviaQuestions[4].question + "</h4>");

    $('#answer5').html(
        "<input type='radio' name='answer5' value='0'>" + triviaQuestions[4].answerList[0] +
        "<br>" +
        "<input type='radio' name='answer5' value='1'>" + triviaQuestions[4].answerList[1] +
        "<br>" +
        "<input type='radio' name='answer5' value='2'>" + triviaQuestions[4].answerList[2] +
        "<br><br>"
    );


    $('#question6').html("<h4>" + triviaQuestions[5].question + "</h4>");

    $('#answer6').html(
        "<input type='radio' name='answer6' value='0'>" + triviaQuestions[5].answerList[0] +
        "<br>" +
        "<input type='radio' name='answer6' value='1'>" + triviaQuestions[5].answerList[1] +
        "<br>" +
        "<input type='radio' name='answer6' value='2'>" + triviaQuestions[5].answerList[2] +
        "<br><br>"
    );

    $('#question7').html("<h4>" + triviaQuestions[6].question + "</h4>");

    $('#answer7').html(
        "<input type='radio' name='answer7' value='0'>" + triviaQuestions[6].answerList[0] +
        "<br>" +
        "<input type='radio' name='answer7' value='1'>" + triviaQuestions[6].answerList[1] +
        "<br>" +
        "<input type='radio' name='answer7' value='2'>" + triviaQuestions[6].answerList[2] +
        "<br><br>"
    );


    $('#question8').html("<h4>" + triviaQuestions[7].question + "</h4>");

    $('#answer8').html(
        "<input type='radio' name='answer8' value='0'>" + triviaQuestions[7].answerList[0] +
        "<br>" +
        "<input type='radio' name='answer8' value='1'>" + triviaQuestions[7].answerList[1] +
        "<br>" +
        "<input type='radio' name='answer8' value='2'>" + triviaQuestions[7].answerList[2] +
        "<br><br>"
    );


    $('#question9').html("<h4>" + triviaQuestions[8].question + "</h4>");

    $('#answer9').html(
        "<input type='radio' name='answer9' value='0'>" + triviaQuestions[8].answerList[0] +
        "<br>" +
        "<input type='radio' name='answer9' value='1'>" + triviaQuestions[8].answerList[1] +
        "<br>" +
        "<input type='radio' name='answer9' value='2'>" + triviaQuestions[8].answerList[2] +
        "<br><br>"
    );

    $('#question10').html("<h4>" + triviaQuestions[9].question + "</h4>");

    $('#answer10').html(
        "<input type='radio' name='answer10' value='0'>" + triviaQuestions[9].answerList[0] +
        "<br>" +
        "<input type='radio' name='answer10' value='1'>" + triviaQuestions[9].answerList[1] +
        "<br>" +
        "<input type='radio' name='answer10' value='2'>" + triviaQuestions[9].answerList[2] +
        "<br><br>"
    );

    $('#submit').html("<button id='done' class='btn'> Done </button>");

    $("#done").on("click", function() {

        keepingScore();

        displayResults();

    });
});

// Don't forget to include a countdown timer.

function run() {

    clearInterval(intervalId);

    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    secondsLeft--;

    $('#time').html("<h3>Time Remaining: " + secondsLeft + " Seconds</h3>" + "<br>");

    if (secondsLeft === 0) {

        stop();

        keepingScore();

        displayResults();
    }
}

function stop() {

    clearInterval(intervalId);

}

function displayResults() {

    $('#time').hide();

    $('#question1').hide();
    $('#answer1').hide();

    $('#question2').hide();
    $('#answer2').hide();

    $('#question3').hide();
    $('#answer3').hide();

    $('#question4').hide();
    $('#answer4').hide();

    $('#question5').hide();
    $('#answer5').hide();

    $('#question6').hide();
    $('#answer6').hide();

    $('#question7').hide();
    $('#answer7').hide();

    $('#question8').hide();
    $('#answer8').hide();

    $('#question9').hide();
    $('#answer9').hide();

    $('#question10').hide();
    $('#answer10').hide();

    $('#submit').hide();

    $('#resultsMsg').html("<h4>A for Effort!</h4>");

    $('#correct').html("Correct Answers: " + correctAnswers);

    $('#incorrect').html("Incorrect Answers: " + incorrectAnswers);

    $('#unanswered').html("Unanswered: " + unanswered);
}

function keepingScore() {

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();
    var userAnswer6 = $("input[name='answer6']:checked").val();
    var userAnswer7 = $("input[name='answer7']:checked").val();
    var userAnswer8 = $("input[name='answer8']:checked").val();
    var userAnswer9 = $("input[name='answer9']:checked").val();
    var userAnswer10 = $("input[name='answer10']:checked").val();


    if (userAnswer1 === undefined) {

        unanswered++;
    } else if (userAnswer1 == triviaQuestions[0].answer) {

        correctAnswers++;
    } else {

        incorrectAnswers++;
    }


    if (userAnswer2 === undefined) {

        unanswered++;
    } else if (userAnswer2 == triviaQuestions[1].answer) {

        correctAnswers++;
    } else {

        incorrectAnswers++;
    }


    if (userAnswer3 === undefined) {

        unanswered++;
    } else if (userAnswer3 == triviaQuestions[2].answer) {

        correctAnswers++;
    } else {

        incorrectAnswers++;
    }


    if (userAnswer4 === undefined) {

        unanswered++;
    } else if (userAnswer4 == triviaQuestions[3].answer) {

        correctAnswers++;
    } else {

        incorrectAnswers++;
    }


    if (userAnswer5 === undefined) {

        unanswered++;
    } else if (userAnswer5 == triviaQuestions[4].answer) {

        correctAnswers++;
    } else {

        incorrectAnswers++;
    }


    if (userAnswer6 === undefined) {

        unanswered++;
    } else if (userAnswer6 == triviaQuestions[5].answer) {

        correctAnswers++;
    } else {

        incorrectAnswers++;
    }


    if (userAnswer7 === undefined) {

        unanswered++;
    } else if (userAnswer7 == triviaQuestions[6].answer) {

        correctAnswers++;
    } else {

        incorrectAnswers++;
    }


    if (userAnswer8 === undefined) {

        unanswered++;
    } else if (userAnswer8 == triviaQuestions[7].answer) {

        correctAnswers++;
    } else {

        incorrectAnswers++;
    }



    if (userAnswer9 === undefined) {

        unanswered++;
    } else if (userAnswer9 == triviaQuestions[8].answer) {

        correctAnswers++;
    } else {

        incorrectAnswers++;
    }


    if (userAnswer10 === undefined) {

        unanswered++;
    } else if (userAnswer10 == triviaQuestions[9].answer) {

        correctAnswers++;
    } else {

        incorrectAnswers++;
    }
}