
import style from "./AllCocktailList.module.css";
import * as cocktailsAPI from "../../../utilities/cocktails-api";
import CocktailListItem from "../CocktailListItem/CocktailListItem";
import { useEffect, useState } from "react";
import Header from "../../Header/Header";

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
    <CocktailListItem key={cocktail._id} cocktail={cocktail} />
  ));

  return (
    <>
    <Header />
      <div  className={style.c}>
        {cocktails}
      </div>
    </>
  );
}