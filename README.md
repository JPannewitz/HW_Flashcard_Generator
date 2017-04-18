# HW_Flashcard_Generator
Homework assignment Week 11

## Description on how to use the app
This is a command line node app that allows the user to create flashcards and then quiz him or herself using the flashcards that were just created.  Decide if you would rather 'create' flashcards or 'quiz' yourself, and then begin! The app takes in 5 question and answer pairs when you 'create' the flashcards. Simply run the app again and select 'quiz' to test your knowledge. You are immediately told if your answer is correct or incorrect. If incorrect, the correct answer is given. At the end of the 5 cards, you are shown your final score and asked if you would like to play again.

## Requirements

-Create a backend that will essentially constitute an API that allows users to create two types of flashcards.
-Create a BasicCard constructor. It should accept front and back arguments.

## Technologies Used

-Node.js (
 + fs package to write & read files
 + inquirer package to include prompts
-Javascript (constructor functions)

## Code Explaination
- First created basicCardsConstructor.js file that allows the user to create five flashcards (five questions and answers) by using inquirer.prompt with recursion
- Then created main basicCards.js which uses previously created flashcards to quiz the user using the same technologies

-------------
