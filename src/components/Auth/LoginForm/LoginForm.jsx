import { Component } from "react";
import style from "./LoginForm.module.css";
import { Link } from "react-router-dom";
export default class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
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
    if (this.state.password.length < 8) {
      console.log("short password");
    }
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json(); // 3. decode fetch response: get jwt token from srv
      localStorage.setItem("token", token); // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split(".")[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc);
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({
        error: "That email or password isn't right. Please try again.",
      });
    }
  };

  render() {
    return (
      <div>
        <div className={`form-container`} onSubmit={this.handleSubmit}>
          <form autoComplete="off" className={style.loginContainer}>
            <div className={style.loginFormInputsContainer}>
              <label className={style.label}>Email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label className={style.label}> Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
            <button className={style.logInButton} type="submit">
              <span>LOG IN</span>
            </button>
          </form>
          {this.state.error.length ? (
            <div className={style.errorMessage}>{this.state.error}</div>
          ) : (
            <></>
          )}

          <Link className={style.continueButtonLink} to={"/home"}>
            <div className={style.continueButton}>
              Continue without an account
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
