import React, {useState}from 'react';
import { Question } from './Question';
// import { Question } from './Question';

export const App = () => {

    const[disable, setDisable] = useState(true);

    const start = () =>{
        setDisable(false);
    }
    return (
        <>
        <h1>Quiz Game</h1>
        {disable?(
        <button onClick = {start} className = "btn1">Start Quiz</button>):null}
        {disable?null:(<Question />)}
        </>
    )
}
