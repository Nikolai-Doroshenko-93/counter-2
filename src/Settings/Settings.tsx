import React from "react";
import Button from "../Button/Button";
import s from "./Settings.module.css"
import InputNumberCounter from "./InputNumberCounter/InputNumberCounter";

function Settings() {
    return (
        <div>
            <div className={s.settingsWrapper}>
                <InputNumberCounter/>
                <InputNumberCounter/>
                <Button/>
                <Button/>
            </div>

        </div>
    );
}
export default Settings