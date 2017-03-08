var possibleWords = ["vespa", "takkun", "mamimi", "haruko", "canti", "atomsk", "guitar", "mechanica", "ninamori", "baseball", "robot", "cat", "miyumiyu", "curry", "amarao", "kitsurubami", "mabase", "kamon", "naota", "camera"];
var numGuesses = 10;
var numWins = 0;
var lettersGuessed = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var GAME_STATE = false;
var secretword;
var secretwordArray;
var secretWordIndex;
var imageArray = ["assets/images/vespa.png", "assets/images/takkun.jpg", "assets/images/mamimi.jpg", "assets/images/haruko.jpg", "assets/images/canti.jpg", "assets/images/atomsk.jpg", "assets/images/guitar.jpg", "assets/images/mechanica.png", "assets/images/ninamori2.jpg", "assets/images/baseball.jpg", "assets/images/robot.jpg", "assets/images/cat.jpg", "assets/images/miyumiyu.jpg", "assets/images/curry.jpg", "assets/images/amarao.jpg", "assets/images/kitsurubami.png", "assets/images/mabase.jpg", "assets/images/kamon.jpg", "assets/images/naota.jpg", "assets/images/camera.png"];



//get a random word from the posible choices
function getWord(myArray) {
	secretWordIndex  = Math.floor(Math.random() * myArray.length);
    //var rand = myArray[Math.floor(Math.random() * myArray.length)];
    var rand = myArray[secretWordIndex];
    return rand;
}

function getCorrespondingImage(myArray) {
	var myimg = myArray[secretWordIndex];
	return myimg;

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
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] === "_") {
            arethereBlanks = true;
        }
    }
    return arethereBlanks;
}

function chooseNewWord() {
secretword = getWord(possibleWords);
        secretwordArray = generateBlanks(secretword);
        $("#currentWord").html("Current Word: " + "<br> <br> <br>" + secretwordArray.join(" "));
}
// game init
//     ((player moves))
//     -- > player wins-- > game ends
//     -- > player loses-- > game ends
//     -- > error-- > game ends - > game init







//choose the secret word and show the corresponding blanks
// var secretword = getWord(possibleWords);
// var secretwordArray = generateBlanks(secretword);
// $("#currentWord").html("Current Word: " + "<br>" + secretwordArray.join(" "));


// function playGame() {

	// if (GAME_STATE === false) {
 //        secretword = getWord(possibleWords);
 //        secretwordArray = generateBlanks(secretword);
 //        $("#currentWord").html("Current Word: " + "<br>" + secretwordArray.join(" "));
 //        GAME_STATE = true;


 //    }


//when user presses a key:
document.onkeyup = function(event) {

    if (GAME_STATE === false) {

        secretword = getWord(possibleWords);
        secretwordArray = generateBlanks(secretword);
        $("#currentWord").html("Current Word: " + "<br> <br> <br>" + secretwordArray.join(" "));
        $("#lettersGuessed").html("Letters Guessed: " + "<br><br><br>" + lettersGuessed.join(" "));
        $("#guessesRemaining").html("Guesses Remaining: " + numGuesses);
        $("#numWins").html("Wins: " + numWins);
        GAME_STATE = true;
        document.getElementById('advicesong').play();


    }


    else if (GAME_STATE === true) {

    var userGuess = event.key;
    var lowerGuess = userGuess.toLowerCase();
    console.log(lowerGuess);
    console.log(checkForBlanks(secretwordArray));
    if (alphabet.indexOf(lowerGuess) > -1 && lettersGuessed.indexOf(lowerGuess) === -1 && numGuesses > 0 && checkForBlanks(secretwordArray) === true) { //only does game stuff if the key pressed is an alphabet key that has not already been guessed, and the user still has guesses left, and there are still blanks in the secret word array
        if (secretword.indexOf(lowerGuess) > -1) { //if the guessed letter is in the secret word
        	console.log("yes");
        	console.log(secretword);
        	console.log(secretword[0]);
        	console.log(secretwordArray);
            for (i = 0; i < secretword.length; i++) {
                if (secretword[i] === lowerGuess) {
                	console.log(secretword[i]);
                    secretwordArray[i] = lowerGuess; //replace spaces in array of blanks with the letter
                    console.log(secretwordArray);
                }

            }


            lettersGuessed.push(lowerGuess);
            lettersGuessed.sort();
            console.log(lettersGuessed);


            $("#currentWord").html("Current Word: " + "<br> <br> <br>" + secretwordArray.join(" ")); //display updated blanks array
            $("#lettersGuessed").html("Letters Guessed: " + "<br><br><br>" + lettersGuessed.join(" ")); //display updated letters guessed array


        } else { //if the guessed letter is not in the secret word

        	console.log("no");

            numGuesses = numGuesses - 1;
            $("#guessesRemaining").html("Guesses Remaining: " + numGuesses); //display updated number of guesses
            lettersGuessed.push(lowerGuess);
            lettersGuessed.sort();
            console.log(lettersGuessed);
            $("#lettersGuessed").html("Letters Guessed: " + "<br><br><br>" + lettersGuessed.join(" ")); //display updated letters guessed array
        }


    }

 }

    function gameEnd() {

        numGuesses = 10;
        $("#guessesRemaining").html("Guesses Remaining: " + numGuesses);
        lettersGuessed = [];
        $("#lettersGuessed").html("Letters Guessed: " + "<br><br><br>" + lettersGuessed.join(" "));
        //$("#gameOutcome").empty();
        console.log("game is over");

        //GAME_STATE = false;


    }

    if (numGuesses === 0) { //game over, user loses
    	console.log("it's a loss");
        $("#lastgameOutcome").html("Outcome of Last Game:" + "<br><br><br>"+ "You Lost! Secret word was " + secretword);
        $("#relevantImg").html("<img src = '" +getCorrespondingImage(imageArray)+"'alt = 'secret word image'>");
        gameEnd(); //auto restart game on loss
        // playGame();
        chooseNewWord();


    }

    if (checkForBlanks(secretwordArray) === false) { //game over, user wins
    	console.log("it's a win");
        $("#lastgameOutcome").html("Outcome of Last Game:" + "<br><br><br>"+"You Won! Secret word was " + secretword);
        $("#relevantImg").html("<img src = '" +getCorrespondingImage(imageArray)+"' alt = 'secret word image'>");
        numWins = numWins + 1;
        $("#numWins").html("Wins: " + numWins);
        gameEnd(); //auto restart game on win
        // playGame();
        chooseNewWord();
    }

}
