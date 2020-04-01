import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import './App.css';

function App(){

    return(
        <BrowserRouter>
            <Route path="/" component={Login} exact/>
            <Route path="/dashboard" component={HomePage} exact={true} />
        </BrowserRouter>
    );
}

export default App;