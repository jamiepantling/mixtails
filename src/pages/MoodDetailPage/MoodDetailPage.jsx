import MoodDetail from "../../components/MoodDetail/MoodDetail"
import Header from "../../components/Header/Header"
import { useEffect, useState } from "react";


export default function MoodDetailPage(props) {
    // let [mood, setMood] = useState(mood)

    return (
      <main>
        <Header setUserInState={props.setUserInState} user={props.user} public={props.public}/>
        <MoodDetail />
      </main>
      
    )
}