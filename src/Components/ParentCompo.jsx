import React, { Component } from "react";
import MemoCompo from "./MemoCompo";
// import PureCompo from "./PureCompo";
// import RegularComponent from "./RegularComponent";

class ParentCompo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "rega",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "rega",
      });
    }, 2000);
  }

  render() {
    console.log("****************** Parent Compo ******************");
    return (
      <div>
        ParentCompo
        {/* <RegularComponent name={this.state.name} /> */}
        {/* <PureCompo name={this.state.name} /> */}
        <MemoCompo name={this.state.name} />
      </div>
    );
  }
}

export default ParentCompo;
