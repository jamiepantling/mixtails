export default function MixtapeList(props) {

    return (
      props.mixtapes.map(mixtape => <p>{mixtape.name}</p>)
    )
}