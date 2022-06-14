
import "./AllCocktailList.module.css";
import * as cocktailsAPI from "../../../utilities/cocktails-api";
import CocktailListItem from "../CocktailListItem/CocktailListItem";
import { useEffect, useState } from "react";

export default function CocktailList(props) {
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
      <div>{cocktails}</div>
    </>
  );
}