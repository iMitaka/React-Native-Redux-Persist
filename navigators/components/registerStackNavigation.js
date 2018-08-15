import { createStackNavigator } from 'react-navigation';
import RegisterSecurityNumber from '../../screens/register-security-number/register-security-number'

const screens = {
    Register: {
        screen: RegisterSecurityNumber
    }
}

const screensConfiguration = {
    initialRouteName: 'Register',
    navigationOptions: {
        header: null,
    }
}

export default createStackNavigator(screens, screensConfiguration);