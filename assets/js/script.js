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
                        alert(`You clicked $(gameType`);
                    }

                }
            }
        }
    



function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}
function IncrementScore() {
 
}

function IncrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion( ) {

}