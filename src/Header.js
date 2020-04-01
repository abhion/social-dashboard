import React from 'react';
import './App.css';

function Header(props){

    function handleLogout(){
        localStorage.removeItem("loggedInUserId");
        console.log(props);
        props.props.history.push('/');
    }

    return (
        <div className="header">
            <div>
                <h3>Dashboard</h3>
            </div>
            <div>
                <h4 style={{cursor:'pointer'}} onClick={handleLogout}>Logout</h4>
            </div>
        </div>
    );
}

export default Header;