import { useParams } from 'react-router-dom';
import * as mixtapeApi from "../../../utilities/mixtapes-api"
import * as moodApi from '../../../utilities/moods-api'
import { useEffect, useState } from 'react'
import style from "./MixtapeDetail.module.css"


export default function MixtapeDetail(props) {
    const params = useParams()
    let [mixtape, setMixtape] = useState({})
    let [moods, setMoods] = useState([])
    let [mixtapeMoodIds, setMixtapeMoodIds] = useState([])
    let [playlist, setPlaylist] = useState("")
    let [name, setName] = useState("")
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    // mixtape.moods.map(mood => moods.find(x=>x._id === mood))
    
    
    useEffect( () => {
        async function getMoods() {
            let res = await moodApi.getMoods()
            setMoods(res)
        }
        getMoods()
        getMixtape(params.id);
        // console.log("use effect activated as mixtape has changed")
        // if (mixtape.moods) {
        //     console.log("yup, mixtape.moods")
        //     if(moods) {
        //         // console.log("yup, moods")
        //         // creates new array with those moods associated with this mixtape
        //         let thisMixtapeMoods = mixtape.moods.map(mood => moods.find(x=>x._id === mood))
        //         // sets this in state
        //         // console.log(mixtapeMoods)
        //         // console.log("changing MixtapeMoods")
        //         setMixtapeMoods(thisMixtapeMoods)
        //     }
        // }
    }, [])

    async function getMixtape(id) {
        // console.log("getting mixtape")
        let res = await mixtapeApi.getMixtapeById(id)
        setMixtape(res)
        setName(res.name)
        setPlaylist(res.playlists[0])
    }

     // useEffect( () => {
    //     console.log("use effect activated as mixtape has changed")
    //     if (mixtape.moods) {
    //         console.log("yup, mixtape.moods")
    //         if(moods) {
    //             // console.log("yup, moods")
    //             // creates new array with those moods associated with this mixtape
    //             let thisMixtapeMoods = mixtape.moods.map(mood => moods.find(x=>x._id === mood))
    //             // sets this in state
    //             // console.log(mixtapeMoods)
    //             // console.log("changing MixtapeMoods")
    //             setMixtapeMoods(thisMixtapeMoods)

    //         }
    //     }
    // }, [])

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
            // console.log("Error: ", error)
        }
    }

    const handleMoodClick = (mood) => {
        // console.log("handling mood click")
        mixtapeApi.addRemoveMood(mood._id, params.id)
        // getMixtape(params.id)
        // let tempVar = mixtapeMoods
        let tempMoods = [...mixtape.moods]
        if (mixtape.moods.includes(mood) ) {
            let idx = tempMoods.indexOf(mood)
            // tempVar.splice(idx, 1)
            tempMoods.splice(idx, 1)
        } else {
            // tempVar = [...tempVar, mood]
            tempMoods = [...tempMoods, mood]
        }
        // console.log("Before: ", mixtapeMoods)
        // setMixtapeMoods(tempVar)
        setMixtape({...mixtape, moods: tempMoods})
        

        // console.log("Mixtape moods following setting: ", mixtapeMoods)
    }


    //     moodsButtons = mixtapeMoods.map(mood => (<div className={style.div}>
    //         <div>{mood.content}</div>
    //         <div><button id={mood._id} onClick={() => handleMoodClick(mood._id)}>X</button></div>
    //         </div>
    //         ) )
    // moods.filter(mood => !mixtapeMoods.includes(mood)).map(mood => (
    //         <button id={mood._id} onClick={() => handleMoodClick(mood._id)}>{mood.content}</button>
    //         ))


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
                    {mixtape.moods.map(mood => (<div className={style.div}>
                        <div>{mood.content}</div>
                            <div><button id={mood._id} onClick={() => handleMoodClick(mood)}>X</button></div>
                        </div>)
                    )}
                </ul>

                <div> 
                    <h2>Add moods to {mixtape.name}:</h2>
                    <ul>
                        {
                        // moods.forEach(mood => {
                        //     mixtape.moods.forEach(mixtapeMood => mixtapeMood._id != mood._id ? <button id={mood._id} onClick={() => handleMoodClick(mood)}>{mood.content}</button> : <></> )
                        // })
                        
                        moods.filter(mood => {
                            console.log("Mood", mood)
                            console.log("Mixtape.moods", mixtape.moods)
                            console.log("Mixtape moods: ", !mixtape.moods.includes(mood))
                            return !mixtape.moods.includes(mood)
                        }).map(mood => (
                        <button id={mood._id} onClick={() => handleMoodClick(mood)}>{mood.content}</button>
                        ))


                        }
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