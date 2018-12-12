var Letter = function(letter) {
    this.letter = letter,
    this.guessed = false,
    this.display = function () {
        return (this.guessed === true) ? this.letter : '_';
    },
    this.validate = function (guess) {
        if (this.letter === guess) {
            this.guessed = true;
            console.log('right')
        } else {
            console.log('wrong')
        }
    }
}

// Letter.prototype.display = function () {
//     return (this.guessed === true) ? this.letter : '_';
// }

// Letter.prototype.validate = function (guess) {
//     if (this.letter === guess) {
//         this.guessed = true;
//         console.log('right')
//     } else {
//         console.log('wrong')
//     }
// }

// var test = new Letter('b')
// test.validate('c')
// var x = test.display()
// console.log(x)


module.exports = Letter;
