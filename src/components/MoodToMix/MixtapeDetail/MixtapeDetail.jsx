import { useParams } from 'react-router-dom';
import * as mixtapeApi from "../../../utilities/mixtapes-api"
import * as moodApi from '../../../utilities/moods-api'
import { useEffect, useState } from 'react'
import style from "./MixtapeDetail.module.css"
import { set } from 'mongoose';

export default function MixtapeDetail(props) {
    const params = useParams()
    let [mixtape, setMixtape] = useState({})
    let [moods, setMoods] = useState([])
    let [mixtapeMoods, setMixtapeMoods] = useState([])
    let [playlist, setPlaylist] = useState("")
    let [name, setName] = useState("")
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")
    let [moodsList, setMoodsList] = useState([])
    
    
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
        setName(res.name)
        setPlaylist(res.playlists[0])
    }

    useEffect( () => {
        getMixtape(params.id);
    }, [])

    useEffect( () => {
        if (mixtape.moods) {
            if(moods) {
                let thisMixtapeMoods = mixtape.moods.map(mood => moods.find(x=>x._id === mood))
                setMixtapeMoods(thisMixtapeMoods)
                let moodsList = []
                moods.forEach(mood => {
                    if (mixtapeMoods.includes(mood.content)) {
                        moodsList.push(mood)
                    }
                })
            }
            setMoodsList(moodsList)
        }
    }, [mixtape, moods])

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        if (!name) {
            setError("Mixtape name is required.")
            return setName(mixtape.name)
        }
        try {
            let fetchResponse = await mixtapeApi.updateMixtape(mixtape._id, {name, playlist})
            if (fetchResponse) setSuccess("Saved.")
            getMixtape(params.id)
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    const handleMoodClick = (moodId) => {
        mixtapeApi.addRemoveMood(moodId, params.id)
        getMixtape(params.id)
        
    }


    let moodsButtons = mixtapeMoods.map(mood =>  <button id={mood._id} onClick={() => handleMoodClick(mood._id)}>{mood.content}</button>)
    let nonMoodsList = moods.filter(mood => !mixtapeMoods.includes(mood))
    let nonMoodsButtons = nonMoodsList.map(mood => (
        <div className={style.div}>
            <div>{mood.content}</div>
            <div><button id={mood._id} onClick={() => handleMoodClick(mood._id)}>X</button></div>
        </div>
        ))


    return (
        
        <div>
            <h1>Mixtape: {mixtape.name}</h1>
            <div >
                <form onSubmit={handleSubmit}>
                    <label>Update name:</label>
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}></input>
                    {error?<p>{error}</p>:<></>}
                    <label>Update playlist:</label>
                    <input
                    type="text"
                    name="playlist"
                    value={playlist}
                    onChange={e => setPlaylist(e.target.value)}></input>
                    <button>Save</button>
                    {success? <p>{success}</p>: <></>}
                </form>
            </div>
            {mixtape.createdBy === props.user._id ? 
            <div>
                <h2>{mixtape.name}'s moods:</h2>
                <ul>
                    {nonMoodsButtons}
                </ul>

                <div> 
                    <h2>Add moods to {mixtape.name}:</h2>
                    <ul>
                        {moodsButtons}
                    </ul>
                </div>

            </div>
            : <></>
            }    
        </div>
    )
}





 // useEffect( () => {
    //     if (mixtape.moods) setMixtapeMoods(mixtape.moods.map(mood => moods.find(x=>x._id === mood).content))
    // }, [mixtape])





    // if (mixtape.moods) setMixtapeMoods(mixtape.moods.map(mood => moods.find(x=>x._id === mood).content))