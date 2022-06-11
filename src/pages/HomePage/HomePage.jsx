import Header from "../../components/Header/Header";

export default function HomePage(props) {
    return (
        <main>
            <Header setUserInState={props.setUserInState}/>
            <a href={`/user/${props.user._id}`}>Profile</a>
        </main>
    )
}