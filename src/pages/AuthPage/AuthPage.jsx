import { Component } from "react";
import style from "./AuthPage.module.css";
import LoginForm from "../../components/Auth/LoginForm/LoginForm";
import SignUpForm from "../../components/Auth/SignUpForm/SignUpForm";


export default class AuthPage extends Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
        <main className={style.AuthPage} >
        
            {this.state.showLogin ? (
            <LoginForm setUserInState={this.props.setUserInState} />
            ) : (
            <SignUpForm setUserInState={this.props.setUserInState} />
            )}
            <div>
  
                <button className={style.signUpButton}
                    onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
                    {this.state.showLogin ? <span>SIGN UP</span> : <span>Go to LOG IN</span>}
                </button>
            </div>
        </main>
    );
    
  }
}
