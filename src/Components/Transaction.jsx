import React, {useContext} from 'react'
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

export const Transaction = (props) => {
    const{deleteTransaction} = useContext(GlobalContext);
    const{transaction} = props;
    const sign = transaction.amount<0? '-':'+';

    return (
        <li className = {transaction.amount<0? 'minus': 'plus'}>
            {transaction.text} <span>{sign}{moneyFormattor(transaction.amount)}</span> 
            <button onClick = {()=>deleteTransaction(transaction.id)}>delete</button>

        </li>
    )
}
