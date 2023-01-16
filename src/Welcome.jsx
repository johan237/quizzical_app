import React from "react"
import './index.css'
// import './custom.js'

export default function Welcome(props){
    console.log("Current difficulty value is ",props.difficultyVal)

    const btns = Array.from(document.querySelectorAll('.btn'))
  
    function setActive(event){
        btns.forEach(btn => {
            btn.classList.remove('active')
         })

         event.target.classList.add('active')
     
    }

    return (
            <div className="welcome">
                <h1>Quizzical</h1>
                <p>Hello...</p>

                <h1 className="setting">Game Settings</h1>
                <h1 className="difficulty--title">Difficulty</h1>
                <p className="default--none">None by default</p>
                <div className=" difficulty flex">
                    <button onClick={()=>{props.diffFunc(0)}} className={props.difficultyVal === 0 ? ' btn btn--difficult active' :"btn btn--difficult "}>Easy</button>
                    <button onClick={()=>{props.diffFunc(1)}} className={props.difficultyVal == 1 ? 'btn btn--difficult active' :"btn btn--difficult "}>Medium</button>
                    <button onClick={()=>{props.diffFunc(2)}} className={props.difficultyVal == 2 ? "btn btn--difficult active" :"btn btn--difficult "}>Hard</button>
                </div>
                <button onClick={props.handleQuiz} className="btn btn--primary">Start Quiz</button>
            </div>

    )
}