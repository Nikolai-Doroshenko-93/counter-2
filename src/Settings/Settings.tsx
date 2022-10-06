import React, {useState} from "react";
import Button from "../Button/Button";
import s from "./Settings.module.css"
import InputNumberCounter from "./InputNumberCounter/InputNumberCounter";


function Settings(props: any) {
    const [startValue, setStartValue] = useState<any>(0);
    const [maxValue, setMaxValue] = useState<any>(0)
    return (
        <div>
            <div className={s.settingsWrapper}>
                <div className={s.content}>

                        <InputNumberCounter
                            nameValue={'START'}
                            value={startValue}
                            setValue={setStartValue}
                        />
                        <InputNumberCounter
                            nameValue={'MAX'}
                            value={maxValue}
                            setValue={setMaxValue}
                        />

                    <div className={s.settingsButtonWrapper}>
                        <Button nameButton={'SET'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Settings