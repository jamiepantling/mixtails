import { useParams } from 'react-router-dom';

export default function MoodDetail(props) {
    const params = useParams()
    return (
        <h1> Mood id is {params.id}</h1>
    )
}