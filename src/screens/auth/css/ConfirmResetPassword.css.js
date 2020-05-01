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
    },
    normalText: {
        color: textColor,
        marginVertical: 10,
    },
    form: {
        backgroundColor: formColor,
        opacity: 1,
        height: 120,
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
        height: 35,
        paddingLeft: 10,
    },
    separator: {
        height: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.notwhite,
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 80,
        alignSelf: 'flex-start'
    }
});