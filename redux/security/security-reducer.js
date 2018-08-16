import * as types from './security-action-types';

const initialState = {
    securityNumber: null,
    isValidNumber: false,
    enteredNumber: null,
    message: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_SECURITY_NUMBER: {
            state.message = action.data.message
            state.securityNumber = action.data.number
            return Object.assign({}, state)
        }
        case types.VALIDATE_SECURITY_NUMBER: {
            state.message = action.data.message
            state.enteredNumber = action.data.number
            state.isValidNumber = state.securityNumber === state.enteredNumber
            if (state.isValidNumber) {
                state.message = {
                    type: 'success',
                    text: 'Your PIN is correct!'
                }
            } else if (!state.message) {
                state.message = {
                    type: 'error',
                    text: 'Your PIN is invalid!'
                }
            }
            return Object.assign({}, state)
        }
        case types.RESET_SECURITY_NUMBER: {
            state = initialState
            return Object.assign({}, state)
        }
        default: {
            return state
        }
    }
}