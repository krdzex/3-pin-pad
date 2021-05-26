import React from 'react';

const Buttons = (props) => {

    return (
        < div className="buttons">
            <button disabled={props.disableButton} value="1" onClick={props.clickHandle}>1</button>
            <button disabled={props.disableButton} value="2" onClick={props.clickHandle}>2</button>
            <button disabled={props.disableButton} value="3" onClick={props.clickHandle}>3</button>
            <button disabled={props.disableButton} value="4" onClick={props.clickHandle}>4</button>
            <button disabled={props.disableButton} value="5" onClick={props.clickHandle}>5</button>
            <button disabled={props.disableButton} value="6" onClick={props.clickHandle}>6</button>
            <button disabled={props.disableButton} value="7" onClick={props.clickHandle}>7</button>
            <button disabled={props.disableButton} value="8" onClick={props.clickHandle}>8</button>
            <button disabled={props.disableButton} value="9" onClick={props.clickHandle}>9</button>
            <button disabled={props.disableButton} onClick={props.clear} id="clear">clear</button>
            <button disabled={props.disableButton} value="0" onClick={props.clickHandle}>0</button>
            <button disabled={props.disableButton} id="enter" onClick={props.isPasswordGood}>enter</button>
        </div >
    );
};

export default Buttons;