import { useParams } from 'react-router-dom';
import * as mixtapeApi from "../../../utilities/mixtapes-api"
import * as moodApi from '../../../utilities/moods-api'
import { useEffect, useState } from 'react'

export default function MixtapeDetail(props) {
    const params = useParams()
    let [mixtape, setMixtape] = useState({})
    let [moods, setMoods] = useState([])
    let [mixtapeMoods, setMixtapeMoods] = useState([])

    useEffect( () => {
        async function getMoods() {
            let res = await moodApi.getMoods()
            setMoods(res)
        }
        getMoods()

    }, [])

    async function getMixtape(id) {
        let res = await mixtapeApi.getMixtapeById(id)
        setMixtape(res)
    }

    useEffect( () => {
        getMixtape(params.id);
    }, [])

    useEffect( () => {
        if (mixtape.moods) setMixtapeMoods(mixtape.moods.map(mood => moods.find(x=>x._id === mood).content))
    }, [mixtape])

    const handleMoodClick = (moodId) => {
        mixtapeApi.addMood(moodId, params.id)

        let moodToAdd = moods.find(x=>x._id === moodId).content

        setMixtapeMoods([...mixtapeMoods, moodToAdd])
    }

    

    let moodsList = moods.map(mood =>  mixtapeMoods.includes(mood.content) || <button id={mood._id} onClick={() => handleMoodClick(mood._id)}>{mood.content}</button>)


    return (
        
        <div>
            <h1>{mixtape.name}</h1>
            <h2>{mixtape.name}'s moods:</h2>

            <ul>
            {mixtapeMoods.map(m => <li>{m}</li>)}
            </ul>
            <h2>Add moods:</h2>
            <ul>
                {moodsList}
            </ul>
        </div>
    )
}