import React from "react";
import Button from "../Button/Button";
import s from "./Counter.module.css"

// type CounterPropsType = {
//     startValue: number
// }



function Counter(props: any) {
    return (
        <div className={s.counterWrapper}>
            <div className={s.counterValueWrapper}>
                <span className={s.counterValue}>{props.counterValue}</span>
            </div>
            <div className={s.buttonWrapper}>
                <Button nameButton={'INC'}
                        // incValueButton={props.incValueButton}
                />
                <Button nameButton={'RESET'}
                        // resetValueButton={props.resetValueButton}
                />
            </div>
        </div>
    );
}

export default Counter