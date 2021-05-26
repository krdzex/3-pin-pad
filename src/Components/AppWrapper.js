import React, { useState } from 'react';
import Buttons from "./Buttons";
import Input from "./Input"

const AppWrapper = () => {
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
            }, 30000);
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
                setResult("" + e.target.value);
            } else if (result === "LOCKED") {
                clear();
                setResult("" + e.target.value);
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
            <Input result={result} inputType={inputType} />
            <Buttons clickHandle={clickHandle} disableButton={disableButton} isPasswordGood={isPasswordGood} clear={clear} />
        </div >
    );
};

export default AppWrapper;