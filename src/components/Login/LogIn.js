import React from 'react';
import './Login.css';
import ExtraOptions from '../ExtraOptions';

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
        if(this.state.userText.length >= 4 && this.state.passText.length >= 4){
            this.setState(
                {expandedLogin: false}
            )
            this.props.callback(true)
            event.preventDefault();
        }
    }

    render() {
        if(this.props.status === true) {
            return(
            <div>
                {"Hello, "+this.state.userText+"."}
                <ExtraOptions />
            </div>
            )  
        }
        else if(this.state.expandedLogin){
            return (
                <div className={`row ${this.state.expandedLogin ? 'expanded-login' : 'normal-login'}`}>
                    <div>
                        <form onSubmit={e => { e.preventDefault(); }}>
                            <label>
                                Username:
                                <input
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleUsername}
                                    placeholder={"Username"}
                                    required
                                    minLength={4}/>
                            </label>
                        </form>
                    </div>
                    <div>
                        <form onSubmit={e => { e.preventDefault(); }}>
                            <label>
                                Password:
                                <input
                                    type="password"
                                    value={this.state.passText}
                                    onChange={this.handlePassword}
                                    placeholder={"Password"}
                                    required
                                    minLength={4}/>
                            </label>
                        </form>
                    </div>
                    <button
                        type={"button"}
                        className={'button'} 
                        onClick={this.submitLogin}
                    >
                    Log In
                    </button><button
                        type={"button"}
                        className={'button'} 
                        onClick={this.submitLogin}
                    >
                    Sign Up
                    </button>
                </div>
            );
        }
        else {
            return (
                <div className={`row ${this.state.expandedLogin ? 'expanded-login' : 'normal-login'}`}>
                    <button 
                    className={'button'}
                    onClick={() => this.toggleExpandedLogin()}>
                        Log In
                    </button>
                </div>
            );
        }
    }
}