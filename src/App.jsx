import React,{ useState } from 'react'
import Welcome from './Welcome'
import Game from './Game'
function App() {
  console.log('running')
  const [difficulty, setDifficulty]= React.useState(-1)
  const [playQuiz, setPlayQuiz] = useState(false)

  function startQuiz(){
    // console.log("running")
    setPlayQuiz(true)
    console.log(playQuiz)
}

function diffFunc(index){
  setDifficulty(index)
  console.log(difficulty)
}

function newGame(){
  setPlayQuiz(false)
}
    return(
      <div className='App'>

        { !playQuiz ?  <Welcome difficultyVal={difficulty} diffFunc  = {diffFunc} handleQuiz = {startQuiz} /> :  <Game difficultyVal={difficulty} newGame={newGame}  /> }
      </div>
    )  
}

export default App
