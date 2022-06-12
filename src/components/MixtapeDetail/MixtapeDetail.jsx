import { useParams } from 'react-router-dom';
import * as mixtapeApi from "../../utilities/mixtapes-api"
import { useEffect, useState } from 'react'

export default function MixtapeDetail(props) {
    const params = useParams()
    let [mixtape, setMixtape] = useState()
    console.log("Params.id: "+ params.id)

    useEffect( () => {
            async function getMixtape(id) {
                let res = await mixtapeApi.getMixtapeById(id)
                console.log("Res.data: ", res)
                setMixtape(res)
            }
            getMixtape(params.id);
       }, [])


    return (
        <div>
            <h1>{mixtape.name}</h1>
        </div>
    )
}