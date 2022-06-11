import { Component } from "react";
import UpdateUserForm from "../../components/UpdateUserForm/UpdateUserForm";
import "./UserProfilePage.css";

export default class UserProfilePage extends Component {
    state = {
        favdrinks: [],
        favmixtapes: [],
        showEdit: false,
    }

    render() {
        return (
            <main className="ProfilePage">
                <h1>Welcome {this.props.user.username}</h1>
                <div>Email: {this.props.user.email}</div>
                <div>Bio: {this.props.user.bio}</div>
                <div>Fav Drinks: {this.props.user.favdrinks}</div>
                <div>Fav Mixtapes: {this.props.favmixtapes }</div>
                <button onClick={() => this.setState({showEdit: !this.state.showEdit})}>Edit</button>
                {this.state.showEdit ? <UpdateUserForm user={this.props.user} setUserInState={this.props.setUserInState} /> : <></>}
            </main>
        )
    }
}