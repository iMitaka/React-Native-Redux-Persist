import { createStackNavigator } from 'react-navigation';
import ValidateSecurityNumber from '../../screens/validate-security-number/validate-security-number'

const screens = {
    Validate: {
        screen: ValidateSecurityNumber
    }
}

const screensConfiguration = {
    initialRouteName: 'Validate',
    //portraitOnlyMode: true,
    navigationOptions: {
        header: null,
    }
}

export default createStackNavigator(screens, screensConfiguration);