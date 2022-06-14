import { Component, useState } from "react";
import CocktailList from "../CocktailList/CocktailList";
import style from "./FlavourListItem.module.css";

export default class FlavourListItem extends Component {
  state = {
    showCocktails: false,
  };
  render() {
    return (
      <div>
        <div>
          <h3
            className={style.flavour}
            onClick={() =>
              this.setState({ showCocktails: !this.state.showCocktails })
            }
          >
            {this.props.content}
          </h3>
          {this.state.showCocktails ? <CocktailList cocktails={this.props.cocktails}/> : <></>}
        </div>
      </div>
    );
  }
}
