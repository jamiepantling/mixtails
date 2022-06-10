import UserLogOut from "../UserLogOut/UserLogOut"
import "./Header.module.css"

export default function Header(props) {
  return (
    <div>
        <UserLogOut setUserInState={props.setUserInState}/>
    </div>
  )
}
