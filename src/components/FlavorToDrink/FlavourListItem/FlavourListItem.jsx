import { Component, useState } from "react";
import { useMediaQuery } from "react-responsive";
import style from "./FlavourListItem.module.css";
import CocktailListItem from "../CocktailListItem/CocktailListItem";

export default function FlavourListItem(props) {
  const [showCocktails, setShowCocktails] = useState(false);


  const clickHandler = () => {
    setShowCocktails(!showCocktails);
    console.log("clicked");
  };
  return (
    <div className={style.flavourOuter}>

        <div className={style.flavourContainer}>
          <h3 className={style.flavour} onClick={clickHandler}>
            {props.content}
          </h3>
          {showCocktails ? (
            <div className={style.cocktailsContainer}>
              {props.cocktails
                .sort((a, b) =>
                  a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                )
                .map((cocktail) => (
                  <CocktailListItem cocktail={cocktail} />
                ))}
            </div>
          ) : (
            <></>
          )}
        </div>
     
    </div>
  );
}
