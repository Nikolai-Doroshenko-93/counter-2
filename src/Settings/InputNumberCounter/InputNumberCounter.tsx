import s from "./InputNumberCounter.module.css";
import Button from "../../Button/Button";
import React, {useState} from "react";



function InputNumberCounter(props: any) {
    const onClickHandlerUp = () => {
        props.setValue(props.value + 1)
    }
    const onClickHandlerDown = () => {
        props.setValue(props.value - 1)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.valueWrapper}>
                <input className={s.value} value={props.value}></input>
            </div>
            <div className={s.nameValue}>{props.nameValue}</div>
            <div>
                <div className={s.switch} onClick={onClickHandlerUp}>&#5169;</div>
                <div className={s.switch} onClick={onClickHandlerDown}>&#5167;</div>
            </div>
        </div>
    );
}
export default InputNumberCounter