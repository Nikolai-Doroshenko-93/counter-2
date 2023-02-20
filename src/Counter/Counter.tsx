import React, {useState} from "react";
import Button from "../Button/Button";
import s from "./Counter.module.css"

// type CounterPropsType = {
//     startValue: number
// }



function Counter(props: any) {
    return (

        <div className={s.counterWrapper}>
            <div className={s.counterValueWrapper}>
                <span className={!props.state.counterIsMax ? s.counterValue : s.counterValueIsMax}>
                    {props.state.valueCounter}
                </span>
            </div>
            <div className={s.buttonWrapper}>
                <Button nameButton={'INC'}
                        buttonInc={props.buttonInc}

                />
                <Button nameButton={'RESET'}
                        buttonReset={props.buttonReset}
                />
            </div>
        </div>
    );
}

export default Counter