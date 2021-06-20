import React , {useState, memo}from 'react';


const Selection = (props) =>{
    const[color, setcolor] = useState({ background: '' });
    const apply = (bg) =>{
        setcolor(bg);
    }
    console.log(props.applyColor);

    
    
    return(
        <div className = "fix-box" style = {color} onClick = {props.applyColor(apply)} > 
            <h2 className = "subheading">Selection</h2>
        </div> 
    )
    
}

export default memo(Selection);