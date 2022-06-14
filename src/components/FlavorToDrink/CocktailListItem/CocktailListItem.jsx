import "./CocktailListItem.module.css";
import * as cocktailsAPI from "../../../utilities/cocktails-api";

export default function CocktailListItem(cocktail) {

  // async function deleteCocktail() {
  //   await cocktailsAPI.deleteCocktail(cocktail._id);
  // }
  
  
  return (
  <div className="list">
    <h3>{cocktail.name}</h3>
    {/* <button onClick={deleteCocktail}>DELETE</button> */}
  </div>
  )
}
