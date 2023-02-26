import React from "react";

let BUTTON_INC = 'BUTTON_INC';
let BUTTON_RESET = 'BUTTON_RESET';

let INPUT_START_VALUE_UP = 'INPUT_START_VALUE_UP';
let INPUT_START_VALUE_DOWN = 'INPUT_START_VALUE_DOWN';


let INPUT_MAX_VALUE_UP = 'INPUT_MAX_VALUE_UP';
let INPUT_MAX_VALUE_DOWN = 'INPUT_MAX_VALUE_DOWN';
let BUTTON_SET_SETTINGS = 'BUTTON_SET_SETTINGS';


type ButtonIncACType = {
    type: typeof BUTTON_INC,
    valueCounter: number
}
type ButtonResetACType = {
    type: 'BUTTON_RESET'
}
type InputStartValueUpACType = {
    type: 'INPUT_START_VALUE_UP',
    startValueInput: number
}
type InputStartValueDownACType = {
    type: 'INPUT_START_VALUE_DOWN',
    startValueInput: number
}
type inputMaxValueUpACType = {
    type: 'INPUT_MAX_VALUE_DOWN',
    maxValueInput: number
}
type inputMaxValueDownACType =  {
    type: 'INPUT_MAX_VALUE_DOWN',
    maxValueInput: number
}
type buttonSetSettingsACType =  {
    type: ' BUTTON_SET_SETTINGS'
}

type ActionType =
    ReturnType<typeof buttonIncAC>
    & ReturnType<typeof buttonResetAC>
    & ReturnType<typeof inputStartValueUpAC>
    & ReturnType<typeof inputStartValueDownAC>
    & ReturnType<typeof inputMaxValueUpAC>
    & ReturnType<typeof buttonSetSettingsAC>

    //| InputStartValueDownACType
    //| inputMaxValueDownACType
    //| inputMaxValueUpACType
    //| buttonSetSettingsACType

export type CounterStateType = {
    startValue: number,
    startValueInput: number,
    maxValue: number,
    maxValueInput: number,
    valueCounter: number,
    counterIsMax: boolean,
    errorInputValue: boolean
}

const initialState = {
    startValue: 0,
    startValueInput: 0,
    maxValue: 3,
    maxValueInput: 1,
    valueCounter: 0,
    counterIsMax: false,
    errorInputValue: false
}

const counterReducer = (state = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case BUTTON_INC: {
            return (state.valueCounter !== state.maxValue) ? {
                ...state,
                valueCounter: (action.valueCounter + 1),
                counterIsMax: (state.valueCounter + 1 == state.maxValue)
            } : {
                ...state,
                counterIsMax: true
            }
        }
        case BUTTON_RESET: {
            return {
                ...state,
                valueCounter: state.startValue,
                counterIsMax: false
            }
        }
        case INPUT_START_VALUE_UP: {
            return {
                ...state,
                startValueInput: action.startValueInput + 1,
                errorInputValue: (state.maxValueInput <= action.startValueInput + 1 || action.startValueInput + 1 < 0)
            }
        }
        case INPUT_START_VALUE_DOWN: {
            return {
                ...state,
                startValueInput: action.startValueInput - 1,
                errorInputValue: (state.maxValueInput <= action.startValueInput - 1 || action.startValueInput - 1 < 0)
            }
        }
        case INPUT_MAX_VALUE_UP: {
            return {
                ...state,
                maxValueInput: action.maxValueInput + 1,
                errorInputValue: (action.maxValueInput + 1 <= state.startValueInput || action.maxValueInput + 1 < 0)
            }
        }
        case INPUT_MAX_VALUE_DOWN: {
            return {
                ...state,
                maxValueInput: action.maxValueInput-1,
                errorInputValue: (action.maxValueInput-1 <= state.startValueInput || action.maxValueInput-1 < 0)
            }
        }
        case BUTTON_SET_SETTINGS: {
            return {
                ...state,
                startValue: state.startValueInput,
                maxValue: state.maxValueInput,
                valueCounter: state.startValueInput
            }
        }
        default:
            return state

    }

}

export const buttonIncAC = (valueCounter: number) => {
    return {
        type: BUTTON_INC,
        valueCounter} as const}
export const buttonResetAC = () => {
    return {
        type: BUTTON_RESET
    } as const
}
export const inputStartValueUpAC = (startValueInput: number) => {
    return {
        type: INPUT_START_VALUE_UP,
        startValueInput
    }
}
export const inputStartValueDownAC = (startValueInput: number) => {
    return {
        type: INPUT_START_VALUE_DOWN,
        startValueInput
    }
}
export const inputMaxValueUpAC = (maxValueInput: number) => {
    return {
        type: INPUT_MAX_VALUE_UP,
        maxValueInput
    }}
export const inputMaxValueDownAC = (maxValueInput: number) => {
    return {
        type: INPUT_MAX_VALUE_DOWN,
        maxValueInput
    }}
export const buttonSetSettingsAC = () => {return {type: BUTTON_SET_SETTINGS}}


export default counterReducer

