import {Component} from 'react';
import style from './UserLogOut.module.css'

class UserLogOut extends Component {
  
  handleLogout = () => {
    localStorage.removeItem('token')
    this.props.setUserInState(null)
  }
  
  render() {
  return (
      <div className={style.logout}>
        <button className={style.button} onClick={this.handleLogout}><span>LOGOUT</span></button>
      </div>
  );
  }
}

export default UserLogOut;