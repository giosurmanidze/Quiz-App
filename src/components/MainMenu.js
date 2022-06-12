import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css"

const MainMenu = () => {
  const { setGame } = useContext(QuizContext);


  return (
    <div className='Menu'>
      <h1>Let's play 😊</h1>
      <button onClick={() => setGame("quiz")} className='Start--quiz'>
        Start Quiz
      </button>
    </div>
  )
}

export default MainMenu