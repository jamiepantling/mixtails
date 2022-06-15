import "./CocktailListItem.module.css";
import * as cocktailsAPI from "../../../utilities/cocktails-api";
import { useState } from "react";

export default function CocktailListItem(props) {

  let [showCocktail, setShowCocktail] = useState(false)

  return (
    <div className="list">
      <h2>
        {props.cocktail.name}
      </h2>
      <button onClick={() => setShowCocktail(!showCocktail)}>Waz dis?</button>
      {showCocktail ? 
      <div className="details">
        {props.cocktail.image ? <img src={props.cocktail.image} alt="Cocktail pic" /> : <></>}
        <label>Description</label>
        <p>{props.cocktail.description}</p>
        <label>Instructions</label>
        <p>{props.cocktail.instruction}</p>
        <label>Ingredients</label>
        <ul>
          {props.cocktail.ingredients.map(ingredient => <li key={ingredient._id}>{ingredient.name}</li>)}
        </ul>
      </div> 
      : <></>}
    </div>
  );

}
