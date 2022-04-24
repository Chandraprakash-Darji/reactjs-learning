import React, { Component } from "react";
import FRInout from "./FRInout";

class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler=()=>{
      this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <FRInout ref={this.inputRef} />
        <button onClick={this.clickHandler} >Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
