import MixtapeListItem from "../MixtapeListItem/MixtapeListItem";

export default function MixtapeList(props) {

    return (
      <div>
        {props.mixtapes.map(mixtape => <MixtapeListItem mixtape={mixtape}/>)}

      </div>
    )
}