import React from "react";
import ToDo from "./Todo";
export default function TodoList(props) {
    console.log("todolist", props);
    return (
        <div>
            <h3>Todo list name:</h3>
            {props.item.map((e, index) => (
                <div key={index}>
                    <ToDo todo={e} />
                </div>
            ))}
        </div>
    );
}
