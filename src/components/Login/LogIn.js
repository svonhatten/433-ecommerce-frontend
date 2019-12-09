import React from 'react';
import './Login.css';

export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedLogin: false,
            userText: '',
            passText: '',

        };
        this.toggleExpandedLogin = this.toggleExpandedLogin.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    toggleExpandedLogin() {
        this.setState((currentState) => ({
            expandedLogin: !currentState.expandedLogin,
        }));
        console.log('toggled!');
    }

    handleUsername(event){
        this.setState(
            {userText: event.target.value}
        );
    }

    handlePassword(event){
        this.setState(
            {passText: event.target.value}
        );
    }

    submitLogin(event) {
        console.log('Username: ' + this.state.userText + ' Password: ' + this.state.passText);
        this.setState(
            {expandedLogin: false}
        )
        event.preventDefault();
    }

    render() {
        if(this.state.expandedLogin){
            return (
                <div className={`row ${this.state.expandedLogin ? 'expanded-login' : 'normal-login'}`}>
                    <div>
                        <form>
                            <label>
                                Username:
                                <input type="text" value={this.state.value} onChange={this.handleUsername} />
                            </label>
                        </form>
                    </div>
                    <div>
                        <form>
                            <label>
                                Password:
                                <input type="text" value={this.state.passText} onChange={this.handlePassword} />
                            </label>
                        </form>
                    </div>
                    <button
                        className={'button'} 
                        onClick={this.submitLogin}
                    >
                    Submit
                    </button>
                </div>
            );
        }
        else {
            return (
                <div className={`row ${this.state.expandedLogin ? 'expanded-login' : 'normal-login'}`}
                >
                    <button 
                    className={'button'}
                    onClick={() => this.toggleExpandedLogin()}>Log In</button>
                </div>
            );
        }
    }
}