import React, { Component } from "react";

class ClassClick extends Component {
  handleClick() {
    console.log("Button Click");
  }
 
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default ClassClick;
