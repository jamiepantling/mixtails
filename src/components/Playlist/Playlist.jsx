import "./Playlist.module.css";
import * as mixtapeAPI from "../../utilities/mixtapes-api"
import { Component } from "react";

export default class Playlist extends Component {
  
    state = {
        link: ""
    }
    // user object passed down from App.js
  
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
        // console.log(this.props.user)
    }

    handleSubmit = async (evt) => {
        evt.preventDefault()

        try {
            await mixtapeAPI.addPlaylist(this.state.link)
        } catch (error) {
            console.log(error)
        }
        
        //async () => {
        //     await mixtapeAPI.addPlaylist(this.state.link)
        //     // this.setState({link: ""})
        // })
        
        
    }


    render() {
    return (
      <>
        <h1>PlayList Page</h1>
        <div className="form-field" onSubmit={this.handleSubmit}>
            <form autoComplete="off">
                <input 
                type="text"
                name="link"
                value={this.state.link}
                onChange={this.handleChange}
                />
                <button type="submit">ADD PLAYLIST</button>
            </form>
        </div>

        <div>List of playlists</div>
      </>
    );
  }
}
