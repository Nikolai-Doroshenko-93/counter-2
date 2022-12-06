import s from "./InputNumberCounter.module.css";
import Button from "../../Button/Button";
import React, {ChangeEvent, useState} from "react";



export function InputNumberCounter(props: any) {
    // const onClickHandlerUp = () => {
    //     props.setValue(Number(props.valueInput) + 1)
    // }
    // const onClickHandlerDown = () => {
    //     props.setValue(props.valueInput - 1)
    // }
    // const onChangeHandler= (e: ChangeEvent<HTMLInputElement>) => {
    //     let currentValue = e.currentTarget.value
    //     props.setValue(currentValue)
    //     console.log(currentValue)
    // }
    return (
        <div className={s.wrapper}>
            <div className={s.valueWrapper}>
                <input className={s.input}
                       // value={props.valueInput}
                       // onChange={onChangeHandler}
                ></input>
            </div>
            <div className={s.nameValue}>{props.nameValue}</div>
            <div>
                <div className={s.switch}
                     // onClick={onClickHandlerUp}
                >&#5169;</div>
                <div className={s.switch}
                     // onClick={onClickHandlerDown}
                >&#5167;</div>
            </div>
        </div>
    );
}
