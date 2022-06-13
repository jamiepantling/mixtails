import MixtapeDetail from "../../components/MixtapeDetail/MixtapeDetail"
import Header from "../../components/Header/Header"
import { useEffect, useState } from "react";


export default function MixtapeDetailPage(props) {
    // let [mood, setMood] = useState(mood)
 
    console.log("mixtape detail page!")
    return (
       <main>
        <Header setUserInState={props.setUserInState} />
        <MixtapeDetail />
      </main>
      
    )
}