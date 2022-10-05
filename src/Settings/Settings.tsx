import React from "react";
import Button from "../Button/Button";
import s from "./Settings.module.css"
import InputNumberCounter from "./InputNumberCounter/InputNumberCounter";


function Settings(props: any) {
    return (
        <div>
            <div className={s.settingsWrapper}>
                <InputNumberCounter
                   value={props.startValue}
                   setValue={props.setStartValue}
                />
                <InputNumberCounter
                    value={props.maxValue}
                    setValue={props.setMaxValue}
                />
                <Button/>
                <Button/>
            </div>

        </div>
    );
}
export default Settings