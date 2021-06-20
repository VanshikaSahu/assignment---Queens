import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

const moneyFormattor= (num) =>{
    let p = num.toFixed(2).split('.');
    return(
        '$'+ 
        p[0].split('').reverse().reduce(function(acc, num, i, orig){
            return num==='-'? acc: num + (i&& !(i%3)?',': '') + acc;
        }, '') + '.' + p[1]
    );
}


export const Balance = () => {
    const{transactions} = useContext(GlobalContext);
    const amount = transactions.map(each => each.amount); 
    //calculating amount from transactions state. It contains an array of amounts
    const total = amount.reduce((acc, currval) => acc+currval, 0);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>{moneyFormattor(total)}</h1>
        </>
    )
}


