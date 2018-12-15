var Letter = require("./letter.js")
var objects = [];
var userDisplay ="";

class Word {
    constructor(word) {
        this.word = word;
        this.guessed;
        this.guesses = [];
        this.build = () =>{
            let counter = 0;
            for (let o of this.word){
                objects[counter] = new Letter(o)
                counter += 1;
            }
            this.display();
        },
    
        this.display = () => {
            userDisplay = '\n \n WORD : '
            this.guessed = "";
            let counter = 0;
            for (let o of this.word){     
                let guessed = objects[counter].display();
                counter += 1;
                userDisplay += guessed + ' '
                this.guessed += guessed
            }
            console.log(userDisplay + '\n')
            console.log('Guessed letters: ' + this.guesses + '\n')
        },    
        this.guess = (letter) =>{
            let points = 0;
            let counter = 0;
            
            let n = this.guesses.indexOf(letter)
            if (n === -1) {
                this.guesses.push(letter)
            
                for (let o of this.word){
                    // objects[counter].validate(letter);
                    points += objects[counter].validate(letter);
                    counter +=1
                }
                
            
                this.display();
                return (points >= 1)? 'right':'wrong';
            } else {
                return 'invalid'
            }
        }
    }
}

module.exports = Word;

// var test = new Word('rafael');

// test.build()
// test.guess('a')
// test.guess('e')
// test.guess('r')
// test.guess('k')
// test.guess('l')

