import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';


export const AddTransaction = () => {
    const[text, setText] = useState("");//contains text input value
    const[amount, setAmount] = useState(0);
    const{AddTransaction} = useContext(GlobalContext);

    const onSubmit = (e) =>{
        e.preventDefault();
        const newTransaction = {
            id: Math.random(),
            text,
            amount: +amount,
        }
        AddTransaction(newTransaction);
    }


    return (
        <>
          <h3>Add new transaction</h3>
          <form onSubmit={onSubmit}>
              <div className = "form-control">
                  <label htmlFor = "text">Text</label>
                  <input type = "text" value= {text} onChange = {(e)=>{setText(e.target.value)}} placeholder = "Enter text" />
              </div>
              <div className = "form-control">
                  <label htmlFor = "text">Amount <br/> negative-expense, positive-income</label>
                  <input type = "number" value = {amount} onChange = {(e)=>{setAmount(e.target.value)}} placeholder = "Enter amount"/>

              </div>
              <button className = "btn">Add transaction</button>

            </form>  
        </>
    )
}

export default AddTransaction;
