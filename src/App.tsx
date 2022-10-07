import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";


function App() {

    const [startValueSettings, setStartValueSettings] = useState<any>(0);
    const [maxValueSettings, setMaxValueSettings] = useState<any>(0)
    const [optionValueForCounter, setValueForCounter] = useState<any>({
        startValueCounter: 0,
        maxValueCounter: 0
    }
)
    const [counterValue, setCounterValue] = useState(optionValueForCounter.startValueCounter)

    const onClickSetSettings = () => {
        let valueForCounter = {
            startValueCounter: startValueSettings,
            maxValueCounter: maxValueSettings
    }
        setValueForCounter(valueForCounter)
        setCounterValue(valueForCounter.startValueCounter)
        console.log(valueForCounter)

    }
    // useEffect( () => {
    //         localStorage.setItem("startValue", JSON.stringify(startValue)),
    //         [startValue]
    // })
    // useEffect( () => {
    //     let startValueString = localStorage.getItem("startValue")
    //     if (startValueString) {
    //         let newStartValue = JSON.parse(startValueString)
    //         setStartValue(newStartValue)
    //     }
    // })

    // useEffect( () => {
    //     localStorage.setItem("maxValue", JSON.stringify(maxValue)),
    //         [maxValue]
    // })
    // useEffect( () => {
    //    let maxValueString = localStorage.getItem("maxValue")
    //     if (maxValueString) {
    //         let newMaxValue = JSON.parse(maxValueString)
    //         setMaxValue(newMaxValue)
    //     }
    // })
    const incValueButton = () => {
        setCounterValue( counterValue+1)
    }
    const resetValueButton = () => {
        setCounterValue(optionValueForCounter.startValueCounter)
    }
  return (

    <div className="App">
        <Counter
            counterValue={counterValue}
            incValueButton={incValueButton}
            resetValueButton={resetValueButton}
        />
        <Settings
            // //@ts-ignore
            startValue={startValueSettings}
            setStartValue={setStartValueSettings}
            maxValue={maxValueSettings}
            setMaxValue={setMaxValueSettings}
            onClickSetSettings={onClickSetSettings}
        />
    </div>
  );
}

export default App
