import FlavourListItem from "../FlavourListItem/FlavourListItem"
import style from "./FlavourList.module.css"
import { useEffect, useState } from "react";
import * as tagsApi from "../../../utilities/tags-api";
import * as cocktailsApi from "../../../utilities/cocktails-api"


export default function FlavourList(props) {

    const [tagList, setTagList] = useState([]);
    const [cocktailList, setCocktailList] = useState([])

    useEffect(function () {
      async function fetchTags() {
        const tags = await tagsApi.getTags();
        setTagList(tags);
      }
      async function fetchCocktails() {
        const cocktails = await cocktailsApi.getCocktails();
        setCocktailList(cocktails)
      }
      fetchCocktails();
      fetchTags();
    }, []);
    

    const tags = tagList.map((tag) => (
    <FlavourListItem key={tag._id} {...tag} 
    cocktails={cocktailList.filter(cocktail => cocktail.tags.find(tags => tags._id === tag._id))} 
    />
    ))


    return (
        <div>
            {tags}
        </div>
    )
}