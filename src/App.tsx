import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./redux/redux-store";
import {
    buttonIncAC,
    buttonResetAC, buttonSetSettingsAC, inputMaxValueDownAC,
    inputMaxValueUpAC,
    inputStartValueDownAC,
    inputStartValueUpAC
} from "./redux/counterReducer";


type CounterStateType = {
    startValue: number,
    startValueInput: number,
    maxValue: number,
    maxValueInput: number,
    valueCounter: number
}


function App() {

    const state = useSelector<AppStoreType, CounterStateType>(state => state.state)
    const dispatch = useDispatch()

    // const buttonInc = dispatch(buttonIncAC())
    // const buttonReset = dispatch(buttonResetAC())
    // const inputStartValueUp = dispatch (inputStartValueUpAC())
    // const inputStartValueDown = dispatch(inputStartValueDownAC())
    // const inputMaxValueUp = dispatch(inputMaxValueUpAC())
    // const inputMaxValueDown = dispatch(inputMaxValueDownAC())
    // const buttonSetSettings = dispatch(buttonSetSettingsAC())

    return (

    <div className="App">
        <Counter
            state={state}
            // buttonInc={buttonInc}
            // buttonReset={buttonReset}
        />
        <Settings
            state={state}
            // inputStartValueUp={inputStartValueUp}
            // inputStartValueDown={inputStartValueDown}
            // inputMaxValueUp={inputMaxValueUp}
            // inputMaxValueDown={inputMaxValueDown}
            // buttonSetSettings={buttonSetSettings}
        />
    </div>
  );
}

export default App
