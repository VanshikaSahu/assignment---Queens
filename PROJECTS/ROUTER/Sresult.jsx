import React from 'react';

const Sresult = (props) =>{
    const img = `https://source.unsplash.com/300x300/?${props.content}`;
    return (
        <>
        <div>
            <img className = "img" src ={img} alt = "hell0"/>
        </div>
        </>
    )
}

export default Sresult;
