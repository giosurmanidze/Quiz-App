import React from 'react'
import { useState,useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import {Questions} from '../Helpers/QuestionsData'

const Quiz = () => {
  const [currentQiestion,setCurrentQuestion] = useState(0);
  const [optionChoesn,setOptionChosen] = useState('');

  const {score, setScore,setGame } = useContext(QuizContext);
  

  const nextQuestion = () => {
    if (Questions[currentQiestion].answer == optionChoesn) {
        setScore(score + 1)
      }
    setCurrentQuestion(preState => preState + 1)   
  }

  const finishQuiz = () => {
    if (Questions[currentQiestion].answer == optionChoesn) {
      setScore(score + 1)
    }
    setGame("endScreen")
  }



  return (
    <div className='quiz'>
        <p className='question'>{Questions[currentQiestion].prompt}</p>
        <div className='options'>
          <button onClick={() => setOptionChosen('A')}>
            {Questions[currentQiestion].optionA}
          </button>
          <button onClick={() => setOptionChosen('B')}>
            {Questions[currentQiestion].optionB}
          </button>
          <button onClick={() => setOptionChosen('C')}>
            {Questions[currentQiestion].optionC}
          </button>
          <button onClick={() => setOptionChosen('D')}>
            {Questions[currentQiestion].optionD}
            </button>
        </div>
        {currentQiestion == Questions.length - 1 ?
        ( <button className='finished-btn' onClick={finishQuiz}>Finished quiz</button>):
        (<button className='next-btn' onClick={nextQuestion}> Next question</button>) }
  
    </div>
  )
}

export default Quiz