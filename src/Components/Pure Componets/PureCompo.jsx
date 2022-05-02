import React, { PureComponent } from "react";

export class PureCompo extends PureComponent {
  // ReRender will only happen when state or prop is changed
  // if Parent not render the child will also not re render 
  // Pure Component check for the reference so not mututate it
  render() {
    console.log(" Pure Compo ");
    return <div>PureCompo {this.props.name}</div>;
  }
}

export default PureCompo;
