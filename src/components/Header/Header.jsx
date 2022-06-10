import UserLogOut from "../UserLogOut/UserLogOut"
import "./Header.module.css"

export default function Header(props) {
  return (
    <div>
      Header
        <UserLogOut setUserInState={props.setUserInState}/>
    </div>
  )
}
