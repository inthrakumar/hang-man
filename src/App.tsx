import { KeyboardEvent, useEffect, useState, useCallback } from 'react'
import words from "./wordlist.json"
import './css/app.css'
import Hangman from './components/Hangman'
import WordToGuess from './components/WordToGuess'
import KeyBoard from './components/KeyBoard'


function App() {
  function getWord() {
    const Word = words[Math.floor(Math.random() * words.length)]
    return Word
  }
  const [word, setword] = useState<string>(getWord)

  const [guessedLetters, setguessedletters] = useState<string[]>([])
  const [revealWord,setreveal]=useState<boolean>(false);

  const incorrectletter = guessedLetters.filter(letter => {
    return !word.includes(letter);
  });

  const isLoser = incorrectletter.length >= 6
  const isWinner = word
    .split("")
    .every(letter => guessedLetters.includes(letter))
  const Restart=()=>{
    window.location.reload();
  }
  const addGuessedLetter = useCallback(
    (letter: string) => {
      
      if (guessedLetters.includes(letter)  ||isLoser|| isWinner) return

      setguessedletters(currentLetters => [...currentLetters, letter])
      
    },
    [guessedLetters, isWinner, isLoser]
  )

  useEffect(() => {
    const handler = (e: any) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: any) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setguessedletters([])
      setword(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <>  <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div className='info-container'>      {isWinner && <div>Congratulations <button type='reset' className='btn1'onClick={Restart}>Restart</button></div>}
        {isLoser && <div><button type='reset'onClick={Restart} className='btn1'>Restart</button></div>}{!isWinner && !isLoser &&<div className='heading'><div style={{textWrap:"nowrap"}}>Welcome to the Hangman Game</div><div className='btn-div'><button type='reset'onClick={Restart} className='btn1'>Restart</button><button type='reset' className='btn1' onClick={()=>{setreveal(true)}}>Reveal</button></div></div>}</div>
      <div style={{ display: "flex", gap: "1.5rem", width: "800px", justifyContent: "space-around" }}>
        <Hangman number_of_guesses={incorrectletter.length} />
        <WordToGuess wordtoguess={word} guessedLetters={guessedLetters} reveal={isLoser} /></div>
      <KeyBoard disabled={isWinner || isLoser} activeLetters={guessedLetters.filter(letter =>
        word.includes(letter)
      )} inactiveLetters={incorrectletter} addGuessedLetter={addGuessedLetter
      } />
    </div>



      
      <div />
    </>
  )
}

export default App
