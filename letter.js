function Letter(letter) {
    this.letter = letter,
        this.guessed = false
    this.display = function () {
        return (this.guessed === true) ? this.letter : '_';
    }
    this.validate = function (guess) {
        if (this.letter === guess) {
            this.guessed = true;
            console.log('right')
        } else {
            console.log('wrong')
        }
    }
}

var test = new Letter('a')

test.validate('a')
