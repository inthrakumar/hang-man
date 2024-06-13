import "../css/Word_to_guess.css"
type Word_to_guess = {
    wordtoguess:string,
    guessedLetters:string[],
    reveal?:boolean
}
function WordToGuess({wordtoguess,guessedLetters,reveal}:Word_to_guess) {
    
    return (
        <div className='word-to-guess'>
            {wordtoguess.split("").map((letter:string, index:number) => {
                return (<span style={{ borderBottom: ".1em solid black" }} key={index}>
                    <span
                      style={{
                        visibility:
                          guessedLetters.includes(letter) || reveal
                            ? "visible"
                            : "hidden",
                        color:
                          !guessedLetters.includes(letter) && reveal ? "red" : "black",
                      }}
                    >
                      {letter}
                    </span>
                  </span>)
            })}
        </div>
    )
}

export default WordToGuess
