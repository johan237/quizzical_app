import React from 'react';
import './index.css'
import sanitizeHtml from 'sanitize-html';
import { nanoid } from 'nanoid'

export default function Game(props){
console.log(props.q.selected)
const answers = props.q.answers

const listElements = answers.map((answer,position) =>{
   let id = null
    if (props.q.checked){
        if (props.q.correct === answer){
          id = 'correct'
        }
        else if(props.q.selected === answer){
          id = 'incorrect'
        }
        else{
          id = 'not-selected'
        }
      }

    console.log(props.id)
    return (
        <li key={nanoid()} id={ id ? id :  "" } onClick={()=>props.handleClickAnswer(props.id, answer)}  className={props.q.selected===answer? 'btn btn--question chosen' : 'btn btn--question ' } dangerouslySetInnerHTML = {sanitizeAndSetHtml(answer)} />
    // <button key={nanoid()} id={id} className={answer === props.q.selected ? 'answer selected' : 'answer'} onClick={() => handleClick(answer)}>{atob(answer)}</button>
    )
  })
 
const correctStyle = {
    backgroundColor: '#94D7A2',
    borderColor:'#94D7A2'
}

const defaultStyle = {
    backgroundColor:'#F8BCBC',
    borderColor:'#F8BCBC',
    color:'#293264'

}

const incorrectStyle = {
    backgroundColor:'#F5F7FB',
    borderColor:'#4D5B9E',
    color:'#293264'

}



function sanitizeAndSetHtml(value){
    return {__html: sanitizeHtml(value)}
}

    return(
        <div className='question'>
            <h3 dangerouslySetInnerHTML={sanitizeAndSetHtml(props.q.question) }  /> 
            <ul className='question--list'>
                {listElements}
            </ul>

            <hr className='hr' />
        </div>
    )
}