import { Component } from "react";
import UpdateUserForm from "../../components/Auth/UpdateUserForm/UpdateUserForm";
import Header from "../../components/Header/Header";
import UserLogOut from "../../components/Auth/UserLogOut/UserLogOut";
import "./UserProfilePage.css";

export default class UserProfilePage extends Component {
  state = {
    favdrinks: [],
    favmixtapes: [],
    showEdit: false,
  };

  render() {
    return (
      <main>
        <Header setUserInState={this.props.setUserInState}/>
        <div className="ProfileC">
          <h1>Welcome {this.props.user.username}</h1>
          <div>Email: {this.props.user.email}</div>
          <div>Bio: {this.props.user.bio}</div>
          <div>Fav Drinks: {this.props.user.favdrinks}</div>
          <div>Fav Mixtapes: {this.props.favmixtapes}</div>
        </div>
        <button
          onClick={() => this.setState({ showEdit: !this.state.showEdit })}
        >
          Edit
        </button>
        {this.state.showEdit ? (
          <UpdateUserForm
            user={this.props.user}
            setUserInState={this.props.setUserInState}
          />
        ) : (
          <></>
        )}

        <UserLogOut setUserInState={this.props.setUserInState} />
      </main>
    );
  }
}
