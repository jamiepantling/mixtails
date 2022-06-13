import { Component, useState } from "react";
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
          {this.state.showCocktails ? <div>Cocktails with said mood</div> : <></>}
        </div>
      </div>
    );
  }
}
