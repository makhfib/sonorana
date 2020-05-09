import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

export const textColor = 'white'
export const formColor = '#0E245075'

export const custom = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        paddingHorizontal: Layout.paddingHorizontal,
        justifyContent: 'center',
    },
    titleContainer: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        height: 100,
    },
    title: {
        tintColor: textColor
    },
    formContainer: {
        
    },
    errorContainer: {
        backgroundColor: Colors.danger,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical: 2,
        paddingHorizontal: 10,
    },  
    errorSpace: {
        marginVertical: 10,
    },
    error: {
        paddingHorizontal: 5,
        color: Colors.background
    },
    form: {
        backgroundColor: formColor,
        height: 120,
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
    alternativeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 80,
    }
});