import style from "./FlavourPage.module.css"
import Header from "../../components/Header/Header"
import FlavourList from "../../components/FlavorToDrink/FlavourList/FlavourList"

export default function FlavourPage(props) {
    return (
        <main>
            <Header setUserInState={props.setUserInState} public={props.public}/>
            <h1 className={style.title}>PIck a flavour</h1>
            <FlavourList />
        </main>
    )
}