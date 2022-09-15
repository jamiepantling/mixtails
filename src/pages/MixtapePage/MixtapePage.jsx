import MixtapeList from "../../components/MixtapeList/MixtapeList";
import Header from "../../components/Header/Header";
import { Component } from 'react'


export default class MixtapeDetailPage extends Component {

render() {
  
  return (
    <main>
      <Header setUserInState={props.setUserInState} user={props.user} public={props.public}/>
      <MixtapeList />
      
    </main>
  );
}
}
