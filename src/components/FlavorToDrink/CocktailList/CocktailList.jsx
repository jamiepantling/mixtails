import "./CocktailList.module.css";
import * as cocktailsAPI from "../../../utilities/cocktails-api";
import CocktailListItem from "../../FlavorToDrink/CocktailListItem/CocktailListItem";
import { useEffect, useState } from "react";

export default function CocktailList(props) {

  return (
    <>
      <div>{props.cocktails.map(cocktail => <CocktailListItem cocktail={cocktail} />)}</div>
    </>
  );
}
