import React, {useState} from 'react';

export const Question = () => {

    const[error, setError] = useState();
    const[value, setValue] = useState("");
    const[colorr, setColor] = useState();
    const[question, setQue] = useState();
    const[answer, setAns] = useState();
    const[start, setStart] = useState(true);
    

    const change = (e) =>{
        setValue(e.target.value);
    }

    const getInfo = async() =>{
        let url = `https://jservice.io/api/random`;
        const response = await fetch(url);
        const data = await response.json();
        setQue(`Que: ${data[0].question}`);
        setAns(data[0].answer);
    }

    if(start){
        getInfo();
        setStart(false);
    }

    const btnClickedHandler = () =>{
        

        if(value === answer){
            setError("The answer is correct");
            setColor({color: "green"});
            getInfo();
            setValue("");

        }
        else{
            setError("The answer is not correct");
            setColor({color: "red"});
            setValue("");
        }
    }
    return (
        <>
        <div id ="error" style={colorr}>{error}</div>
        <div className = "container">
            <h2>{question}</h2>
            <input type = "text" placeholder = "Enter your answer" value = {value} onChange = {change}/>
            <button className = "btn" onClick = {btnClickedHandler}>Submit</button>
        </div>
        </>
    )
}
