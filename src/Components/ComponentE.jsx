import ComponetF from "./ComponentF";
import UserContext from "./userContext";

import React, { Component } from "react";

class ComponentE extends Component {
  render() {
    return (
      <>
        Coponent E context {this.context}
        <ComponetF />
      </>
    );
  }
}

ComponentE.contextType = UserContext;

export default ComponentE;
