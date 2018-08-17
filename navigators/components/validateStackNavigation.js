import { createStackNavigator } from 'react-navigation';
import ValidateSecurityNumber from '../../screens/validate-security-number/validate-security-number'

const screens = {
    Validate: {
        screen: ValidateSecurityNumber
    }
}

const screensConfiguration = {
    initialRouteName: 'Validate',
    navigationOptions: {
        header: null,
    }
}

export default createStackNavigator(screens, screensConfiguration);