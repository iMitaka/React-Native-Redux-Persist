import React from 'react';
import { View, Text, BackHandler, Alert } from 'react-native';
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

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    this.removeBackButtonHandler()
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

  handleBackButton = () => {
    Alert.alert(
      'Exit App',
      'Exiting the application?', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => BackHandler.exitApp()
      },], {
        cancelable: false
      }
    )
    return true;
  }

  removeBackButtonHandler = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleInputChange = (inputName, value) => {
    this.setState({
      [inputName]: value
    });
  }

  redirectToPage = () => {
    this.removeBackButtonHandler()
    this.props.navigation.navigate('Validate')
  }

  setSecurityNumber = (number) => {
    this.props.securityActions.setSecurityNumber(number)
  }

  render() {
    return (
      <View
        style={styles.screenContainer}>
        <View
          style={styles.messageContainer}>
          <Text
            style={{
              color: this.state.message.type === 'error' ? 'red' : 'greenyellow'
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

