import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles, keyboardStyles } from './styles'

const confirm = 'OK'
const backspace = '<'

const inputButtonsConstants = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    [backspace, '0', confirm]
]

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
        } else if (inputValue === backspace) {
            if (securityNumber.length >= 1) securityNumber.pop()
            this.setState({
                securityNumberHide: '*'.repeat(securityNumber.length)
            })
        } else {
            if (securityNumber.length <= 15) securityNumber.push(inputValue)

            this.setState({
                securityNumber: securityNumber.join(''),
                securityNumberHide: '*'.repeat(securityNumber.length - 1) + inputValue
            })

            animationHideTimeOut = setTimeout(() => {
                this.setState({
                    securityNumberHide: '*'.repeat(securityNumber.length)
                })
            }, 1000);
        }

        this.setState({
            securityNumber: securityNumber.join(''),
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
