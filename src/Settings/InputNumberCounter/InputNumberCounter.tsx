import s from "./InputNumberCounter.module.css";
import Button from "../../Button/Button";
import React from "react";

function InputNumberCounter() {
    return (
        <div>
            <input className={s.input}/>
            <div className={s.switch}>+</div>
            <div className={s.switch}>-</div>
        </div>
    );
}
export default InputNumberCounter