//wait for the DOM to finish loading before running the game
//Get the button elemens and and add event listeners to them
document.addEventListener('DOMContentLoaded'), function() {
    let buttons = document.getElementsByTagName ('button');
    for (let button of buttons) {
        button.addEventListener('click'), function() {
            if (this.getAttribute('data-type') ==='Submit') {
                alert('You clicked Submit!') ; 
                  }      else {
                        let gameType = this.getAttribute ('data-type');
                        runGame(gameType);
                    }

                }
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
    displayAdditionQuestion (num1, num2);
} else {
    alert ('unknown game type: $ (gameType)');
    throw 'unknown game type $ (gameType).Aborting!';
}
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}
function IncrementScore() {
 
}

function IncrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById(operand1).textContent = operand1;
    document.getElementById(operand2).textContent = operand2;
    document.getElementById(operator).textContent = '+';

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
