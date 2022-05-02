import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    return (
      <h1 onMouseOver={this.props.incrementCount}>
        Hovered {this.props.count} times
      </h1>
    ); 
  }
}

export default HoverCounterTwo;
