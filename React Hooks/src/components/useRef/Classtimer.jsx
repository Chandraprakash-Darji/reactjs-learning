import React, { Component } from "react";

class Classtimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <div>Classtimer - {this.state.timer}</div>
        <button onClick={() => clearInterval(this.interval)}>
          Clear Timer
        </button>
      </>
    );
  }
}

export default Classtimer;
