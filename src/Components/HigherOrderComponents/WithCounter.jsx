import React from "react";

const withCounter = (WrappedComponent,incrementCount) => {
  class withCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementCount };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.handleCount}
          {...this.props}
        />
      );
    }
  }
  return withCounter;
};

export default withCounter;
