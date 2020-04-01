import React from 'react';
import axios from 'axios';

class UserDetails extends React.Component {

    constructor(){
        super();
        this.state = {
            user: {}
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users/'+ localStorage.getItem("loggedInUserId"))
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
    }

    render() {
        return (
            <div style={{border: '1px solid'}}>
                <div className="user-row">
                    <h2>Name: {this.state.user.name}</h2>
                    <h3>Company: {Object.keys(this.state.user).length > 0 ? this.state.user.company.name : ''}</h3>

                </div>
            </div>
        );
    }
}

export default UserDetails;