import { createSwitchNavigator } from 'react-navigation';
import RegisterStackNavigation from './components/registerStackNavigation'
import ValidateStackNavigation from './components/validateStackNavigation'

export default createSwitchNavigator({
    Register: RegisterStackNavigation,
    Validate: ValidateStackNavigation,
});
