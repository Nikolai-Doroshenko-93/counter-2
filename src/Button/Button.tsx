import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    nameButton: string
}

function Button(props: any) {
    const buttonOptions = (nameButton: string) => {
        if (props.nameButton === 'SET') {
            props.buttonSetSettings()
        } else if (props.nameButton === 'INC') {
            props.buttonInc()
        } else if (props.nameButton === 'RESET') {
            props.buttonReset()
        }
    }
    return (
        <div>
            <div className={s.buttonWrapper} onClick={() => buttonOptions(props.nameButton)}>
                    <span className={s.buttonName}>{props.nameButton}</span>
            </div>
        </div>
    );
}
export default Button