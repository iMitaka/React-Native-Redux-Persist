import * as types from './security-action-types'
import SHA256 from 'crypto-js/sha256'

export function setSecurityNumber(number) {
    let data = validateSecurityNumberLength(number, 4);

    return {
        type: types.SET_SECURITY_NUMBER,
        data: data
    }
}

export function validateSecurityNumber(number) {
    let data = validateSecurityNumberLength(number, 4);

    return {
        type: types.VALIDATE_SECURITY_NUMBER,
        data: data
    }
}

export function resetSecurityNumber() {
    return {
        type: types.RESET_SECURITY_NUMBER
    }
}

function validateSecurityNumberLength(number, minLength) {
    if (number.length >= minLength) {
        return {
            number: SHA256(number).toString()
        }
    } else {
        return {
            message: {
                type: 'error',
                text: 'Security number must be at least 4 characters!'
            }
        }
    }
}