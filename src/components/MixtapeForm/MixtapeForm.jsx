import {Component} from 'react'
import * as cocktailsAPI from '../../utilities/cocktails-api'

export default class mixtapeForm extends Component {
    
    state = {
      name: "",
      cocktails: [],
      moods: [],
      playlist: "",
      allMoods: [],
      allCocktails: []
    }
  
    componentDidMount() {
        let fetchCocktails = async () => {
          const cocktails = await cocktailsAPI.getCocktails()
          this.setState({...this.state, allCocktails: cocktails })
        }
        fetchCocktails()
    }
  
  render() {
        return (
        <div>
          <br/>
          <h3>Create mixtape:</h3>
          <div>
            <form autoComplete="off">
              <label>Mixtape name</label>
              <input
              type="text"
              name="name"
              value={this.state.name}
              />
              <label>Add cocktails to your mixtape:</label>
              <select name="cocktails" id="cocktails">
              {this.state.allCocktails.map(cocktail => <option key={cocktail._id}>{cocktail.name}</option>)}
              </select>
              <label>Add moods to your mixtape:</label>
              <select name="moods">
                <option></option>
              </select>
              <label>Add a link to a playlist:</label>
              <input
              type="text"
              name="playlist"
              value={this.state.playlist}
              />
              <button></button>
            </form>
          </div>
        </div>
      
    );
  }
  }
  