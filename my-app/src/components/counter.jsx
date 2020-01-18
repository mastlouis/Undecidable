import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

  myfunction() {
    console.log("CLICKED");
  }
  render() {
    return (
      <div>
        <button onClick={this.myfunction}>test </button>
        <button onclick={this.myfunction}>test </button>
        <button onClick={this.myfunction}>test </button>
        <button onClick={this.myfunction}>test </button>
      </div>
    );
  }
}

export default Counter;
