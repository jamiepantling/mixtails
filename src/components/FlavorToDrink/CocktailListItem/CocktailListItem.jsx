import "./CocktailListItem.module.css";
import * as cocktailsAPI from "../../../utilities/cocktails-api";
import { useState } from "react";

export default function CocktailListItem(cocktail) {

  // let showDetails = false;
  let [showCocktail, setShowCocktail] = useState(false)

  return (
    <div className="list">
      {cocktail.name}
      <button onClick={() => setShowCocktail(!showCocktail)}>Details</button>
      {showCocktail ? 
      <div className="details">
        {/* <p>{cocktail.description}</p> */}
        <p>{cocktail.instruction}</p>
        <ul>
          {cocktail.ingredients.map(ingredient => <li key={ingredient._id}>{ingredient.name}</li>)}
        </ul>
      </div> 
      : <></>}
    </div>
  );

}
