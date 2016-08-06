

	var won = 0;
	var lost = 0;
	var underline = "_";
	var computerChoices = ["doomguy", "cacodemon", "arachnotron", "cyberdemon", "imp", "medikit", "ammo", "key", "mancubus" ];
	var game =  0;
	var	letters1 = "abcdefghijklmnopqrstuvwxyz";
	window.onload = setup();

	function setup() {

		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log(computerGuess);
		var disp1 =  underline.repeat(computerGuess.length);
		var disp = disp1.split("");
		var letters = letters1.split("")
		var wordLength = disp.length;
		var numright = 0;
		var numwrong = 0;
		var guessleft = 6;
		var lettersguessed = [];
		var letterssplit = letters1.split("");
		document.querySelector('.wins').innerHTML =  '<img src="assets/images/LOSSSES.gif">' + lost;
		document.querySelector('.losses').innerHTML =  '<img src="assets/images/WINS.gif">' + won;
		document.querySelector('.guessleft').innerHTML ='<img src="assets/images/GUESS.gif">' +  guessleft;
		
	function reset() {
		setup();
		document.querySelector('.joinedletters').innerHTML = "";
		document.querySelector('.hangman').innerHTML = '<img src="assets/images/head1.gif">' ;
				document.querySelector('.disp').innerHTML = disp;
				document.querySelector('.guessleft').innerHTML ='<img src="assets/images/GUESS.gif">' +  guessleft;
		
			}

		window.onkeydown = function () {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			var letter = computerGuess.indexOf(userGuess);	

	
			if ((letter == -1) && ( event.keyCode >= 65 && event.keyCode <=90 ) && !lettersguessed.includes(userGuess)){
			    guessleft --;
			}

			if (guessleft < 1){
			    lost++;
			    reset();
			    return;
			}

			if (won > 1) {
			    document.querySelector('.hangman').innerHTML = '<img src="assets/images/head0.gif">';
			}
			else {
			    document.querySelector('.hangman').innerHTML = '<img src="assets/images/head1.gif">';
			}
			if ( event.keyCode >= 65 && event.keyCode <=90 ){
				lettersguessed.push(userGuess);
			}
			for (var i = 0; i < wordLength; i++) {
			     if (computerGuess.charAt(i) == userGuess) {
			         disp[i] = userGuess;
				}
			}
			var lettersguessed1 = lettersguessed.filter(function(elem, index, self) 
			{
			    return index == self.indexOf(elem);
			})


			var joineddisp = disp.join("");

			var joinedletters = lettersguessed1.join(" ");

			if (joineddisp === computerGuess){
			  	won++;
			    reset();
			    return;
			}
			document.querySelector('.disp').innerHTML = disp;
			document.querySelector('.guessleft').innerHTML ='<img src="assets/images/GUESS.gif">' + guessleft;
			document.querySelector('.joinedletters').innerHTML = "Letters Guessed: " + joinedletters;
			document.querySelector('.presskey').innerHTML = "";

	}
};