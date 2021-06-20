import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Home} from './Components/Home';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Shop} from './Components/Shop';
import {Services} from './Components/Services';
import {Contact} from './Components/Contact';
import {NavBar} from './Components/NavBar';
import {Footer} from '../Footer';
const App = () => {
    return (
        <>
        
        <NavBar/>
        
        <Switch>
            <Route exact path= "/" component = {Home}/>
            <Route exact path = "/Shop" component = {Shop}/>
            <Route exact path = "/Services" component = {Services}/>
            <Route exact path = "/Contact" component = {Contact}/>
            <Redirect to="/"/>
        </Switch>
        
        
        </>
        
    )
}

export default App;
