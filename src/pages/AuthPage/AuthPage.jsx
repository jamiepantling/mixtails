import { Component } from "react";
import style from "./AuthPage.module.css";
import LoginForm from "../../components/Auth/LoginForm/LoginForm";
import SignUpForm from "../../components/Auth/SignUpForm/SignUpForm";
import { useState, useEffect } from "react";

export default function AuthPage(props) {
  const [showLogin, setShowLogin] = useState(props.login);

  return (
    <main className={style.AuthPage}>
      <div className={style.logoContainer}>
        <div className={style.logo}>
          <img className={style.logo} src="/cocktailLogo.png" alt="" />
        </div>
        <div className={style.mixtailsTitle}>mixtails</div>
      </div>
      {showLogin ? (
        <LoginForm setUserInState={props.setUserInState} />
      ) : (
        <SignUpForm setUserInState={props.setUserInState} />
      )}
      <div>
        <button
          className={style.signUpButton}
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? <span>SIGN UP</span> : <span>LOG IN</span>}
        </button>
      </div>
    </main>
  );
}
