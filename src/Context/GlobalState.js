import React,  {createContext, useReducer} from 'react';

const Reducer = (state, action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                //with the help of id provided in the payload we can delete the transaction
                ...state, 
                transactions: state.transactions.filter(item=>item.id!==action.payload),
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}




//define initial state and will be used with usereducer.
const initialState ={
    transactions: [],//global state
}

//create and export context
export const GlobalContext = createContext(initialState);

//Global provider function to make the global data available to all the components 
//Global provider component 
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, initialState);

    //Actions 
    const deleteTransaction = (id) =>{
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        })
    }

    const AddTransaction = (transactions) =>{
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions,
        })
    }

    //value by context - 
    //children - to all the components that we want to have access to the global data. 
    return(
        <GlobalContext.Provider value = {
            {   transactions: state.transactions,
                deleteTransaction,
                AddTransaction,
                //all these functions can be accessed by the components using the context api.
            } 
        }>
            {children}
        </GlobalContext.Provider>
    );
}



