function guessingGame() {
    const ans = Math.floor(Math.random() * 100)
    let playGame = true;
    let numGuesses = 0;

    return function game(num){

        if(playGame){
            numGuesses++
            if(num < ans) return (`${num} is too low`);
            if(num > ans) return (`${num} is too high`);
            if(num === ans){
                playGame = false;
                return (`You Win! You found ${ans} in ${numGuesses} guesses`)
            }
        }else{
                return `Game is over you already won`
            }
    }
}

module.exports = { guessingGame };
