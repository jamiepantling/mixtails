import "./CocktailList.module.css";
import * as cocktailsAPI from "../../../utilities/cocktails-api";
import CocktailListItem from "../../FlavorToDrink/CocktailListItem/CocktailListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CocktailList(props) {

  const URL = `/cocktails/${props._id}`;
  const [cocktailList, setCocktails] = useState([]);

  useEffect(function () {
    async function fetchCocktails() {
      const cocktails = await cocktailsAPI.getCocktails();
      setCocktails(cocktails);
    }
    fetchCocktails();
  }, []);

  const cocktails = cocktailList.map((cocktail) => (
    <CocktailListItem key={cocktail._id} {...cocktail} />
  ));


  return (
    <>
      <div>{props.cocktails.map(cocktail => <CocktailListItem cocktail={cocktail} />)}</div>
    </>
  );
}
