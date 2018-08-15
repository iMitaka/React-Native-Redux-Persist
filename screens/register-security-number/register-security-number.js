import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as securityActions from '../../redux/security/security-action-creators'

class RegisterSecurityNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      securityNumber: '',
      message: {}
    };
  }

  componentDidMount() {
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

  setSecurityNumber = () => {
    this.props.securityActions.setSecurityNumber(this.state.securityNumber)
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Set Your Security Number!</Text>
        </View>
        <TextInput
          style={{ height: 40 }}
          placeholder="security number..."
          value={this.state.securityNumber}
          keyboardType="numeric"
          onChangeText={(value) => this.handleInputChange('securityNumber', value)}
        />
        <Button
          onPress={this.setSecurityNumber}
          title="SAVE"
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
)(RegisterSecurityNumber)

