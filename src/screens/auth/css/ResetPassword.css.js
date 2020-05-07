import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'
import Layout from '../../../constants/Layout'
import TextStyle from '../../../constants/TextStyle'

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
        paddingHorizontal: Layout.paddingHorizontal,
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