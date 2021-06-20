import React from 'react';
import {AddTransaction} from './Components/AddTransaction';
import {Balance} from './Components/Balance';
import {Header} from './Components/Header';
import {IncomeExpenses} from './Components/IncomeExpenses';
import {TransactionList }from './Components/TransactionList';

import {GlobalProvider} from './Context/GlobalState';
//type rafc to get the component


const App = ()=>{
    return(
        <GlobalProvider>
            <Header/>
            <div>
                <Balance/>
                <IncomeExpenses/>
                <TransactionList/>
                <AddTransaction/>
            </div>

        </GlobalProvider>
    ) 
}

export default App;