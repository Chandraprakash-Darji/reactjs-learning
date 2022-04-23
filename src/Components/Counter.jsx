import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  handleIncrement() {
      // Never Modify State directly

    // When not depended on Last State

    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log(this.state.count)
    // );

    // When the state is depended on last state
    this.setState((prevState,props) => ({ count:prevState.count + 1 }));
  }

  handleIncrementFive() {
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
    this.handleIncrement();
  }
  render() {
    return (
      <>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.handleIncrementFive()}>Increment</button>
      </>
    );
  }
}

export default Counter;
