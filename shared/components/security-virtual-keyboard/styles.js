import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputAndLabelContainer: {
        flex: 1
    },
    labelContainer: {
        flex: 1
    },
    label: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 50,
        marginRight: 50
    },
    securityNumber: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        height: 45,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    inputButtonsContainer: { 
        flex: 6, 
        marginTop: 20 
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
