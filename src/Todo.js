import React from "react";
import { connect } from "react-redux";
import { toggle } from "./Action";
function Todo(props) {
    console.log("todo", props);
    return (
        <div onClick={props.toggle} className={props.todo.completed ? "cross" : ""}>
            {props.todo.name}
        </div>
    );
}
const mstp = state => {
    return {
        state: state.item
    };
};
export default connect(
    mstp,
    { toggle }
)(Todo);
