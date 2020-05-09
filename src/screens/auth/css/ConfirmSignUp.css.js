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
    errorSpace: {
        marginVertical: 10,
    },
    errorContainer: {
        backgroundColor: Colors.danger,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical: 2,
        paddingHorizontal: 10,
    },  
    error: {
        paddingHorizontal: 5,
        color: Colors.background
    },
    fieldIcon: {
        width: 20,
        height: 20,
        tintColor: Colors.background
    },
    form: {
        backgroundColor: formColor,
        opacity: 1,
        height: 60,
        borderRadius: 4,
    },
    inputLabel: {
        marginTop: 5,
        color: textColor,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    input: {
        color: textColor,
        fontSize: 14,
        height: 35,
        paddingLeft: 10,
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 80,
        alignSelf: 'flex-start'
    }
});