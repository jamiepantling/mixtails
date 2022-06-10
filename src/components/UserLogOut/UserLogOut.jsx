import {Component} from 'react';
import './UserLogOut.css'

class UserLogOut extends Component {
  
  handleLogout = () => {
    localStorage.removeItem('token')
    this.props.setUserInState(null)
  }
  
  render() {
  return (
      <div className='UserLogOut'>
        <div>Name: </div>
        <div>Email: </div>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
  );
  }
}

export default UserLogOut;