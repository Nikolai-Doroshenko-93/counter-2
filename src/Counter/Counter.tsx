import React from "react";
import Button from "../Button/Button";
import s from "./Counter.module.css"

type CounterPropsType = {
    startValue: number
}

function Counter(props: CounterPropsType) {
    return (
        <div className={s.counterWrapper}>
            <div className={s.counterValueWrapper}>
                <span className={s.counterValue}>6</span>
            </div>
            <div className={s.buttonWrapper}>
                <Button nameButton={'INC'}/>
                <Button nameButton={'RESET'}/>
            </div>
        </div>
    );
}
export default Counter