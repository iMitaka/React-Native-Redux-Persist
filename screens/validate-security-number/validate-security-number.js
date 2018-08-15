import React from 'react';
import { Text, View, TextInput, Button, BackHandler } from 'react-native';
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as securityActions from '../../redux/security/security-action-creators'

class ValidateSecurityNumber extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: {},
      securityNumber: ''
    }
  }

  componentDidMount() {
    if (!this.props.security.securityNumber) {
      this.redirectToPage()
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.security.message) {
      this.setState({
        message: newProps.security.message
      })
    }
  }

  redirectToPage = () => {
    this.props.navigation.navigate('Register')
  }

  handleInputChange = (inputName, value) => {
    this.setState({
      [inputName]: value
    });
  }

  validateSecurityNumber = () => {
    this.props.securityActions.validateSecurityNumber(this.state.securityNumber)
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Validate Your Security Number!</Text>
        </View>
        <TextInput
          style={{ height: 40 }}
          placeholder="security number..."
          value={this.state.securityNumber}
          keyboardType="numeric"
          onChangeText={(value) => this.handleInputChange('securityNumber', value)}
        />
        <Button
          onPress={this.validateSecurityNumber}
          title="VALIDATE"
        />
        <View>
          <Text
            style={{ color: this.state.message.type === 'error' ? 'red' : 'green' }}
          >{this.state.message.text}</Text>
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
