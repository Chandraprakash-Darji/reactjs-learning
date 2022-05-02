import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      message: "Good Bye",
    });
  }

  clickHandler = () => {
    this.setState({
      message: "Good Bye",
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        {/* Perfomace Issue */}
        <button onClick={this.handleClick.bind(this)}>Click Me .bind</button>
        {/* Similler to First */}
        <button onClick={() => this.handleClick()}>
          Click Me arrow in click
        </button>
        {/* Recommended  By React*/}
        <button onClick={this.handleClick}>Click Me contruct Bind</button>
        {/* Expiremental Recommended*/}
        <button onClick={this.clickHandler}>Click Me arrow</button>
      </>
    );
  }
}

export default EventBind;
