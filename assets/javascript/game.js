

	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var guesses = [];
	

//Computer picks letter.
var selectLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var pickALetter = function () {
	var todaysLetter = selectLetter[Math.floor(Math.random() * 26)];
	console.log(todaysLetter);
	
// Records user guess. 
	document.onkeyup = function(event) {
		var selection = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(selection);
		guesses.push(selection);
		document.querySelector("#chosen").innerHTML = "Guesses: " + guesses;
	
//Compares user guess to computer's letter.
		if (todaysLetter === selection && wins >= 8) {
				alert("You Win!");
				guesses = [];
				guessesLeft = 9;
				wins = 0;
				losses = 0;
				document.querySelector("#chosen").innerHTML = "Guesses: " + guesses;
				document.querySelector("#guesses").innerHTML = "Guesses Left: " + guessesLeft;
				document.querySelector("#losses").innerHTML = "Losses: " + losses;
				document.querySelector("#wins").innerHTML = "Wins: " + wins;

				pickALetter();

			}	else if (todaysLetter !== selection && guessesLeft === 0) {
				alert("You Lose!");
				guesses = [];
				guessesLeft = 9;
				losses++;
				document.querySelector("#chosen").innerHTML = "Guesses: " + guesses;
				document.querySelector("#guesses").innerHTML = "Guesses Left: " + guessesLeft;
				document.querySelector("#losses").innerHTML = "Losses: " + losses;
				document.querySelector("#wins").innerHTML = "Wins: " + wins;
				pickALetter();

			}	else if (todaysLetter !== selection && losses >= 8) {
				alert("You lost the game!");
				guesses = [];
				guessesLeft = 9;
				losses = 0;
				wins = 0;
				document.querySelector("#chosen").innerHTML = "Guesses: " + guesses;
				document.querySelector("#guesses").innerHTML = "Guesses Left: " + guessesLeft;
				document.querySelector("#losses").innerHTML = "Losses: " + losses;
				document.querySelector("#wins").innerHTML = "Wins: " + wins;
				pickALetter();
			
			
			}	else if (todaysLetter === selection) {
					console.log("match");
					wins++;
					document.querySelector("#wins").innerHTML = "Wins: " + wins;
					guessesLeft = 9;
					guesses = [];
					pickALetter();

			}	else if (todaysLetter !== selection) {
					guessesLeft--;
					document.querySelector("#losses").innerHTML = "Losses: " + losses;
					document.querySelector("#guesses").innerHTML = "Guesses Left: " + guessesLeft;
					
			}
		

	}
}

pickALetter();


