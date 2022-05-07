import { Component } from "react";

type CounterState = {
  count: number;
};

type CounterProps = {
  message: string;
};

export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default Counter;
