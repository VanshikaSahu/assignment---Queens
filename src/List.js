import React from 'react';

const List = (props) =>{
    return(
    <>
        <div>
        <button className = "btn1" onClick= {() =>{
            props.onSelect(props.id);
        }} >x</button>
        {/* We are creating onSelect to know that which item we are selecting 
        We are creating a callback function */}
        <li className = "list">{props.text}</li>
        </div>
    </>)
}

export default List;
