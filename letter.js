class Letter {
    constructor(letter){
        this.letter = letter,
        this.guessed = false,
        this.display = () => {
            if (this.letter === ' ') {
                return ' ';
            } else {
            return (this.guessed === true) ? this.letter : '_';
            }
        },
        this.validate = (guess) => {
            if (this.letter === guess) {
                this.guessed = true;
                return 1
            } else {
                return 0
            }
        }
    }
}

module.exports = Letter;
