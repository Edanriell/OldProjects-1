import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="mb-5 mt-4">Simple todo app with React</h1>
        <div className="btn-group elementLeftText mt-5" role="group" aria-label="Basic example">
          <a href="/todos" type="button" class="btn btn-secondary">See my todos!</a>
          <a href="/todos/new" type="button" class="btn btn-secondary">Add a todo!</a>
        </div>
        <Route path="/todos" component={TodoList} />
      </div>
    );
  }
}

export default App;
