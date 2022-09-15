import { Component } from "react";
import style from "./CocktailsPage.module.css";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AllCocktailList from "../../components/FlavorToDrink/AllCocktailList/AllCocktailList";

export default function CocktailsPage(props) {
  return (
    <main>
      <Header setUserInState={props.setUserInState} user={props.user} public={props.public} />
      <div className={style.title}>all cocktails</div>
      <div className={style.cocktailsContainer}>
        <AllCocktailList />
      </div>
    </main>
  );
}
