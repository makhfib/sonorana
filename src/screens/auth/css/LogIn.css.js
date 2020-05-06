import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

export const textColor = Colors.antagonist
export const formColor = Colors.inputBackground

export const custom = StyleSheet.create({
    container: {
        flex: 1,
    },
    secondContainer: {
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: Colors.background
    },
    titleContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 150,
        resizeMode: 'contain'
    },
    title: {
        tintColor: Colors.background
    },
    formContainer: {
        paddingHorizontal: Layout.paddingHorizontal,
    },
    errorContainer: {
        height: 20,
        marginVertical: 10,
    },  
    error: {
        color: Colors.danger
    },
    form: {
        backgroundColor: Colors.inputBackground,
        height: 60,
        borderRadius: 4,
        marginBottom: 20,
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    fieldIcon: {
        width: 20,
        height: 20,
        tintColor: Colors.default
    },
    inputLabel: {
        marginTop: 5,
        color: Colors.antagonist,
        paddingLeft: 10,
        fontWeight:'bold'
    },
    input: {
        flex: 1,
        color: Colors.antagonist,
        height: 35,
        width: '100%',
        paddingLeft: 10,
    },
    normalText: {
        color: Colors.default,
    },
    resetContainer: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    alternativeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 60,
        alignItems: 'center',
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 80,
    },
    signUpButton: { 
        fontWeight: 'bold', 
        color: Colors.tint, 
        padding: 10
    }
});