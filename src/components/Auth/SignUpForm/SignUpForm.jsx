import { Component } from "react";
import style from './SignUpForm.module.css'

export default class SignUpForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
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
        
      const fetchResponse = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username: this.state.username, email: this.state.email, password: this.state.password})
      })
      if (!fetchResponse.ok) throw new Error ("Fetch failed - Bad Request ")

      let token = await fetchResponse.json()

      localStorage.setItem("token", token)

      const userDoc = JSON.parse(atob(token.split(".")[1])).user
      this.props.setUserInState(userDoc)

    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="style.signUpContainer">
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label className={style.label}>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
            <label className={style.label}>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label className={style.label}>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label className={style.label}>Confirm password</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button className={style.signUpButton} type="submit" disabled={disable}>
              <span> SIGN UP</span>
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
