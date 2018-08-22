import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as securityActions from '../../redux/security/security-action-creators'
import lockedImage from '../../resources/images/locked.png'
import unlockedImage from '../../resources/images/unlocked.png'
import SecurityVirtualKeyboard from '../../shared/components/security-virtual-keyboard/security-virtual-keyboard'
import {
  addBackButtonEventListener,
  removeBackButtonEventListener
} from '../../shared/components/exit-app-back-handler/exit-app-back-handler'

class ValidateSecurityNumber extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: {},
      isValidNumber: false,
    }
  }

  componentDidMount() {
    addBackButtonEventListener()
  }

  componentWillUnmount() {
    this.removeBackButtonHandler()
  }

  componentWillReceiveProps(newProps) {
    if (newProps.security.message) {
      this.setState({
        message: newProps.security.message,
        isValidNumber: newProps.security.isValidNumber
      })
    } else if (!newProps.security.securityNumber) {
      this.removeBackButtonHandler()
      this.props.navigation.navigate('Register')
    }
  }

  removeBackButtonHandler = () => {
    removeBackButtonEventListener()
  }

  resetSecurityNumber = () => {
    this.props.securityActions.resetSecurityNumber()
  }

  validateSecurityNumber = (number) => {
    this.props.securityActions.validateSecurityNumber(number)
  }

  render() {
    let actionContent = this.state.isValidNumber ?
      <View style={styles.resetButtonContainer}>
        <Button
          onPress={this.resetSecurityNumber}
          title="Reset your security number"
        />
      </View>
      : <SecurityVirtualKeyboard
        label="-= Enter Your Security Number =-"
        onOkPress={(number) => this.validateSecurityNumber(number)}
      />

    return (
      <View
        style={styles.screenContainer}>
        <View
          style={styles.imageAndMessageContainer}>
          <View
            style={styles.imageContainer}>
            <Image
              source={this.state.isValidNumber ? unlockedImage : lockedImage}
            />
          </View>
          <View
            style={styles.messageContainer}>
            <Text
              style={{
                color: this.state.message.type === 'error' ? 'red' : 'greenyellow'
              }}
            >{this.state.message.text}
            </Text>
          </View>
        </View>
        <View
          style={styles.keyboardContainer}>
          {actionContent}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    security: state.security
  }
}

function mapDispatchToProps(dispatch) {
  return {
    securityActions: bindActionCreators(securityActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ValidateSecurityNumber)
