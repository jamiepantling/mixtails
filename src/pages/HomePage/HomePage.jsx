import Header from "../../components/Header/Header";

export default function HomePage(props) {
    return (
        <Header setUserInState={props.setUserInState}/>
    )
}