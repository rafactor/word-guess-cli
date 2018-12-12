var Letter = require("./letter.js")
var objects = [];
var userDisplay ="";

var Word = function(word){
    this.word = word,
    this.build = () =>{
        let counter = 0;
        for (let o of this.word){
            objects[counter] = new Letter(o)
            counter += 1;
        }
        this.display();
    },

    this.display = function(){
        userDisplay = 'word to guess: '
        let counter = 0;
        for (let o of this.word){     
            let guessed = objects[counter].display();
            counter += 1;
            userDisplay += guessed + ' '
        }
        
        console.log(userDisplay)
    
    },


    this.guess = function(letter){
        let counter = 0;
        for (let o of this.word){
            objects[counter].validate(letter);
            // console.log(objects[counter])
            counter +=1
        }
        this.display();

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

