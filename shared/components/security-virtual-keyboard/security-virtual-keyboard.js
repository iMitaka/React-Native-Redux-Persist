import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles, keyboardStyles } from './styles'

const MAX_NUMBERS_INPUT = 15
const CONFIRM = 'OK'
const BACKSPACE = '<<'
const INPUT_BUTTONS_CONSTANTS = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    [BACKSPACE, '0', CONFIRM]
]
const HIDE_VALUE_ANIMATION_DUARATION = 1000

var hideAnimationTimeOut

class SecurityVirtualKeyboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            securityNumber: '',
            securityNumberHide: ''
        }
    }

    handleInputChange = (inputValue) => {
        clearTimeout(hideAnimationTimeOut)

        let securityNumber = this.state.securityNumber.split('') || []

        if (inputValue === CONFIRM) {
            this.props.onOkPress(this.state.securityNumber)
            securityNumber = []
            this.setHiddenSecurityNumberText(securityNumber.length)
        } else if (inputValue === BACKSPACE) {
            if (securityNumber.length >= 1) securityNumber.pop()
            this.setHiddenSecurityNumberText(securityNumber.length)
        } else {
            if (securityNumber.length <= MAX_NUMBERS_INPUT) securityNumber.push(inputValue)

            this.setState({
                securityNumber: securityNumber.join(''),
                securityNumberHide: '*'.repeat(securityNumber.length - 1) + inputValue
            })

            hideAnimationTimeOut = setTimeout(() => {
                this.setHiddenSecurityNumberText(securityNumber.length)
            }, HIDE_VALUE_ANIMATION_DUARATION);
        }

        this.setState({
            securityNumber: securityNumber.join(''),
        })
    }

    setHiddenSecurityNumberText = (length) => {
        this.setState({
            securityNumberHide: '*'.repeat(length)
        })
    }

    render() {
        let inputButons = INPUT_BUTTONS_CONSTANTS.map((inputButtons, index) => {
            let inputConstantRow = inputButtons.map((button, buttonIndex) => {
                return (
                    <TouchableOpacity
                        key={buttonIndex}
                        onPress={() => this.handleInputChange(button)} >
                        <View
                            style={keyboardStyles.buttonContainer}>
                            <Text
                                style={keyboardStyles.buttonText}
                            >{button}
                            </Text>

                        </View>
                    </TouchableOpacity >
                )
            })
            return (
                <View key={index} style={keyboardStyles.row}>
                    {inputConstantRow}
                </View >
            )
        })

        return (
            <View>
                <View
                    style={styles.inputAndLabelContainer}>
                    <View
                        style={styles.labelContainer}>
                        <Text
                            style={styles.label}
                        >{this.props.label}</Text>
                    </View>
                    <View
                        style={styles.inputContainer}>
                        <Text
                            style={styles.securityNumber}
                        >{this.state.securityNumberHide}
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.inputButtonsContainer}>
                    {inputButons}
                </View>
            </View>
        );
    }
}

export default SecurityVirtualKeyboard
