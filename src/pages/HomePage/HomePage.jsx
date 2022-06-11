import Header from "../../components/Header/Header";

export default function HomePage(props) {
    return (
        <main>
            <Header setUserInState={props.setUserInState}/>
            <div>
                <a href={`/user/${props.user._id}`}>Profile</a>
            </div>
            <a href={'/cocktails'}>Cocktails</a>
        </main>
    )
}