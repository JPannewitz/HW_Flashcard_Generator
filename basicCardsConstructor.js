var inquirer = require("inquirer");
var fs = require("fs");
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}

var count = 0;
var questionsArray= [];

var createFlashcards = function() {

	if (count < 5) {
    	console.log("NEW FLASHCARD");
		inquirer.prompt([
	 		{
			type: 'input',
			name: 'newQuestion',
			message: 'Enter in a new question.'
			}, {
			type: 'input',
			name: 'newAnswer',
			message: 'Type in the answer to your question.'
		}]).then(function(answers) {
			var newCard = new BasicCard(answers.newQuestion, answers.newAnswer)
			questionsArray.push(newCard);
			count++;
			createFlashcards();
		});
	}  
	else {
		//console.log("outside", questionsArray);
    	var text =JSON.stringify(questionsArray)
    	fs.writeFile("cards.txt", text, function(err) {
    		if(err) {
    			return console.log(err);
    		}
    		//console.log("cardstxt was updated");
    	});
	}
  
};

createFlashcards();

module.exports = createFlashcards;
module.exports = questionsArray;
