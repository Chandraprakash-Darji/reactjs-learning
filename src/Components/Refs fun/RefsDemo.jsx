import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => (this.cbRef = element);
  }
  componentDidMount() {
    if (this.cbRef) this.cbRef.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
      </div>
    );
  }
}

export default RefsDemo;
