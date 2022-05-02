import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class ClassClick extends Component {
  handleClick() {
    console.log("Button Click");
  }

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default UpdatedComponent(ClassClick);
