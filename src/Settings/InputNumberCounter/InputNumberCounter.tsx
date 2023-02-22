import s from "./InputNumberCounter.module.css";
import Button from "../../Button/Button";
import React, {ChangeEvent, useState} from "react";



export function InputNumberCounter(props: any) {

    // const [value, setValue] = useState(props.value)
    //
    // const onChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return (
        <div className={s.wrapper}>
            <div className={props.errorInputValue ? s.valueWrapperWithError: s.valueWrapper}>
                <input className={s.input}
                       value={props.value}
                       // onChange={onChangeValueInput}
                ></input>
            </div>
            <div className={s.nameValue}>{props.nameValue}</div>
            <div>
                <div
                    className={s.switch}
                    onClick={props.upNumber}
                >&#5169;</div>
                <div
                    className={s.switch}
                    onClick={props.downNumber}
                >&#5167;</div>
            </div>
        </div>
    );
}
