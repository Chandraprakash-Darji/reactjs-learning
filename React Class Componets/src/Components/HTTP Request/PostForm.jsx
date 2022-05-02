import axios from "axios";
import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandle = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .then((error) => {
        console.error(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandle}>
          <fieldset>
            <input
              type="text"
              name="userId"
              placeholder="userID"
              value={userId}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              name="body"
              placeholder="body"
              value={body}
              onChange={this.handleChange}
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
