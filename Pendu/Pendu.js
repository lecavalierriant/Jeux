// ================================================================================================================= //
//                                                                                                                   //
//                                                        Jeux                                                       //
//                                                                                                                   //
// ================================================================================================================= //

mots = ["CHIEN", "CHAT", "MAISON", "JARDIN", "VOITURE", "SOLEIL"];
secret = mots[Math.floor(Math.random() * mots.length)];
longueur = secret.length;
étapes = [
	" +---+\n |   |\n     |\n     |\n     |\n     |\n",
	" +---+\n |   |\n ☻   |\n     |\n     |\n     |\n",
	" +---+\n |   |\n ☻   |\n |   |\n     |\n     |\n",
	" +---+\n |   |\n ☻   |\n/|   |\n     |\n     |\n",
	" +---+\n |   |\n ☻   |\n/|\\  |\n     |\n     |\n",
	" +---+\n |   |\n ☻   |\n/|\\  |\n/    |\n     |\n",
	" +---+\n |   |\n ☻   |\n/|\\  |\n/ \\  |\n     |\n"
];
essaisRestants = 6;
trouvées = 0;
affiché = "";
for (var i = 0; i < longueur; i++) {affiché += "_ ";}

function initialier() {
	wordDisplay.textContent = affiché.trim();
	guessButton.addEventListener(
		"click",
		function() {
			tentative = guessInput.value.toLowerCase();
			if (tentative.length !== 1 || !tentative.match(/[a-z]/i)) {
				message.textContent = "Veuillez entrer une lettre de l'alphabet.";
			} else {
				nouveauAffiché = "";
				trouvée = false;
				for (var i = 0; i < longueur; i++) {
					if (secret[i] === tentative) {
						nouveauAffiché += tentative + " ";
						trouvée = true;
						trouvées++;
					} else {
						nouveauAffiché += wordDisplay.textContent[i * 2] + " ";
					}
				}
				wordDisplay.textContent = nouveauAffiché.trim();
				guessInput.value = "";
				guessInput.focus();
				if (trouvée) {
					if (trouvées === longueur) {
						message.textContent = "Félicitations ! Vous avez deviné le mot.";
						guessInput.disabled = true;
						guessButton.disabled = true;
					} else {
						message.textContent = "Bonne devinette !";
					}
				} else {
					message.textContent = "Ce n'est pas une bonne lettre. Essayez encore !";
					essaisRestants--;
					hangmanStepsDisplay.textContent = étapes[6 - essaisRestants];
					if (essaisRestants === 0) {
						message.textContent = "Dommage, vous avez perdu. Le mot était : " + secret;
						guessInput.disabled = true;
						guessButton.disabled = true;
					}
				}
			}
		}
	);
}

// ================================================================================================================= //
//                                                                                                                   //
//                                                        Jeux                                                       //
//                                                                                                                   //
// ================================================================================================================= //
