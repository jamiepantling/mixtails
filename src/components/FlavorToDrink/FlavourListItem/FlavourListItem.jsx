import { Component, useState } from "react";
import CocktailList from "../CocktailList/CocktailList";
import { useMediaQuery } from "react-responsive";
import style from "./FlavourListItem.module.css";


export default function FlavourListItem(props) {
  const [showCocktails, setShowCocktails] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 800 });
  const isDesktop = useMediaQuery({ minWidth: 800 });

  return (
    <div>
      {isDesktop && (
        <div>
          <h3
            className={style.flavour}
            onClick={() => setShowCocktails({ showCocktails: !showCocktails })}
          >
            {props.content}
          </h3>
          <div className={style.filler}></div>
          {showCocktails ? <CocktailList cocktails={props.cocktails} /> : <></>}
        </div>
      )}
      {isMobile && (
        <div>
          <h3
            className={style.flavourMobile}
            onClick={() => setShowCocktails({ showCocktails: !showCocktails })}
          >
            {props.content}
          </h3>
          <div className={style.fillerMobile}></div>
          {showCocktails ? <CocktailList cocktails={props.cocktails} /> : <></>}
        </div>
      )}
    </div>
  );
}
