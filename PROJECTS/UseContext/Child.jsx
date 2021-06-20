import React, {memo} from 'react';

 
const Child = (props) => {
    const{Counter, updateCounter} = props;

    console.log('child Rendering');
    return(
        <div>
            <h1>child - {Counter}</h1>
            <button onClick = {updateCounter}>Click me!</button>
        </div>
    )
    
};

export default memo(Child);