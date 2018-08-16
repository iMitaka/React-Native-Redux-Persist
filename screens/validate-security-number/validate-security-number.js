import React from 'react';
import { Text, View, Button, Image, ScrollView } from 'react-native';
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as securityActions from '../../redux/security/security-action-creators'
import lockedImage from '../../resources/images/locked.png'
import unlockedImage from '../../resources/images/unlocked.png'
import SecurityVirtualKeyboard from '../../shared/components/security-virtual-keyboard/security-virtual-keyboard'

class ValidateSecurityNumber extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: {},
      isValidNumber: false,
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.security.message) {
      this.setState({
        message: newProps.security.message,
        isValidNumber: newProps.security.isValidNumber
      })
    } else if (!newProps.security.securityNumber) {
      this.props.navigation.navigate('Register')
    }
  }

  resetSecurityNumber = () => {
    this.props.securityActions.resetSecurityNumber()
  }

  validateSecurityNumber = (number) => {
    this.props.securityActions.validateSecurityNumber(number)
  }

  render() {
    let actionContent = this.state.isValidNumber ?
      <View
        style={styles.resetButtonContainer}>
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
      <ScrollView
        style={styles.screenContainer}
        contentContainerStyle={{ flexGrow: 1 }}>
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
                color: this.state.message.type === 'error' ? 'red' : 'green'
              }}
            >{this.state.message.text}
            </Text>
          </View>
        </View>
        <View
          style={styles.keyboardContainer}>
          {actionContent}
        </View>
      </ScrollView>
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
