import { Component } from "react";
import style from "./MixtapeForm.module.css"
import * as cocktailsAPI from "../../../utilities/cocktails-api";
import * as moodsAPI from "../../../utilities/moods-api";
import * as mixtapesAPI from "../../../utilities/mixtapes-api";

export default class mixtapeForm extends Component {
  state = {
    // client-side defined states
    name: "",
    cocktails: [],
    moods: [],
    playlist: "",
    // server-side defined states
    allMoods: [],
    allCocktails: [],
    error: "",
  };

  componentDidMount() {
    let fetchCocktails = async () => {
      const cocktails = await cocktailsAPI.getCocktails();
      const moods = await moodsAPI.getMoods();
      this.setState({
        ...this.state,
        allCocktails: cocktails,
        allMoods: moods,
      });
    };
    fetchCocktails();
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // send states to be created in DB
      await mixtapesAPI.createMixtape({
        name: this.state.name,
        cocktails: this.state.cocktails,
        moods: this.state.moods,
        playlist: this.state.playlist,
        createdBy: this.props.user._id,
      });
      // reset states to previous values
      this.setState({
        allCocktails: this.state.allCocktails,
        allMoods: this.state.allMoods,
        name: "",
        cocktails: [],
        moods: [],
        playlist: "",
      });
    } catch (error) {
      console.log("Error! ", error);
      this.setState({ ...this.state, error: "Addition failed 🥴" });
    }
    this.props.setShowMixtapes(false)
  };

  render() {
    return (
      <div className={style.container}>
        <h3>Create mixtape:</h3>
        <div onSubmit={this.handleSubmit}>
          <form className={style.form} autoComplete="off">
            <label>Name your Mixtail</label>
            <input
              type="text"
              name="name"
              placeholder="What's it called?"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <label>Add Cocktails</label>
            <select
              name="cocktails"
              defaultValue={"DEFAULT"}
              onChange={this.handleChange}
            >
              <option value="DEFAULT" disabled>
                Choose a cocktail...
              </option>
              {this.state.allCocktails.map((cocktail) => (
                <option key={cocktail._id} value={cocktail._id}>
                  {cocktail.name}
                </option>
              ))}
            </select>
            <label>Add Moods</label>
            <select
              name="moods"
              defaultValue={"DEFAULT"}
              onChange={this.handleChange}
            >
              <option value="DEFAULT" disabled>
                Choose a mood...
              </option>
              {this.state.allMoods.map((mood) => (
                <option key={mood._id} value={mood._id}>
                  {mood.content}
                </option>
              ))}
            </select>
            <label>Add a playlist link</label>
            <input
              type="text"
              name="playlist"
              placeholder="Where this track at?"
              onChange={this.handleChange}
              value={this.state.playlist}
            />
            <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
