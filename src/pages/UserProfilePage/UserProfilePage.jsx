import { Component } from "react";
import UpdateUserForm from "../../components/Auth/UpdateUserForm/UpdateUserForm";
import Header from "../../components/Header/Header";
import UserLogOut from "../../components/Auth/UserLogOut/UserLogOut";
import style from "./UserProfilePage.module.css";
import * as mixtapesAPI from "../../utilities/mixtapes-api";
import UserMixtapeListItem from "../../components/MoodToMix/MixtapeListItem/UserMixtapeListItem";

export default class UserProfilePage extends Component {
  state = {
    favdrinks: [],
    favmixtapes: [],
    showEdit: false,
    itemdeleted: "",
    mixtapes: [],
  };

  setMixtapeInState = (deletedMixtape) => {
    let remainingMixtapes = this.state.mixtapes.filter(
      (mixtape) => mixtape._id != deletedMixtape._id
    );
    this.setState({ ...this.state, mixtapes: remainingMixtapes });
  };

  async componentDidMount() {
    try {
      let fetchMixtapes = await mixtapesAPI.getMixtapes();
      let mixtapes = fetchMixtapes.filter(
        (mixtape) => this.props.user._id === mixtape.createdBy
      );
      this.setState({ ...this.state, mixtapes });
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  // componentDidUpdate() {
  //   console.log("ComponentDidUpdate: ", this.state.mixtapes);
  // }

  render() {
    return (
      <main className={style.userPbody}>
        <Header setUserInState={this.props.setUserInState} />
        <div className={style.profileInfoContainer}>
          <h1>{this.props.user.username}</h1>
          <div>{this.props.user.email}</div>
          {this.props.user.bio && <div>Bio: {this.props.user.bio}</div>}
          {/* <div>Fav Drinks: {this.props.user.favdrinks}</div>
          <div>Fav Mixtapes: {this.props.favmixtapes}</div> */}
        </div>
        <div
          className={style.editProfileButton}
          onClick={() => this.setState({ showEdit: !this.state.showEdit })}
        >
          {this.state.showEdit ? <span>Collapse</span> : <span>Edit profile info</span>}
        </div>
        {this.state.showEdit ? (
          <UpdateUserForm
            user={this.props.user}
            setUserInState={this.props.setUserInState}
          />
        ) : (
          <></>
        )}
        <div className={style.myMixtailsContainer}>
          <h2>My mixtails</h2>
          {(this.state.mixtapes.length && (
            <div className={style.mixtailsCount}>
              {" "}
              {this.state.mixtapes.length}{" "}
              {this.state.mixtapes.length > 1 ? "mixtails" : "mixtail"}
            </div>
          )) || <div className={style.noMixtapes}>No mixtails yet </div>}
          {this.state.mixtapes.map((mixtape) => (
            <UserMixtapeListItem
              user={this.props.user}
              setMixtapeInState={this.setMixtapeInState}
              key={mixtape._id}
              mixtape={mixtape}
            />
          ))}
        </div>
        <div className={style.logOutButton}>
          <UserLogOut setUserInState={this.props.setUserInState} />
        </div>
      </main>
    );
  }
}
