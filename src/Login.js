import React from 'react';
import axios from 'axios';


class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            inpText: '',
            isEmailInvalid: false
        }
    }

    componentDidMount(){
        if(localStorage.getItem('loggedInUserId')){
            this.props.history.push('/dashboard');
        }
        console.log(this.props)
    }

    handleInpChange = (e) => {
        this.setState({
            inpText: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data);
                const data = res.data;
                console.log(data.find(user => user.email == this.state.inpText));
                let userId = null;
                if (data.find(user => {
                    if(user.email == this.state.inpText){
                        userId = user.id;
                        return true;
                    }
                    
                })){
                    localStorage.setItem("loggedInUserId", userId);
                    this.props.history.push('/dashboard');
                }
                else {

                    this.setState({
                        isEmailInvalid: true
                    });
                }
            })
    }

    render() {
        const errorLabel = this.state.isEmailInvalid ? <div>Invalid email</div> : ''
        return (
            <div>
                <div id="loginContainer">
                    <h2>Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.inpText} onChange={this.handleInpChange} />
                        {errorLabel}
                    </form>
                </div>
            </div>
        );

    }
}

export default Login;