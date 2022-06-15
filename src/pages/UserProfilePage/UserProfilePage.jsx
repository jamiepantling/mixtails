import { Component } from "react";
import UpdateUserForm from "../../components/Auth/UpdateUserForm/UpdateUserForm";
import Header from "../../components/Header/Header";
import UserLogOut from "../../components/Auth/UserLogOut/UserLogOut";
import style from "./UserProfilePage.module.css";
import MixtapeList from "../../components/MoodToMix/MixtapeList/MixtapeList";
import * as mixtapesAPI from "../../utilities/mixtapes-api"
import MixtapeListItem from "../../components/MoodToMix/MixtapeListItem/MixtapeListItem";

export default class UserProfilePage extends Component {
  state = {
    favdrinks: [],
    favmixtapes: [],
    showEdit: false,
    mixtapes: []
  };

  setMixtapeInState = (deletedMixtape) => {
    let remainingMixtapes = this.state.mixtapes.filter(mixtape => mixtape._id != deletedMixtape._id)
    this.setState({...this.state, mixtapes: remainingMixtapes})
  }

  async componentDidMount() {
    try {
      let fetchMixtapes = await mixtapesAPI.getMixtapes();
      let mixtapes = fetchMixtapes.filter(mixtape => this.props.user._id === mixtape.createdBy)
      this.setState({...this.state, mixtapes})
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  render() {
    return (
      <main>
        <Header setUserInState={this.props.setUserInState}/>
        <div className="style.ProfileC">
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
        <h2>My mixtapes:</h2>
        {this.state.mixtapes.map(mixtape=> <MixtapeListItem key={mixtape._id} mixtape={mixtape}/>)}
        <UserLogOut setUserInState={this.props.setUserInState} />
      </main>
    );
  }
}


