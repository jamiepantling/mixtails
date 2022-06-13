import { Component } from "react";
import * as cocktailsAPI from "../../utilities/cocktails-api";
import * as moodsAPI from "../../utilities/moods-api"
import * as mixtapesAPI from "../../utilities/mixtapes-api"

export default class mixtapeForm extends Component {
  state = {
    name: "",
    cocktails: [],
    moods: [],
    playlist: "",
    allMoods: [],
    allCocktails: [],
    error: ""
  };

  componentDidMount() {
    let fetchCocktails = async () => {
      const cocktails = await cocktailsAPI.getCocktails();
      const moods = await moodsAPI.getMoods();
      this.setState({ ...this.state, allCocktails: cocktails, allMoods: moods });
    };
    fetchCocktails();
  }

  handleChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      console.log(this.state)
      await mixtapesAPI.createMixtape(
        {
          name: this.state.name,
          cocktails: this.state.cocktails,
          moods: this.state.moods,
          playlist: this.state.playlist,
          createdBy: this.props.user._id
        }
      )
      this.setState({allCocktails: this.state.allCocktails, allMoods: this.state.allMoods, name: "", cocktails: [], moods: [], playlist: ""})
      
    } catch (error) {
      console.log("Error! ", error)
      this.setState({...this.state, error: "Addition failed 🥴"})
    }

  }
  
  render() {
    return (
      <div>
        <br />
        <h3>Create mixtape:</h3>
        <div onSubmit={this.handleSubmit}>
          <form autoComplete="off">
            <label>Mixtape name</label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
            <label>Add cocktails to your mixtape:</label>
            <select name="cocktails" onChange={this.handleChange}>
              <option disabled selected hidden>Select your cocktail:</option>
              {this.state.allCocktails.map((cocktail) => (
                <option key={cocktail._id} value={cocktail._id}>{cocktail.name}</option>
              ))}
            </select>
            <label>Add moods to your mixtape:</label>
            <select name="moods" onChange={this.handleChange}>
              <option disabled selected hidden>Select a mood:</option>
              {this.state.allMoods.map((mood) => (
                  <option key={mood._id} value={mood._id}>{mood.content}</option>
                ))}
            </select>
            <label>Add a link to a playlist:</label>
            <input type="text" name="playlist" onChange={this.handleChange} value={this.state.playlist} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
