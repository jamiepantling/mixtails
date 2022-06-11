import "./CocktailListItem.module.css";

export default function CocktailListItem(cocktail) {
  return <div className="list">{cocktail.name}</div>;
}
