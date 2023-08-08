//wait for the DOM to finish loading before running the game
//Get the button elemens and and add event listeners to them
document.addEventListener('DOMContentLoaded'), function () {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click'), function () {
            if (this.getAttribute('data-type') === 'Submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }

        };
        runGame(addition);

    }


    /**
     * The main game 'loop', called when the first script is loaded
     * and after the user's answer has been processed.
     */

    function runGame(gameType) {
        //creates two randon numbers between 1 and 25
        let num1 = math.floor(math.random() * 25) + 1;
        let num2 = math.floor(math.random() * 25) + 1;
    }
    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'multiply');
    displayMultiplyQuestion(num1, num2) else {
        alert('unknown game type: $ (gameType)');
        throw 'unknown game type $ (gameType).Aborting!';
    }
};
/**
 * Checkls for answer against the first element in the returnedCalculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculatedCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        alert('Hey! You got it right! :D');
        IncrementScore();
    } else {
        alert('Awww....you answered $(userAnswer)' The correct answer was $(calculatedAnswer[0]!);
        IncrementWrongAnswer();
    }
}
runGame(calculatedAnswer[1]);

}
/**
 * Gets the operands (numbers) and the operator (plus, minus etc) directly from the Dom and calculates the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = parseInt(document.getElementById('operator').innerText);

    if (operator === '+') {
        return (operand1, operand2. 'addition');
    } else if (operator === 'x') {
        return [operand1, operand2, 'multiply'];
    }
    else {
        alert('unimplemented operator $(operator');
        throw 'unimplemented operator $ (operator).Aborting!';
    }
}

}/**
 * Gets the current score from the DOM and increments it by 1 above
 */
function IncrementScore() {
    let oldScore = parseInt(document.getElementById(score).innerText);
    document.getElementById('score').innerText = ++oldScore;



}
/**
 * Gets the current tally of correct answers from the DOM and increments it by 1
 */
function IncrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById(incorrect.innerText);
    document.getElementById('incorrect').innerText = ++oldScore;


}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById(operand1).textContent = operand1;
    document.getElementById(operand2).textContent = operand2;
    document.getElementById(operator).textContent = '+';

}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 > operand1: operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 > operand1: operand1;
    document.getElementById(operator).textContent = '-';

}

function displayMultiplyQuestion() {
    document.getElementById(operand1).textContent = operand1;
    document.getElementById(operand2).textContent = operand2;
    document.getElementById(operator).textContent = 'x';

}
