import './App.css'
import {useState} from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'

import { QuizContext } from './Helpers/Contexts';

function App() {
  const [game,setGame] = useState("menu");
  const [score,setScore] = useState(0);

  
  return (
    <div className="app">
      <h1 >Quiz app</h1>

    <QuizContext.Provider value = {{ game, setGame, score, setScore }}>  
      {game === "menu" && <MainMenu />}
      {game === "quiz" && <Quiz />}
      {game === "endScreen" && <EndScreen />}
    </QuizContext.Provider>
    </div>
  );
}

export default App;
