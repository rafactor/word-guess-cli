var inquirer = require("inquirer")
var Word = require("./word")


//auxiliary variables
var category = ['sports','history','geography'];
var selectedWord;
var lettersRegEx = /[a-zA-Z]/
var word;
var attempts = 10;
var complete = false;

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
  console.log('**********          ¯\\_(ツ)_/¯ No more guesses... YOU LOSE!          **********')
  console.log('**********                    Lets try again! ٩( ᐛ )و                **********')

  selectedWord = undefined;
  attempts = 10;
  word = undefined;
}

validate = () =>{

}

console.log('********************************************************************************')
console.log('**********                         WO_D GUESS G_ME                    **********')
console.log('******************************************************************************** \n')

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
        return true;

      }
    }
    
  },
];

function ask() {
  if (selectedWord === undefined){

    inquirer.prompt(selection).then(answers => {
      
      //get the word based on a random number from the selected category list length
        let n = Math.floor(Math.random() * listOfWords[answers.category].length);
        selectedWord = listOfWords[answers.category][n].toLowerCase()

        //create an object with the new word
        word = new Word(selectedWord);
        word.build()

        // console.log(word)
        ask()
    })
  } 
  else {

    inquirer.prompt(questions).then(answers => {
     
      if (complete) {
        console.log('You Win!')
      }
        let guessedLetter = answers.letter.toLowerCase()
        console.log(answers.letter)
        ask()
        // word.guess(answers.leter.toLowerCase())
      
        // if (guessReturn === 'right') {
        //   console.log(`(☞ﾟヮﾟ)☞  Yeah! ${value} was a good guess! `)
        // } 
        // else {
        //   if (attempts === 1) {
        //      reset();
        //      return true;

        //   } 
        //   else {

        //     attempts -=1
        //     console.log(`Sorry... you only have ${attempts} left...`)
        //   }
        // }


    })
  }
    


      
 
}

ask();