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
                            valueInput={props.startValue}
                            setValue={props.setStartValue}
                        />
                        <InputNumberCounter
                            nameValue={'MAX'}
                            valueInput={props.maxValue}
                            setValue={props.setMaxValue}
                        />

                    <div className={s.settingsButtonWrapper}>

                        <Button nameButton={'SET'}
                                onClickSetSettings={props.onClickSetSettings}/>
                    </div>
                </div>
            </div>
    );
}
export default Settings