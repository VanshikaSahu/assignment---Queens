import React,  {createContext, useReducer} from 'react';


const Reducer = (state, action) =>{
    switch(action.type){
        case 'CHANGE_DATE':
            return{ 
                ...state, 
                date: action.payload,
            }
        case 'CHANGE_TIME':
            return{ 
                ...state, 
                time: action.payload,
            }
        default:
            return state;
    }
}

const initialState ={
    time: '',  //global state
    date: new Date(), 
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, initialState);

    //Actions 
    const ADDdate=(date1)=>{
        dispatch({
            type: 'CHANGE_DATE',
            payload: date1,
        })
    }

    const SetTime = (time) =>{
        dispatch({
            type: 'CHANGE_TIME',
            payload: time,
        })
    }




    return(
        <GlobalContext.Provider value={
            {date: state.date,
            time: state.time,
            ADDdate,
            SetTime,
            }

        }>
            {children}
            
        </GlobalContext.Provider>
    )

}