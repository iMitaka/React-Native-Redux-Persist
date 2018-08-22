import { Alert, BackHandler } from 'react-native';

const HARDWARE_BACK_PRESS = 'hardwareBackPress'

const EXIT_APP_ALERT = () => {
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

export const addBackButtonEventListener = () => {
    BackHandler.addEventListener(HARDWARE_BACK_PRESS, EXIT_APP_ALERT);
}

export const removeBackButtonEventListener = () => {
    BackHandler.removeEventListener(HARDWARE_BACK_PRESS, EXIT_APP_ALERT);
}