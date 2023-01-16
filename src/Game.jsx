import React from 'react';
import Question from "./Question"
import './index.css'
import { nanoid } from 'nanoid'

export default function Game(props){

    console.log("game component running")
    const [answer,setAnswer] = React.useState(0)        
    
    const [difficultyText, setDifficultyText] = React.useState(()=>{
      if(props.difficultyVal == 0){
        return "easy"
      }else if(props.difficultyVal == 1){
        return "medium"
      }else if(props.difficultyVal == -1){
        return ""
      }else{
        return "hard"
      }
    })
    // console.log(props.difficultyVal)
    console.log(difficultyText)
    const [data,setData] = React.useState([])

const [checked, setChecked] =React.useState(false)

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }  

  function handleClickAnswer(id, answer) {
    setData(questions => questions.map(question =>{
      if(question.id === id){
        console.log(question.selected)
      }
      return question.id === id ? {...question, selected: answer} : question
    }))
  }



    React.useEffect(()=>{
      let temp = [] 
      fetch(`https://opentdb.com/api.php?amount=5&type=multiple&difficulty=${difficultyText}`)
            .then(res=>res.json())
                .then(data=>{
                  
                    (data.results).forEach(el=>{
                      temp.push({id: nanoid(), answers:shuffleArray([...el.incorrect_answers, el.correct_answer]), question:el.question, correct:el.correct_answer, selected: null, checked:false})
                    })
                    setData(temp)
                    })
                },[])


                const dataElement = data ? data.map(d =>{
                  return(
                    <Question
                     key={d.id}
                     q={d}
                     handleClickAnswer={handleClickAnswer}
                     id={d.id}
                    />
                  )
                 }) : []
    


    function checkAnswer(){
        console.log('checkingAnswer')
        setData(prevData=>{
       return   prevData.map(data=>{
            return {...data,checked:true}
          })
        })
        setChecked(true) 
        result()       
    }

    function result(){
      data.forEach(d=>{
          if(d.selected == d.correct){
            setAnswer(prev=>prev+1)
          }
      })
    }

    const newGame = false

    function newGameFunc(){

    }

    return(
        <div className='game'>
           {dataElement}

{!checked ? <button onClick={checkAnswer} className='btn btn--check'>Check answers</button> :(<div className="flex"><h3>You scored {answer}/{data.length} correct answer</h3> <button onClick={()=>props.newGame()} className="btn btn--check">Play again</button></div>) }
        </div>

    )
}