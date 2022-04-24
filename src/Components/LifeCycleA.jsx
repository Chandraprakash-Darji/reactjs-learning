import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
    this.handleChangeState = this.handleChangeState.bind(this);
    console.log("LifeCycle A Constructor");
  }
 
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCylce A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCylce A componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("Lifecylce A shouldComponentUpdate");
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log("Lifecylce A getSnapshotBeforeUpdate");
    return null
  }
  componentDidUpdate() {
    console.log("Lifecylce A componentDidUpdate");
  }

  handleChangeState() {
    this.setState({
      name: "Rega",
    });
  }

  render() {
    console.log("Lifecycle A Render");
    return (
      <>
        <h2>Life Cycle A - {this.state.name}</h2>
        <button onClick={this.handleChangeState}>Change State</button>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;
