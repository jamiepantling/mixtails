import { Component } from "react";
import "./AuthPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";


export default class AuthPAge extends Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
        <main className="AuthPage" >
        
            {this.state.showLogin ? (
            <LoginForm setUserInState={this.props.setUserInState} />
            ) : (
            <SignUpForm setUserInState={this.props.setUserInState} />
            )}
            <div>
  
                <button
                    onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
                    {this.state.showLogin ? "Go to SIGN UP" : "Go to LOG IN"}
                </button>
            </div>
        </main>
    );
    
  }
}
