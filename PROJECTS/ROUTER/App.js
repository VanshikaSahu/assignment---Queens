import React from "react";
import {Route, Switch } from 'react-router-dom';
import Error from './Error';
import Navbar from './Navbar';
import Service from './Service';
import User from './User';
import Search from './Search';

function App() {
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path ='/' component ={() => <Service name ="About"/>}/>
            {/* When path = / then it refers to the home page or we can keep the home page as 'about'.
            But the problem is in url if it has / then it will show the about page even for the /contact also it
            will show about page. So we need to add the word exact. */}
            <Route path ='/contact' render ={() => <Service name ="Contacts"/>}/>  
            <Route path = '/service' component = {() => <Service name ="Service"/>}/>
            <Route path = '/user/:fname/:lname' component = {User}/>
            <Route path = '/search' component = {() => <Search/>}/>
            {/* Use params use :name */}
            <Route component={Error} />
            {/* If the url entered by the user is not from the above then error will occur */}

        </Switch>
        </>
    )

}


export default App;