import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    nameButton: string
}



function Button(props: any) {
    const buttonOptions = () => {
        if (props.nameButton === 'SET') {
            props.onClickSetSettings()
        } else if (props.nameButton === 'INC') {
            props.incValueButton()
        } else if (props.nameButton === 'RESET') {
            props.resetValueButton()
        }
    }
    return (
        <div>
            <div className={s.buttonWrapper} onClick={buttonOptions}>
                    <span className={s.buttonName}>{props.nameButton}</span>
            </div>
        </div>
    );
}
export default Button