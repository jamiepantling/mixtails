import './App.css'
import { Route, Routes } from "react-router-dom"
import AuthPage from './pages/AuthPage/AuthPage';
import SpotifyPage from './pages/SpotifyPage/SpotifyPage'
import UserLogout from './components/UserLogOut/UserLogOut'
import Header from './components/Header/Header';
import { Component } from 'react'

export default class App extends Component {

  state = {
    user: null,
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); 
      if (payload.exp < Date.now() / 1000) {  
        localStorage.removeItem('token');
        token = null;
      } else { 
        let userDoc = payload.user 
        this.setState({user: userDoc})      
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.user ?
          <Header setUserInState={this.setUserInState}/>
        : (
        <>
          <AuthPage setUserInState={this.setUserInState} />
          {/* <SpotifyPage /> */}
        </>
        )
        }
      </div>
    );
  }
}


