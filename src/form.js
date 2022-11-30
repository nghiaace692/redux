import React, { useState } from "react";
import { addName } from "./Action";
import { connect } from "react-redux";
function Form(props) {
    console.log("form", props);

    const [name, setName] = useState("");
    const handleChange = e => {
        setName(e.target.value);
    };
    return (
        <div>
            <input type="text" onChange={handleChange} value={name} />
            <button onClick={() => props.addName(name)}>ADD</button>
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
    { addName }
)(Form);
