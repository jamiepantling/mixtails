import { Component } from "react";
import "./UpdateUserForm.css";

export default class UpdateUserForm extends Component {
  state = {
    error: "",
    bio: "",
    username:""
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let jwt = localStorage.getItem("token");
      const fetchResponse = await fetch("/api/users/update/:id", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        body: JSON.stringify({
          username: this.state.username,
          bio: this.state.bio,
        }),
      });
      console.log(fetchResponse);
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad Request ");

      let token = await fetchResponse.json();

      localStorage.setItem("token", token);

      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      console.log(userDoc)
      this.props.setUserInState(userDoc);
    } catch (err) {
      console.log("Update Form error", err);
      this.setState({ error: "Update Failed - Try Again" });
    }
  };

  render() {
    return (
      <div>
        <div className="form-container updateform" onSubmit={this.handleSubmit}>
          <form autoComplete="off">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label>Bio(Tell us about urself): </label>
            <textarea
              type="text"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
            />
            <br />
            <button type="submit">Update</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
