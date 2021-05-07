import React, { useState } from "react";
import "./App.css";



const App = () => {
  let goodPassword = "1234";
  const [inputType, setInput] = useState("password");
  const [tries] = useState(
    {
      no: 0,
    });
  const [disableButton, setDisableButton] = useState(
    false
  );
  const isPasswordGood = () => {
    if (result === goodPassword) {
      setResult("OK");
      setDisableButton(true);
      setInput("text");
      return true;
    }
    setInput("text");
    setResult("ERROR");
    tries.no = tries.no + 1;
    if (tries.no === 3) {
      setInput("text");
      setResult("LOCKED")
      setDisableButton(true);
      setTimeout(() => {
        setDisableButton(false)
      }, 3000);

    }
    if (tries.no > 3) {
      tries.no = 1;
    }
    return false;
  }
  const [result, setResult] = useState("");
  const clickHandle = (e) => {
    if (result.length < 4 || result === "ERROR" || result === "LOCKED") {
      if (result === "ERROR") {
        clear();
      } else if (result === "LOCKED") {
        clear();
      } else {
        setResult(result + e.target.value);
      }
    }
  }

  const clear = () => {
    setResult("");
    setInput("password");
  }

  return (
    <div className="pin-app-wrapper">
      <div className="result">
        <input value={result} type={inputType} disabled></input>
      </div>
      <div className="buttons">
        <button disabled={disableButton} value="1" onClick={clickHandle}>1</button>
        <button disabled={disableButton} value="2" onClick={clickHandle}>2</button>
        <button disabled={disableButton} value="3" onClick={clickHandle}>3</button>
        <button disabled={disableButton} value="4" onClick={clickHandle}>4</button>
        <button disabled={disableButton} value="5" onClick={clickHandle}>5</button>
        <button disabled={disableButton} value="6" onClick={clickHandle}>6</button>
        <button disabled={disableButton} value="7" onClick={clickHandle}>7</button>
        <button disabled={disableButton} value="8" onClick={clickHandle}>8</button>
        <button disabled={disableButton} value="9" onClick={clickHandle}>9</button>
        <button disabled={disableButton} onClick={clear} id="clear">clear</button>
        <button disabled={disableButton} value="0" onClick={clickHandle}>0</button>
        <button disabled={disableButton} id="enter" onClick={isPasswordGood}>enter</button>
      </div >
    </div >)
}

export default App;