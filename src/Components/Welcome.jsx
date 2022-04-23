import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
      <div>Welcome By Class  {this.props.name} a.k.a {this.props.heroName}</div>
    )
  }
}
