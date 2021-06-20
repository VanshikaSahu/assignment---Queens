import React, {useState } from 'react';
import Sresult from './Sresult';

const Search = (props) => {
    const[img, setimg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        setTimeout(setimg(data), 1000); 
    }
    
    
    return(
        <>
        <h1 className ='heading'>Search images</h1>
        <div className = 'input'>
        <input type = "text" placeholder = "Enter your favorite image" value = {img} onChange = {inputEvent}></input>

        </div>
        {img === "" ? null: <Sresult content = {img}/> }
        {/* Use of ternary operator */}
        
        </>
    )
}

export default Search;