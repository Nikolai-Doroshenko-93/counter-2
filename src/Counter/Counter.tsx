import React from "react";
import Button from "../Button/Button";
import s from "./Counter.module.css"

function Counter() {
    return (
        <div className={s.counterWrapper}>
            <div className={s.counterValueWrapper}>
                <span className={s.counterValue}>5</span>
            </div>
            <Button/>
            <Button/>
        </div>
    );
}
export default Counter