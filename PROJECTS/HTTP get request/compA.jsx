import React, { useEffect, useState } from "react";
import axios from "axios";
// Similar to fetch axios is an api to get data

//Everytime when we select something from select box we need to fetch the data using axios api we will use 
//axios api to get the data. 

const CompA = () => {
    const[num, setNum] = useState(1);
    const[name, setName] = useState();
    const[moves, setMoves] = useState();
    useEffect(()=>{
        async function getData(){
            const result = await axios.get(` https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(result.data.name);
            //setMoves(result.data.moves);
            //We cannot call moves in such a way bcause moves is an arraySo write 
            setMoves(result.data.moves.length);
        }
        getData();
        
    });
    return(
        <>
        {/*Here upon select whatever value that we select must be displayed on h1 tag. 
        For that we use onchange to get the value what user selected. */}
        <h1>You selected {name}</h1>
        <h1>{name} has {moves} moves</h1>
        <select value={num} onChange = {(e) => setNum(e.target.value)}>
            <option value ='1'>1</option>
            <option value ='2'>25</option>
            <option value ='3'>3</option>
            <option value ='4'>4</option>
            <option value ='5'>5</option>
        </select>
        </>
    );
}

export default CompA;