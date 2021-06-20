import React , {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Transaction } from './Transaction';

//to maintain history 

export const TransactionList = () => {
    const{transactions} = useContext(GlobalContext);
    return (
        <>
            <h3>history</h3>
            <ul className = "list">
                {transactions.map(item=>(<Transaction key = {item.id} transaction = {item}/>))}
            </ul>
        </>
    )
}


