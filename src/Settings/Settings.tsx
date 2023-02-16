import React, {useState} from "react";
import Button from "../Button/Button";
import s from "./Settings.module.css"
import {InputNumberCounter} from "./InputNumberCounter/InputNumberCounter";





export function Settings(props: any) {



    return (
            <div className={s.settingsWrapper}>
                <div className={s.content}>
                        <InputNumberCounter
                            nameValue={'START'}
                            value={props.state.startValueInput}
                            // upNumber={props.inputStartValueUp}
                            // downNumber={props.inputStartValueDown}
                        />
                        <InputNumberCounter
                            nameValue={'MAX'}
                            value={props.state.maxValueInput}
                            // upNumber={props.inputMaxValueUp}
                            // downNumber={props.inputMaxValueDown}
                        />

                    <div className={s.settingsButtonWrapper}>
                        <Button nameButton={'SET'}
                                // onClickSetSettings={props.onClickSetSettings}
                        />
                    </div>
                </div>
            </div>
    );
}
export default Settings