import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles, keyboardStyles } from './styles'

const maxNumbersInput = 15
const confirm = 'OK'
const backspace = '<<'
const inputButtonsConstants = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    [backspace, '0', confirm]
]

const animationHideDuration = 1000
var animationHideTimeOut

class SecurityVirtualKeyboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            securityNumber: '',
            securityNumberHide: ''
        }
    }

    handleInputChange = (inputValue) => {
        clearTimeout(animationHideTimeOut)

        let securityNumber = this.state.securityNumber.split('') || []

        if (inputValue === confirm) {
            this.props.onOkPress(this.state.securityNumber)
            securityNumber = []
            this.setHiddenSecurityNumberText(securityNumber.length)
        } else if (inputValue === backspace) {
            if (securityNumber.length >= 1) securityNumber.pop()
            this.setHiddenSecurityNumberText(securityNumber.length)
        } else {
            if (securityNumber.length <= maxNumbersInput) securityNumber.push(inputValue)

            this.setState({
                securityNumber: securityNumber.join(''),
                securityNumberHide: '*'.repeat(securityNumber.length - 1) + inputValue
            })

            animationHideTimeOut = setTimeout(() => {
                this.setHiddenSecurityNumberText(securityNumber.length)
            }, animationHideDuration);
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
        let inputButons = inputButtonsConstants.map((inputButtons, index) => {
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
