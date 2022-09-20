import { Component } from "react";
import style from "./SignUpForm.module.css";
import { Link } from "react-router-dom";
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
    console.log(evt)
    evt.preventDefault();
    if (this.state.password != this.state.confirm) {
      return this.setState({ error: "Please make sure password and confirmation match" })
    }
    if (this.state.password.length < 6) {
      return this.setState({ error: "Please make sure password is at least 6 characters" })
    }
    try {
      const fetchResponse = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        }),
      });
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad Request ");

      let token = await fetchResponse.json();

      localStorage.setItem("token", token);

      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      this.props.setUserInState(userDoc);
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form
            autoComplete="off"
            className={style.signUpContainer}
            onSubmit={this.handleSubmit}
          >
            <div className={style.inputContainer}>
              <div>
                <label className={style.label}>Username</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label className={style.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label className={style.label}>Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label className={style.label}>Confirm password</label>
                <input
                  type="password"
                  name="confirm"
                  value={this.state.confirm}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <button
              className={style.signUpButton}
              type="submit"
              // disabled={disable}
            >
              <span> SIGN UP</span>
            </button>
          </form>
        </div>
        {this.state.error.length ? <div className={style.errorMessage}>&nbsp;{this.state.error}</div> : <></> }
        <Link className={style.continueButtonLink} to={"/home"}>
            <div className={style.continueButton}>
              Continue without an account
            </div>
          </Link>
      </div>
    );
  }
}
