import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }
  // 1. By IF - ELSE Method
  //   render() {
  //     if (this.state.isLogged) return <h1>Welcome Rega</h1>;
  //     else return <h2>Welcome Guest</h2>;
  //   }

  // 2. By Variable
  //   render() {
  //     let message = "Guest";
  //     if (this.state.isLogged) message = "Rega";
  //     return <h1>Welcome {message}</h1>;
  //   }

  // 3. Ternery Operator
  //   render() {
  //     return <h1>Welcome {this.state.isLogged ? "Rega" : "Guest"}</h1>;
  //   }

  // Short Ciruit Approch
  render() {
    // this.state.isLogged if TRUE then Render else NOT
    return this.state.isLogged && <h1>Welcome Rega</h1>;
  }
}

export default UserGreeting;
