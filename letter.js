class Letter {
    constructor(letter){
        this.letter = letter,
        this.guessed = false,
        this.display = () => {
            return (this.guessed === true) ? this.letter : '_';
        },
        this.validate = (guess) => {
            if (this.letter === guess) {
                this.guessed = true;
            }
        }
    }
}

module.exports = Letter;
