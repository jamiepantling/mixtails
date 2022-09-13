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
      const newMixtape = await mixtapesAPI.createMixtape({
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
    this.props.setShowMixtapeForm(false)
    this.props.fetchMixtapes()
  };

  render() {
    return (
      <div className={style.container}>
        <h2>New mixtail</h2>
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
            <label>Add a cocktail</label>
            <select
              name="cocktails"
              defaultValue={"DEFAULT"}
              onChange={this.handleChange}
            >
              <option value="DEFAULT" disabled>
                Choose a cocktail...
              </option>
              {this.state.allCocktails.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((cocktail) => (
                <option key={cocktail._id} value={cocktail._id}>
                  {cocktail.name}
                </option>
              ))}
            </select>
            <label>Add a mood</label>
            <select
              name="moods"
              defaultValue={"DEFAULT"}
              onChange={this.handleChange}
            >
              <option value="DEFAULT" disabled>
                Choose a mood...
              </option>
              {this.state.allMoods.sort((a,b) => (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)).map((mood) => (
                <option key={mood._id} value={mood._id}>
                  {mood.content}
                </option>
              ))}
            </select>
            <label>Add a playlist link</label>
            <input
              type="text"
              name="playlist"
              placeholder="https://..."
              onChange={this.handleChange}
              value={this.state.playlist}
            />
            <br/>
            <button className={style.button} type="submit"><span>Submit</span></button>
          </form>
        </div>
      </div>
    );
  }
}
