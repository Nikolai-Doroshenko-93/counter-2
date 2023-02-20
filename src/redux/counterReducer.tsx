import React from "react";

let BUTTON_INC = 'BUTTON_INC';
let BUTTON_RESET = 'BUTTON_RESET';

let INPUT_START_VALUE_UP = 'INPUT_START_VALUE_UP';
let INPUT_START_VALUE_DOWN = 'INPUT_START_VALUE_DOWN';
let INPUT_ONCHANGE_START_VALUE = 'INPUT_ONCHANGE_START_VALUE '

let INPUT_MAX_VALUE_UP = 'INPUT_MAX_VALUE_UP';
let INPUT_MAX_VALUE_DOWN = 'INPUT_MAX_VALUE_DOWN';
let BUTTON_SET_SETTINGS = ' BUTTON_SET_SETTINGS';



const initialState = {
    startValue: 0,
    startValueInput: 0,
    maxValue: 3,
    maxValueInput: 3,
    valueCounter: 0,
    counterIsMax: false
}

const counterReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case BUTTON_INC: {
            return (state.valueCounter !== state.maxValue) ? {
                ...state,
                valueCounter: (action.valueCounter + 1),
            } : {
                ...state,
                counterIsMax: true
            }
        }
        case BUTTON_RESET: {
            return {
                ...state,
                valueCounter: action.startValue,
                counterIsMax: false
            }
        }
        case INPUT_START_VALUE_UP: {
            return {
                ...state,
                startValueInput: action.startValueInput + 1,
            }
        }
        case INPUT_START_VALUE_DOWN: {
            return {
                ...state,
                startValueInput: action.startValueInput - 1
            }
        }
        case INPUT_ONCHANGE_START_VALUE: {
            return {
                ...state,
                startValueInput: action.startValueInput
            }
        }
        case INPUT_MAX_VALUE_UP: {
            return {
                ...state,
                maxValueInput: action.startValueInput + 1
            }
        }
        case INPUT_MAX_VALUE_DOWN: {
            return {
                ...state,
                maxValueInput: action.maxValueInput-1
            }
        }
        case BUTTON_SET_SETTINGS: {
            return {
                ...state,
                startValue: action.startValueInput,
                maxValue: action.maxValueInput
            }
        }
        default:
            return state

    }

}
export const buttonIncAC = (valueCounter: number) => {
    return {
        type: BUTTON_INC,
        valueCounter}
}
export const buttonResetAC = (startValue: number) => {
    return {
        type: BUTTON_RESET,
        startValue
    }
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
export const inputOnChangeStartValueAC = (startValueInput: number) => {
    return {
        type: INPUT_START_VALUE_DOWN,
        startValueInput
    }
}
export const inputMaxValueUpAC = () => {return {type: INPUT_MAX_VALUE_UP}}
export const inputMaxValueDownAC = () => {return {type: INPUT_MAX_VALUE_DOWN}}
export const buttonSetSettingsAC = () => {return {type: BUTTON_SET_SETTINGS}}


export default counterReducer

