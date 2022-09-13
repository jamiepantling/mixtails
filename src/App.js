import { Component } from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import './App.css'
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import AllCocktailList from './components/FlavorToDrink/AllCocktailList/AllCocktailList'
import MoodPage from './pages/MoodPage/MoodPage';
import FlavourPage from './pages/FlavourPage/FlavourPage';
import MixtapeDetailPage from './pages/MixtapeDetailPage/MixtapeDetailPage';

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
          <Route path="/home" element={<HomePage setUserInState={this.setUserInState} public={false} user ={this.state.user}/>}/>
          <Route path="/user" element={<UserProfilePage user={this.state.user} setUserInState={this.setUserInState}/>} />          
          <Route path="/flavours" element={<FlavourPage />} />
          <Route path="/moods" element={<MoodPage user={this.state.user}/>}/>
          <Route path="/mixtapes/:id" element={<MixtapeDetailPage user={this.state.user}/>} />
          <Route path="*" element={<Navigate to="/home" replace />}/>
          <Route path="/cocktails" element={<AllCocktailList />}/>
        </Routes>
        : (
        <>
        <Routes>
          <Route path="/home" element={<HomePage setUserInState={this.setUserInState} public={true}/>}/>
          <Route path="/user" element={<AuthPage setUserInState={this.setUserInState} login={true} />} />          
          <Route path="/flavours" element={<FlavourPage />} />
          <Route path="/moods" element={<MoodPage user={this.state.user} public={true}/> }/>
          <Route path="/mixtapes/:id" element={<MixtapeDetailPage user={this.state.user}/>} />
          <Route path="*" element={<Navigate to="/home" replace />}/>
          <Route path="/cocktails" element={<AllCocktailList />}/>
          <Route path="/login" element={<AuthPage setUserInState={this.setUserInState} login={true} />}/>
          <Route path="/signup" element={<AuthPage setUserInState={this.setUserInState} login={false} />}/>
        </Routes>
        {/* // <AuthPage setUserInState={this.setUserInState} /> */}
        </>
        )
        }
      </div>
    );
  }
}


