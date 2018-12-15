var inquirer = require("inquirer")
var Word = require("./word")


//auxiliary variables
var category = ['sports', 'history', 'geography'];
var selectedWord;
var lettersRegEx = /[a-zA-Z]/
var word;
var attempts = 10;
// var guessedLetters = [];

var listOfWords = {
  sports: [
    'Michael Jordan',
    'Ayrton Senna',
    'Gustavo Kuerten'
  ],
  history: [
    'Cesar Augustus',
    'Socrates',
    'William Wallace'
  ],
  geography: [
    'Brazil',
    'South Africa',
    'Guatemala'
  ]
}


reset = () => {
  selectedWord = undefined;
  attempts = 10;
  word = undefined;
  ask()
}

console.log('********************************************************************************')
console.log('**********                         WO_D GUESS G_ME                    **********')
console.log('******************************************************************************** \n')

var selection = [{
  type: 'list',
  name: 'category',
  message: 'Select a category',
  choices: category,
  filter: function (val) {
    return val.toLowerCase();
  }
}, ];

var questions = [{
  type: 'input',
  name: 'letter',
  message: "Guess a letter:",
  validate: (value) => {
    var valid = value.match(lettersRegEx);
    if (valid === null) {
      return valid || 'Please type a letter. Special characters are not valid.'
    } else {
 
      let n = word.guesses.indexOf(value.toUpperCase());
      if (n === -1) {

          if (value.length > 1) {
            return 'Please enter only one letter.'
          
          } else {
            return true;
          }
        } else {
          return `You have guessed the letter "${value.toUpperCase()}" before. Enter another letter.`
        }
    }
  }

}, ];

function ask() {
  if (selectedWord === undefined) {

    inquirer.prompt(selection).then(answers => {

      //get the word based on a random number from the selected category list length
      let n = Math.floor(Math.random() * listOfWords[answers.category].length);
      selectedWord = listOfWords[answers.category][n].toUpperCase()

      //create an object with the new word
      word = new Word(selectedWord);
      word.build()

      // console.log(word)
      ask()
    })
  } else {

    inquirer.prompt(questions).then(answers => {

     
      let guessedLetter = answers.letter.toUpperCase()

      let guess = word.guess(guessedLetter)

      if (guess === 'right') {
        if (word.word === word.guessed) {
          console.log('(⌐■_■)    YEAH! You Rock! \n')
          console.log('Let play it again!')
          reset()

        } else {
          console.log(`(☞ﾟヮﾟ)☞  Yeah! "${guessedLetter}" was a good guess! \n`)
          ask()
        }
      } else if (guess = 'wrong') {
        if (attempts === 1) {
          console.log('**********          ¯\\_(ツ)_/¯ You lose!           **********')
          console.log('**************************************************************')
          console.log('**********            Let play it again!            **********')
          reset()
        } else {
          attempts -= 1
          console.log(`(/•-•)/  Sorry... you only have ${attempts} left... \n`)
          ask()
        }
      }
    })
  }





}

ask();