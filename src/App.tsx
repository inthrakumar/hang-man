import { useState } from 'react'
import words from "./wordlist.json"
import './css/app.css'
import Hangman from './components/Hangman'
import WordToGuess from './components/WordToGuess'
import KeyBoard from './components/KeyBoard'


function App() {
  const [word, setword] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setguessedletters] = useState<string[]>([])

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
      <div className='info-container'>      Your Lose
      </div>
      <div style={{display:"flex",gap:"1rem",width:"800px",justifyContent:"space-around"}}>
      <Hangman />
      <WordToGuess /></div>
      <KeyBoard/>
    </div>
      

    

    </>
  )
}

export default App
