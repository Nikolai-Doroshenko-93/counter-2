import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    nameButton: string
}

function Button(props: ButtonPropsType) {
    return (
        <div>
            <div className={s.buttonWrapper}>
                    <span className={s.buttonName}>{props.nameButton}</span>
            </div>
        </div>
    );
}
export default Button