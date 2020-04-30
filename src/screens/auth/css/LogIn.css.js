import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/Colors'
import Layout from '../../../constants/Layout'
import TextStyle from '../../../constants/TextStyle'

export const textColor = Colors.background
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
        marginBottom: 25,
    },
    title: {
        tintColor: textColor
    },
    formContainer: {

    },
    form: {
        backgroundColor: formColor,
        height: 120,
        borderRadius: 4,
    },
    inputLabel: {
        marginTop: 5,
        color: textColor,
        paddingLeft: 10,
        fontSize: TextStyle.sizeTwo
    },
    input: {
        color: textColor,
        fontSize: TextStyle.sizeTwo,
        height: 35,
        paddingLeft: 10,
    },
    normalText: {
        color: textColor,
        marginTop: 10,
        paddingHorizontal: 10,
        backgroundColor: formColor,
        borderRadius: 5,
        fontSize: TextStyle.sizeTwo
    },
    separator: {
        height: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.notwhite,
    },
    alternativeContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 80,
    }
});