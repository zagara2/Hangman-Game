var possibleWords = ["vespa", "takkun", "mamimi", "haruko", "canti", "atomsk", "guitar", "alien", "ninamori", "baseball", "robot", "cat", "curry", "amarao", "bakery", "mabase", "kamon", "naota", "camera"];
var numGuesses = 10;
var numWins = 0;
var lettersGuessed = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//get a random word from the posible choices
function getWord(myArray) {
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand;
}


//generate an array of blanks the same length as a given word
function generateBlanks(myWord) {

    var blankarray = [];
    for (i = 0; i < myWord.length; i++) {
        blankarray.push("_");
    }

    return blankarray;


}
//check if there are blanks in an array
function checkForBlanks(myArray) {
	var arethereBlanks = false;
	for (i=0, i <myArray.length; i++) {
		if myArray[i] === "_" {
			arethereBlanks = true;
		}
	}
	return arethereBlanks;
}


function playGame() {


    //choose the secret word and show the corresponding blanks
    var secretword = getWord(possibleWords);
    var secretwordArray = generateBlanks(secretword);
    $("#currentWord").html("Current Word: " + "<br>" + secretwordArray.join(" "));


    //when user presses a key:
    document.onkeyup = function(event) {

            var userGuess = event.key;
            var lowerGuess = userGuess.toLowerCase();
            if (alphabet.indexOf(lowerGuess) > -1 && lettersGuessed.indexOf(lowerGuess) === -1 && numGuesses>0 && checkForBlanks(secretwordArray) === true) { //only does game stuff if the key pressed is an alphabet key that has not already been guessed, and the user still has guesses left, and there are still blanks in the secret word array
                if (secretword.indexOf(lowerGuess) > -1) { //if the guessed letter is in the secret word
                    for (i = 0; i < secretword.length; i++) {
                        if (secretword.charAt[i] === lowerGuess) {
                            secretwordArray[i] = lowerGuess; //replace spaces in array of blanks with the letter
                        }

                    }

                    
                    lettersGuessed.push(lowerGuess);
                    

                    $("#currentWord").html("Current Word: " + "<br>" + secretwordArray.join(" ")); //display updated blanks array
                    $("#lettersGuessed").html("Letters Guessed: " + "<br>" + lettersGuessed.join(" "));//display updated letters guessed array


                }

                else { //if the guessed letter is not in the secret word

                	numGuesses = numGuesses - 1;
                	$("#guessesRemaining").html("Guesses Remaining: " + "<br>" + numGuesses);//display updated number of guesses
                	lettersGuessed.push(lowerGuess);
                	$("#lettersGuessed").html("Letters Guessed: " + "<br>" + lettersGuessed.join(" "));//display updated letters guessed array
                }


            }

            if (numGuesses === 0) { //game over, user loses
            	$("#gameOutcome").html("You Lose! Secret word was " + secretword);
            	//game restarts (CODE GOES HERE)


            }

            if (checkForBlanks(secretwordArray) === false) { //game over, user wins
            	$("#gameOutcome").html("You Win! Secret word was " + secretword);
            	numWins = numWins + 1;
            	$("#numWins").html("Wins: " + numWins);
            	//game restarts (CODE GOES HERE)
            }

        }


function gameRestart() {
	

}
