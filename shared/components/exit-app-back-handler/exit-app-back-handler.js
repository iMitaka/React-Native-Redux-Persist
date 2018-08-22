import { Alert, BackHandler } from 'react-native';

const HARDWARE_BACK_PRESS = 'hardwareBackPress'

export const exitAppAlert = () => {
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

export const addBackButtonEventListener = (handleBackButtonFunction) => {
    BackHandler.addEventListener(HARDWARE_BACK_PRESS, handleBackButtonFunction);
}

export const removeBackButtonEventListener = (handleBackButtonFunction) => {
    BackHandler.removeEventListener(HARDWARE_BACK_PRESS, handleBackButtonFunction);
}