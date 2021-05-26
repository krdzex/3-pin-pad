import React from 'react';

const Input = (props) => {
    return (
        <div className="result">
            <input style={props.result === "ERROR" ? { color: "red" } : props.result === "OK" ? { color: "green" } : props.result === "LOCKED" ? { color: "#56cbdb" } : { color: "white" }} value={props.result} type={props.inputType} disabled></input>
        </div>
    );
};

export default Input;