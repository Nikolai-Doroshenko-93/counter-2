import React from "react";

let BUTTON_INC = 'BUTTON_INC';
let BUTTON_RESET = 'BUTTON_RESET';
let INPUT_START_VALUE_UP = 'INPUT_START_VALUE_UP';
let INPUT_START_VALUE_DOWN = 'INPUT_START_VALUE_DOWN';
let INPUT_MAX_VALUE_UP = 'INPUT_MAX_VALUE_UP';
let INPUT_MAX_VALUE_DOWN = 'INPUT_MAX_VALUE_DOWN';
let BUTTON_SET_SETTINGS = ' BUTTON_SET_SETTINGS'


const initialState = {
    startValue: 0,
    startValueInput: 0,
    maxValue: 0,
    maxValueInput: 0,
    valueCounter: 0
}

const counterReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case BUTTON_INC: {
            return {
                ...state,
                valueCounter: (state.valueCounter + 1)
            }
        }
        case BUTTON_RESET: {
            return {
                ...state,
                valueCounter: state.startValue
            }
        }
        case INPUT_START_VALUE_UP: {
            return {
                ...state,
                startValueInput: (state.startValueInput + 1)
            }
        }
        case INPUT_START_VALUE_DOWN: {
            return {
                ...state,
                startValueInput: (state.startValueInput - 1)
            }
        }
        case INPUT_MAX_VALUE_UP: {
            return {
                ...state,
                maxValueInput: (state.startValueInput + 1)
            }
        }
        case INPUT_MAX_VALUE_DOWN: {
            return {
                ...state,
                maxValueInput: (state.maxValueInput-1)
            }
        }
        case BUTTON_SET_SETTINGS: {
            return {
                ...state,
                startValue: state.startValueInput,
                maxValue: state.maxValueInput
            }
        }
        default:
            return state

    }

}
export const buttonIncAC = () => {return {type: BUTTON_INC}}
export const buttonResetAC = () => {return {type: BUTTON_RESET}}
export const inputStartValueUpAC = () => {return {type: INPUT_START_VALUE_UP}}
export const inputStartValueDownAC = () => {return {type: INPUT_START_VALUE_DOWN}}
export const inputMaxValueUpAC = () => {return {type: INPUT_MAX_VALUE_UP}}
export const inputMaxValueDownAC = () => {return {type: INPUT_MAX_VALUE_DOWN}}
export const buttonSetSettingsAC = () => {return {type: BUTTON_SET_SETTINGS}}


export default counterReducer

