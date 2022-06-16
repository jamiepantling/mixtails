import "./CocktailList.module.css";
import * as cocktailsAPI from "../../../utilities/cocktails-api";
import CocktailListItem from "../../FlavorToDrink/CocktailListItem/CocktailListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CocktailList(props) {

  return (
    <>
      <div>
        <ul>
          {props.cocktails.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(cocktail => <li><CocktailListItem cocktail={cocktail} /></li>)}
        </ul>
      </div>
    </>
  );
}
