import React from 'react';
import {useParams,useHistory} from 'react-router-dom';

const User = () => {
    const params  = useParams();
    const history = useHistory();
    
    
    
    //There can be multiple params thatswhy we are using object destrcuturing
    return <>
    <h1>Hello{params.fname} { params.lname}! Welcome to the user page</h1>
    <button onClick = {() =>{
        history.push('/');
    }}>Homepage</button>
    </>
    
}

export default User;