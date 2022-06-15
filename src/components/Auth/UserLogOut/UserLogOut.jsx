import {Component} from 'react';
import style from './UserLogOut.module.css'

class UserLogOut extends Component {
  
  handleLogout = () => {
    localStorage.removeItem('token')
    this.props.setUserInState(null)
  }
  
  render() {
  return (
      <div>
        <div className={style.logoutButton} onClick={this.handleLogout}><span>LOGOUT</span></div>
      </div>
  );
  }
}

export default UserLogOut;