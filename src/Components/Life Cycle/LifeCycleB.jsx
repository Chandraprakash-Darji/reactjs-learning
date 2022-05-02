import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };

    console.log("LifeCycle B Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecylce B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecylce B componentDidMount");
    return true;
  }
  shouldComponentUpdate() {
    console.log("Lifecylce B shouldComponentUpdate");
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log("Lifecylce B getSnapshotBeforeUpdate");
    return null
  }
  componentDidUpdate() {
    console.log("Lifecylce B componentDidUpdate");
  }

  render() {
    console.log("Lifecycle B Render");
    return <h2>Life Cycle A</h2>;
  }
}

export default LifeCycleB;
