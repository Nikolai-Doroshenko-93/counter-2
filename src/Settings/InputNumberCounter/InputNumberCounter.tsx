import s from "./InputNumberCounter.module.css";
import Button from "../../Button/Button";
import React, {ChangeEvent, useState} from "react";



export function InputNumberCounter(props: any) {


    return (
        <div className={s.wrapper}>
            <div className={s.valueWrapper}>
                <input className={s.input}

                ></input>
            </div>
            <div className={s.nameValue}>{props.nameValue}</div>
            <div>
                <div className={s.switch}

                >&#5169;</div>
                <div className={s.switch}

                >&#5167;</div>
            </div>
        </div>
    );
}
