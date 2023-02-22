import React, {useState} from "react";
import Button from "../Button/Button";
import s from "./Settings.module.css"
import {InputNumberCounter} from "./InputNumberCounter/InputNumberCounter";





export function Settings(props: any) {

const [error, setError] = useState(false)

    return (
            <div className={s.settingsWrapper}>
                <div className={s.content}>
                        <InputNumberCounter
                            nameValue={'START'}
                            value={props.state.startValueInput}
                            upNumber={props.inputStartValueUp}
                            downNumber={props.inputStartValueDown}
                            inputOnChange={props.inputOnChangeStartValue}
                            errorInputValue={props.state.errorInputValue}
                        />
                        <InputNumberCounter
                            nameValue={'MAX'}
                            value={props.state.maxValueInput}
                            upNumber={props.inputMaxValueUp}
                            downNumber={props.inputMaxValueDown}
                            errorInputValue={props.state.errorInputValue}
                        />

                    <div className={s.settingsButtonWrapper}>
                        <Button nameButton={'SET'}
                                buttonSetSettings={props.buttonSetSettings}
                                errorInputValue={props.state.errorInputValue}
                        />
                    </div>
                </div>
            </div>
    );
}
export default Settings