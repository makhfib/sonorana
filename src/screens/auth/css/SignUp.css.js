import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

export const textColor = 'white';
export const formColor = '#0E245075'

export const custom = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: Layout.paddingHorizontal,
        justifyContent: 'center'
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    title: {
        tintColor: textColor
    },
    formContainer: {
        flex: 3,
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
    form: {
        backgroundColor: formColor,
        opacity: 1,
        height: 180,
        borderRadius: 4,
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    fieldIcon: {
        width: 20,
        height: 20,
        tintColor: Colors.background
    },
    inputLabel: {
        marginTop: 5,
        color: textColor,
        paddingLeft: 10,
    },
    input: {
        flex: 1,
        color: textColor,
        fontSize: 14,
        height: 35,
        paddingLeft: 10,
    },
    normalText: {
        color: textColor,
        marginTop: 10,
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: formColor,
        borderRadius: 5,
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
    }
});