import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./redux/redux-store";
import {
    buttonIncAC, buttonResetAC, buttonSetSettingsAC, CounterStateType,
    inputMaxValueDownAC, inputMaxValueUpAC, inputStartValueDownAC,
    inputStartValueUpAC
} from "./redux/counterReducer";





function App() {

    const state = useSelector<AppStoreType, CounterStateType>(state => state.state)
    const dispatch = useDispatch()



    const buttonInc = useCallback(() => {
        dispatch(buttonIncAC(state.valueCounter))
    }, [state.valueCounter])

    const buttonReset = useCallback(() => {
        dispatch(buttonResetAC())
    }, [])


    const inputStartValueUp = useCallback(() => {
        dispatch (inputStartValueUpAC(state.startValueInput))
    }, [state.startValueInput])
    const inputStartValueDown = useCallback(() => {
        dispatch (inputStartValueDownAC(state.startValueInput))
    }, [state.startValueInput])

    // const inputOnChangeStartValue = useCallback(() => {
    //     dispatch (inputOnChangeStartValueAC(state.startValueInput))
    // }, [state.startValueInput])


    const inputMaxValueUp = useCallback(() => {
        dispatch (inputMaxValueUpAC(state.maxValueInput))
    }, [state.maxValueInput])
    const inputMaxValueDown = useCallback(() => {
        dispatch (inputMaxValueDownAC(state.maxValueInput))
    }, [state.maxValueInput])


    const buttonSetSettings = useCallback(() => {
        dispatch(buttonSetSettingsAC())
    },[])

    return (

    <div className="App">
        <Counter
            state={state}
            buttonInc={buttonInc}
            buttonReset={buttonReset}
        />
        <Settings
            state={state}
            inputStartValueUp={inputStartValueUp}
            inputStartValueDown={inputStartValueDown}
            inputMaxValueUp={inputMaxValueUp}
            inputMaxValueDown={inputMaxValueDown}
            buttonSetSettings={buttonSetSettings}
        />
    </div>
  );
}

export default App
