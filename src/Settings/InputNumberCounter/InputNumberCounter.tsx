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
        <div>
            <div className={s.value}>
                <span>{props.value}</span>
            </div>
            <div className={s.switch} onClick={onClickHandlerUp}>+</div>
            <div className={s.switch} onClick={onClickHandlerDown}>-</div>
        </div>
    );
}
export default InputNumberCounter