import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./redux/redux-store";


type CounterStateType = {
    startValue: number,
    startValueInput: number,
    maxValue: number,
    maxValueInput: number,
    valueCounter: number
}


function App() {

    const counterState = useSelector<AppStoreType, CounterStateType>(state => state.counterState)
    const dispatch = useDispatch()

  return (

    <div className="App">
        <Counter

        />
        <Settings

        />
    </div>
  );
}

export default App
