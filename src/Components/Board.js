import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  render() {
    return (
      <>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </>
    );
  }
}
