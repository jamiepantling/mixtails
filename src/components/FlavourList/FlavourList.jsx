import FlavourListItem from "../FlavourListItem/FlavourListItem"
import style from "./FlavourList.module.css"
import { useEffect, useState } from "react";
import * as tagsApi from "../../utilities/tags-api";


export default function FlavourList(props) {

    const [tagList, setTagList] = useState([]);

    useEffect(function () {
      async function fetchTags() {
        const tags = await tagsApi.getTags();
        setTagList(tags);
      }
      fetchTags();
    }, []);
  
    const tags = tagList.map((tag) => (
    <FlavourListItem key={tag._id} {...tag} />
    ));


    return (
        <div>
          <h2>Taste Profiles</h2>
            {tags}
        </div>
    )
}