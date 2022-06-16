import style from "./CocktailListItem.module.css";
import * as cocktailsAPI from "../../../utilities/cocktails-api";
import { useState } from "react";

export default function CocktailListItem(props) {

  let [showCocktail, setShowCocktail] = useState(false)

  return (
    <div className={style.body}>
      <div className={style.spacer}></div>
      <h2>
        {props.cocktail.name}
      </h2>
      <button onClick={() => setShowCocktail(!showCocktail)}>{showCocktail ? "Hide": "What is it?"}</button>
      {showCocktail ? 
      <div className={style.details}>
        {props.cocktail.image ? <img src={props.cocktail.image} alt="Cocktail pic" /> : <></>}
        <label>Description</label>
        <p>{props.cocktail.description}</p>
        <label>Instructions</label>
        <p>{props.cocktail.instruction}</p>
        <label>Ingredients</label>
        <ul>
          {props.cocktail.ingredients.map(ingredient => <li key={ingredient._id}>{ingredient.name} {ingredient.qty}</li>)}
        </ul>
      </div> 
      : <p></p>}
    </div>
  );

}
