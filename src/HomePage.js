import React from 'react';
import Header from './Header'
import UserDetails from './UserDetails';
import PostContainer from './PostContainer';

function HomePage(props){

    if(!(localStorage.getItem('loggedInUserId'))){
        props.history.push('/');
    }

    return (
        <div>
            <div>
                <Header props={props}/>
            </div>
            <div>
                <UserDetails />
            </div>
            <div>
                <PostContainer />
            </div>
        </div>
    );
}
export default HomePage;