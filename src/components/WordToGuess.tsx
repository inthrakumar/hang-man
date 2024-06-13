import React from 'react'
import "../css/Word_to_guess.css"

function WordToGuess() {
    const word: string = "test"
    const guessedLetters:string[]=["t"];
    return (
        <div className='word-to-guess'>
            {word.split("").map((letter:string, index:number) => {
                return (<span style={{visibility:guessedLetters.includes(letter)?"visible":"hidden"}} className='Word' key={index}>{letter}</span>)
            })}
        </div>
    )
}

export default WordToGuess
