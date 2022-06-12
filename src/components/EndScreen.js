import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionsData'


const EndScreen = () => {

  const {score, setScore, setGame} = useContext(QuizContext)

  const resetQuiz = () => {
      setScore(0);
      setGame('menu')
  }


  return (
    <div className='endScreen'>
        <h1 >
            Quiz Finished
        </h1>
        <h3>{score} / {Questions.length}</h3>
        <button className='reset-btn' onClick={resetQuiz}> Reset Quiz </button>
    </div>
  )
}

export default EndScreen