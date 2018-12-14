var inquirer = require("inquirer")
var Word = require("./word")


//auxiliary variables
var category = ['sports','history','geography'];
var selectedWord;
var lettersRegEx = /[a-zA-Z]/
var word;

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

console.log('\n *** Welcome to WORD GUESS game * CLI * *** \n');

var selection = [
  {
    type: 'list',
    name: 'category',
    message: 'Select a category',
    choices: category,
    filter: function(val) {
      return val.toLowerCase();
    }
  },
];

var questions = [
  {
    type: 'input',
    name: 'letter',
    message: "Guess a letter:",
    validate: (value) => {
      var valid = value.match(lettersRegEx);
      if (valid === null){
      return valid || 'Please type a letter. Special characters are not valid.'
      } else {
        word.guess(value.toLowerCase())
        // console.log(word)
      }
    }
    
  },
];

function ask() {

  if (selectedWord === undefined){

    inquirer.prompt(selection).then(answers => {
      
      //get the word based on a random number from the selected category list length
        let n = Math.floor(Math.random() * listOfWords[answers.category].length);
        selectedWord = listOfWords[answers.category][n]

        //create an object with the new word
        word = new Word(selectedWord);
        word.build()

        // console.log(word)
        ask()
    })
  } else {
    inquirer.prompt(questions).then(answers => {
      
       console.log('game')
    })
  }
    

    // if (answers.category) {
    
    // } else {
    //   console.log('Your favorite TV Shows:', output.join(', '));
    // }

      
 
}

ask();