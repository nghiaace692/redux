import React from "react";
import "./styles.css";
import Form from "./form";
import TodoList from "./TodoList";
import { connect } from "react-redux";
function App(props) {
  console.log("APP", props);
  return (
      <div className="App">
        <h1>Hello Todo List</h1>
        <Form />
        <TodoList item={props.item} />
      </div>
  );
}
const mstp = state => {
  return {
    item: state.item
  };
};
export default connect(
    mstp,
    {}
)(App);
