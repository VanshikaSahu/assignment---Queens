import React from 'react';


export const Information = () => {
    return (
        <div id = "info">
            
            <label className = "label1">Meeting Room</label>
            <select>
                <option>Training Room</option>
            </select>
            
            <label className="label2">Name</label>
            <input className ="input1"type = "text" placeholder="Enter your name"/>
            <label className="label3">Meeting Description</label>
            <input className ="input2" type = "text" placeholder="Enter meeting description"/>    
        </div>
    )
}
