import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    return (
      <div>
        Welcome By Class {name} a.k.a {heroName}
      </div>
    );
  }
}
