import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    inputAndLabelContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    labelContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    label: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inputContainer: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 50,
        marginRight: 50
    },
    securityNumber: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    },
    inputButtonsContainer: {
        flex: 5,
        marginTop: 30,
        marginBottom: 10,
    }
})

export const keyboardStyles = {
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonContainer: {
        width: 100,
        height: 100,
        backgroundColor: 'rgb(128,128,128)',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 25
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
}

export default styles
