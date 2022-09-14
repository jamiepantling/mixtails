
import style from "./AllCocktailList.module.css";
import * as cocktailsAPI from "../../../utilities/cocktails-api";
import CocktailListItem from "../CocktailListItem/CocktailListItem";
import { useEffect, useState } from "react";
import Header from "../../Header/Header";

export default function AllCocktailList(props) {
  const [cocktailList, setCocktails] = useState([]);

  useEffect(function () {
    async function fetchCocktails() {
      const cocktails = await cocktailsAPI.getCocktails();
      setCocktails(cocktails);
    }
    fetchCocktails();
  }, []);

  const cocktails = cocktailList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((cocktail) => (
    <CocktailListItem key={cocktail._id} cocktail={cocktail} />
  ));

  return (
    <>
      <div  className={style.c}>
        {cocktails}
      </div>
    </>
  );
}