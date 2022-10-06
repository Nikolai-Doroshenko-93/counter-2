import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";


export function App() {

    const [startValue, setStartValue] = useState<any>(0);
    const [maxValue, setMaxValue] = useState<any>(0)

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

  return (
    <div className="App">
        <Counter
            startValue={startValue}
        />
        <Settings
            //@ts-ignore
            startValue={startValue}
            setStartValue={setStartValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
        />
    </div>
  );
}

export default App
