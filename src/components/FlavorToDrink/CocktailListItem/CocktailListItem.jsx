import style from "./CocktailListItem.module.css";
import * as cocktailsAPI from "../../../utilities/cocktails-api";
import { useState } from "react";

export default function CocktailListItem(props) {
  let [showCocktail, setShowCocktail] = useState(false);

  return (
    <div>

        <div className={style.body}>
          <h2
            className={style.cocktailButton}
            onClick={() => setShowCocktail(!showCocktail)}
          >
            {props.cocktail.name}
          </h2>
          {showCocktail ? (
            <div className={style.details}>
              {props.cocktail.image ? (
                <img src={props.cocktail.image} alt="Cocktail pic" />
              ) : (
                <></>
              )}
              <div className={style.cocktailText}>
                <p>{props.cocktail.description}</p>
                <label>Instructions</label>
                <div className={style.instructions}>{props.cocktail.instruction}</div>
                <label>Ingredients</label>

                  {props.cocktail.ingredients.map((ingredient) => (
                    <div key={ingredient._id}>
                      {ingredient.name} {ingredient.qty}
                    </div>
                  ))}

              </div>
            </div>
          ) : (
            <p></p>
          )}
        </div>

    </div>
  );
}
