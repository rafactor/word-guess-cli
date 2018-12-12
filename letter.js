var Letter = function(letter) {
    this.letter = letter,
    this.guessed = false,
    this.display = function () {
        return (this.guessed === true) ? this.letter : '_';
    },
    this.validate = function (guess) {
        if (this.letter === guess) {
            this.guessed = true;
        } else {
            // console.log('this letter:' + this.letter + '| guessed: ' + guess)
        }
    }
}

module.exports = Letter;
