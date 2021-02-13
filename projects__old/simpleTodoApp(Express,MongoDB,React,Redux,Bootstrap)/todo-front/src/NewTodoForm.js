import React, { Component } from "react";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      task: ""
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.task);
    e.target.reset();
    this.props.history.push("/todos");
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} id="form" className="bg-white rounded px-4 py-3 mb-4 shadow-sm">
          <div class="form-group">
            <label htmlFor="task" className="mb-2">Add todo</label>
            <input type="text" name="task" id="task" className="form-control" id="addTodo" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-secondary mt-2 elementLeft">Submit</button>
        </form>
      </>
    );
  }
}
