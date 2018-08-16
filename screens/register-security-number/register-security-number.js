import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as securityActions from '../../redux/security/security-action-creators'
import SecurityVirtualKeyboard from '../../shared/components/security-virtual-keyboard/security-virtual-keyboard'

class RegisterSecurityNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {}
    };
  }

  componentWillMount() {
    if (this.props.security.securityNumber) {
      this.redirectToPage()
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.security.message) {
      this.setState({
        message: newProps.security.message
      })
    } else {
      this.redirectToPage()
    }
  }

  handleInputChange = (inputName, value) => {
    this.setState({
      [inputName]: value
    });
  }

  redirectToPage = () => {
    this.props.navigation.navigate('Validate')
  }

  setSecurityNumber = (number) => {
    this.props.securityActions.setSecurityNumber(number)
  }

  render() {
    return (
      <View
        style={styles.screenContainer}>
        <ScrollView
          style={styles.contentContainer}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={styles.messageContainer}>
            <Text
              style={{
                color: this.state.message.type === 'error' ? 'red' : 'green'
              }}
            >{this.state.message.text}
            </Text>
          </View>
          <View
            style={styles.keyboardContainer}>
            <SecurityVirtualKeyboard
              label="-= Set Your Security Number =-"
              onOkPress={(number) => this.setSecurityNumber(number)}
            />
          </View>
        </ScrollView>
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
)(RegisterSecurityNumber)

