import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

export const textColor = Colors.antagonist;
export const formColor = Colors.inputBackground

export const custom = StyleSheet.create({
    container: {
        flex: 1,
    },
    subcontainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        paddingTop: 40,
        paddingHorizontal: Layout.paddingHorizontal
    },
    title: {
        fontSize: 36,
        color: Colors.antagonist
    },
    normalText: {
        color: textColor,
        marginTop: 10,
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
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 80,
        alignSelf: 'flex-start'
    }
});