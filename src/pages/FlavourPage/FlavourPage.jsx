import style from "./FlavourPage.module.css"
import Header from "../../components/Header/Header"
import FlavourList from "../../components/FlavourList/FlavourList"

export default function FlavourPage(props) {
    return (
        <main>
            <Header setUserInState={props.setUserInState} />
            <FlavourList />
        
        </main>
    )
}