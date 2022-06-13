import { Component, useState } from "react";
import style from "./MoodListItem.module.css";

export default class MoodListItem extends Component {
  state = {
    showMixtapes: false,
  };
  render() {
    return (
      <div>
        <div>
          <h2
            className={style.mood}
            onClick={() =>
              this.setState({ showMixtapes: !this.state.showMixtapes })
            }
          >
            {this.props.content}
          </h2>
          {this.state.showMixtapes ? <div>Mixtapes with said mood</div> : <></>}
        </div>
      </div>
    );
  }
}
