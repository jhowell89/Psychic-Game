var incorrectChoices = ["b", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "t", "v", "w", "x", "y", "z"];
var correctChoices = ["l", "u", "c", "a", "s"];
var userText = document.getElementById("user-text");
console.log(userText)
var winText = document.getElementById("win-count");
var lossText = document.getElementById("loss-count");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("yourGuessSofar");
var guesses = 9;
var guessCount = 0;
document.onkeyup = function(event) {
        userText.textContent = event.key;
// index of
        console.log(incorrectChoices.indexOf(event.key)>=0)
        console.log(event.key)
        if(incorrectChoices.indexOf(event.key)>=0){
            lossText.textContent++;
            alert("You guessed the incorrect letter. You lost, try again. ");
        
        }
        else{
            winText.textContent++;
            console.log("true");
        }    
  }


  //create a guess count

  // create how many guesses left

/* Clear/Reset the text field */    
function ClearFields() {
    
         document.getElementById('guesses-left').value = "";
}
