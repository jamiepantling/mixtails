import MixtapeDetail from "../../components/MoodToMix/MixtapeDetail/MixtapeDetail"
import Header from "../../components/Header/Header"
import { useEffect, useState } from "react";


export default function MixtapeDetailPage(props) {
    // let [mood, setMood] = useState(mood)
 
    return (
       <main>
        <Header setUserInState={props.setUserInState} user={props.user} public={props.public}/>
        <MixtapeDetail user={props.user}/>
      </main>
      
    )
}