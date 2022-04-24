import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      topic: "react",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();         
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="username"
            id="userName"
            value={username}
            placeholder="Enter Username"
            style={{ marginLeft: "10px" }}
            onChange={this.handleUsernameChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="comments">Comments</label>
          <textarea
            name="comment"
            id="comments"
            cols="30"
            rows="4"
            value={comments}
            style={{ marginLeft: "10px" }}
            onChange={this.handleCommentsChange}
          ></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="topic">Topic</label>
          <select
            name="topic"
            id="topic"
            value={topic}
            style={{ marginLeft: "10px" }}
            onChange={this.handleTopicChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </fieldset>

        <fieldset style={{ textAlign: "center" }}>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
