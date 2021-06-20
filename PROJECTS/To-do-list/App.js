import React, { useState } from 'react';
import List from './List';

const App = () =>{
    const[value, setvalue] = useState();
    const[items, setitems] = useState([]);
    
    const change = (e) =>{
        setvalue(e.target.value);
    }
    
    const btnClickedHandler =() =>{
        if(value!==''){

            setitems((prevValue)=>{
                return [...prevValue,value];
            });
            setvalue('');
        }
        //We empty the value so that in the input field as we click on button the input field becomes empty.
        
    }
    const deleteitems = (id) =>{
        setitems((prevValue)=>{
            return(
                prevValue.filter((elem,index)=>{
                    return index!==id;
                })
            )
        })
        //Here return all the elements using filter function except the one that matches with our id that we selected. 
    }
    
    return(
        <>
        <div className = "main_div">
            <div className = "center_div">
                <h1 className = "heading">ToDo list</h1>
                <input type = "text" placeholder= "ADD ITEMS" value = {value} className = "input" onChange = {change}/>
                <button className = "btn" onClick={btnClickedHandler} >+</button>
                <div className ="list">
                    {items.map((item,index)=>{
                       return <List key={index} id ={index} text = {item} onSelect ={deleteitems}/>
                       //give unique key to the item so that at the time of deleting the item
                       //we know which item we are deleting. 
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default App;
