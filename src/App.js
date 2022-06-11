import { Component } from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import './App.css'
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
// import SpotifyPage from './pages/SpotifyPage/SpotifyPage'
import CocktailList from './components/CocktailList/CocktailList'

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
        <Routes>
          <Route path="/home" element={<HomePage setUserInState={this.setUserInState} user ={this.state.user}/>}/>
          <Route path="/user/:id" element={<UserProfilePage user={this.state.user} setUserInState={this.setUserInState}/>} />          
          <Route path="/cocktails" element={<CocktailList />}/>
          <Route path="*" element={<Navigate to="/home" replace />}/>
        </Routes>

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


