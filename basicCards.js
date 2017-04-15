var inquirer = require("inquirer");
var fs = require("fs");
// var finishedCards = require('./basicCardsConstructor.js');
//var questions = finishedCards.questionsArray;
//console.log(finishedCards.questionsArray);

inquirer.prompt([
				{
					type: 'input',
					message: "Type in 'create' to make your own flash cards, or 'quiz' to test your knowledge on previously made flashcards.",
					name: 'initialAnswer'
				}
			]).then(function (answers) {
			// console.log('\n');

			// // Check if the user has guessed correctly
				if (answers.initialAnswer === "create") {
					var finishedCards = require('./basicCardsConstructor.js');

					finishedCards.createFlashcards();
				} else {
					
				

var questionsArr = [];

fs.readFile("cards.txt", "utf8", function(error, data) {
	//console.log(JSON.parse(data));
	questionsArr.push(JSON.parse(data));
	console.log(questionsArr[0].length);
	//console.log(questionsArr);
	playGame();
})


	var correctAnswers = 0;
	var wrongAnswers = 0;
	var numAsked = 0;

	var count = 0;
	var playGame = function() {
		//if (questionsArr[0].length < count) {
		if (count < 5) {
			inquirer.prompt([
				{
					type: 'input',
					message: questionsArr[0][count].front,
					name: 'userAnswer'
				}
			]).then(function (answers) {
			// console.log('\n');

			// // Check if the user has guessed correctly
				if (answers.userAnswer === questionsArr[0][count].back) {
					console.log('Correct!');
					correctAnswers++;
				} else {
					console.log('Incorrect!');
					wrongAnswers++;
				}
	//insert show correct answer
	//go to next question
				// if (numAsked < questionsArr.length - 1) {
				// 	numAsked++;
				// 	playGame();
				// } else {
				// 	console.log('Game Over!');
				// 	console.log('Correct Answers: ' + correctAnswers);
				// 	console.log('Incorrect Answers: ' + wrongAnswers);

				// 	console.log('-------------------------------------\n');

			
				// 	inquirer.prompt([
				// 		{
				// 			type: 'confirm',
				// 			message: 'Do you want to play again?',
				// 			name: 'playAgain'
				// 		}
				// 	]).then(function (answers) {
				// 		if (answers.playAgain) {
						
				// 			numAsked = 0;
				// 			correctAnswers = 0;
				// 			wrongAnswers = 0;

						
				// 			playGame();
				// 		} else {
						
				// 			console.log('Bye');
				// 		}
				// 	})
				// }
				count++;
				playGame();
			})
		// count++;
		// playGame();
		} else {
				console.log('Game Over!');
				console.log('Correct Answers: ' + correctAnswers);
				console.log('Incorrect Answers: ' + wrongAnswers);
				inquirer.prompt([
					{
						type: 'confirm',
						message: 'Do you want to play again?',
						name: 'playAgain'
					}
				]).then(function (answers) {
					if (answers.playAgain) {
						
						count = 0;
						correctAnswers = 0;
						wrongAnswers = 0;

						
						playGame();
					} else {
						
						console.log('Bye');
					}
				})
		}
	};
// playGame();
// })
}
});